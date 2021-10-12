import SimplePeer from "simple-peer";
import wrtc from "./wrtc.node.js"; // empty in browser, using webpack plugin dotenv-webpack
import AblySignaling from "./signaling/signaling.ably.js";
import { v4 as uuid } from "uuid";
import { str2ab, ab2str } from "./protocol.js";

import { BPMux } from "bpmux";
import net from "net";
import pump from "pump";
import { assert, assertNotReached } from "./assert.js";

const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/; // ipv4/ipv6/hostname + port

function addrToIPPort(addr) {
  const m = ADDR_RE.exec(addr);
  if (!m) throw new Error(`invalid addr: ${addr}`);
  return [m[1], Number(m[2])];
}

function dialNetConn(addrStr, cb) {
  let [host, port] = addrToIPPort(addrStr);
  console.log("create conn to:", host, port);
  let conn = net.connect(port, host, cb);
  return conn;
}

class ProxyPeer extends SimplePeer {
  constructor(peerId, simplePeerConfig, useMultiplex = false) {
    super(simplePeerConfig);
    this.peerId = peerId;
    this.useMultiplex = useMultiplex;

    this._sdpObjects = [];
    this._connected = false;
    this._sendingSdpsLoopStarted = false;
    this.SendSdp = null;

    this._recvedOfferOrAnswer = false;
  }

  // in case remote peer not missing any offer/answer,
  // repeatly sending all sdps every N seconds util peer connected or after X retrials
  startSendingSdpsLoopIfNotStarted() {
    if (this._sendingSdpsLoopStarted) {
      return;
    }
    this._sendingSdpsLoopStarted = true;

    const RETRY_N = 10;
    let n = 0;
    this._retryInterval = setInterval(() => {
      assert(this.SendSdp);
      this._sdpObjects.map((sdpObject) => {
        this.SendSdp(sdpObject);
      });

      n++;
      if (n >= RETRY_N) {
        clearInterval(this._retryInterval);
        if (!this._connected) {
          console.error(`peer connect failed after ${RETRY_N} retries...`);
        }
      }
    }, 1000);
  }

  appendSdps(sdpObject) {
    this._sdpObjects.push(sdpObject);
  }

  onNewMultiplexedDuplex(duplex) {
    duplex.on("error", (err) => {
      console.error(err);
    });
  }

  DialWebrtcConn(addr) {
    let duplex = this;
    if (this.useMultiplex) {
      if (!this.mux) {
        this.mux = new BPMux(this);
        this.mux.on("error", (err) => {
          console.error("bpmux error:", err);
        });
      }
      duplex = this.mux.multiplex();
      this.onNewMultiplexedDuplex(duplex);
    } else {
      if (this._webrtcConnDrainedForNonMultiplexedPeer) {
        assertNotReached(
          "dialWebrtcConn could only be called once for non-multiplexed peer!"
        );
      } else {
        this._webrtcConnDrainedForNonMultiplexedPeer = true;
      }
    }
    const headerAb = str2ab(addr);
    // console.log("DialWebrtcConn wrote headerAb:", headerAb);
    duplex.write(new Uint8Array(headerAb));
    return duplex;
  }

  // server side ProxyPeer only
  onRecvHeader(duplex, data) {
    let ab;
    if (data instanceof Uint8Array) {
      ab = data.buffer.slice(
        data.byteOffset,
        data.byteOffset + data.byteLength
      );
    } else if (data instanceof ArrayBuffer) {
      ab = data;
    } else {
      assertNotReached("peer on recv data unexpected type");
    }

    // console.log("111", ab)
    let [addrStr, leftAb] = ab2str(ab);
    if (!addrStr) {
      // assertNotReached("peer on recv data header fragmentation");
      console.error(ab, "peer on recv data header fragmentation");
      return;
    }

    // header is recved, then pump to conn

    // removeListener v.s. removeEventListener?
    duplex.removeListener("data", duplex.onRecvHeaderToBeCanceled);

    const tcpConn = dialNetConn(addrStr, () => {
      if (leftAb.byteLength > 0) {
        console.log("leftAb", leftAb);
        tcpConn.write(new Uint8Array(leftAb));
      }
    });

    // bi-directional pipe
    pump(duplex, tcpConn, (err) => {
      // would err be nil???
      if (!err) {
        return;
      }
      duplex.destroy();
      console.error("pump err write", err);
    });
    pump(tcpConn, duplex, (err) => {
      if (!err) {
        return;
      }
      duplex.destroy();
      console.error("pump err read", err);
    });

    tcpConn.once("error", (err) => {
      console.error("tcp conn error: ", err);
      duplex.destroy();
    });
    tcpConn.on("close", () => {
      console.log("tcp conn close");
      duplex.destroy();
    });
  }

  onNewWebrtcConn(cb) {
    cb(this);
  }
}

class MultiplexedProxyPeer extends ProxyPeer {
  constructor(peerId, simplePeerConfig) {
    super(peerId, simplePeerConfig, true);
  }

  onNewWebrtcConn(cb) {
    if (!this.mux) {
      this.mux = new BPMux(this);
      this.mux.on("error", (err) => {
        console.error("bpmux error:", err);
      });
    }
    this.mux.on("handshake", (duplex) => {
      this.onNewMultiplexedDuplex(duplex);
      cb(duplex);
    });
  }
}

export { ProxyPeer, MultiplexedProxyPeer };
