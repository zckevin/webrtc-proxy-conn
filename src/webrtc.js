import SimplePeer from "simple-peer";
import wrtc from "./wrtc.node.js"; // empty in browser, using webpack plugin dotenv-webpack
import AblySignaling from "./signaling/signaling.ably.js";
import { v4 as uuid } from "uuid";
import { str2ab, ab2str } from "./protocol.js";

import { BPMux } from "bpmux";
import net from "net";
import pump from "pump";

const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/; // ipv4/ipv6/hostname + port
const DEFAULT_SERVER_PEER_ID = "foobar89";

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
  }

  _onNewMultiplexedDuplex(duplex) {
    duplex.on("error", (err) => {
      console.error(err);
    });
  }

  DialWebrtcConn(addr) {
    let duplex = this;
    if (this.useMultiplex) {
      if (!this.mux) {
        this.mux = new BPMux(this);
      }
      duplex = this.mux.multiplex();
      this._onNewMultiplexedDuplex(duplex);
    }
    const headerAb = str2ab(addr);
    console.log("headerAb:", headerAb);
    duplex.write(new Uint8Array(headerAb));
    return duplex;
  }

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
    this.removeListener("data", this.onRecvHeader);

    const tcpConn = dialNetConn(addrStr, () => {
      if (leftAb.byteLength > 0) {
        console.log("leftAb", leftAb);
        tcpConn.write(new Uint8Array(leftAb));
      }
    });

    // bi-directional pipe
    pump(duplex, tcpConn, (err) => {
      duplex.destroy();
      console.error("pump err write", err);
    });
    pump(tcpConn, duplex, (err) => {
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
      this.destroy();
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
    }
    this.mux.on("handshake", (duplex) => {
      this._onNewMultiplexedDuplex(duplex);
      cb(duplex);
    });
  }
}

export { ProxyPeer, MultiplexedProxyPeer };
