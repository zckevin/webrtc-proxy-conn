"use strict";

import SimplePeerJs from "simple-peerjs";
import { isBrowser, isNode } from "browser-or-node";
import { BPMux } from "bpmux";
import net from "net";
import pump from "pump";
import _ from "lodash";

import { assert, assertNotReached } from "./assert.js";
import { wrtc, fetch, WebSocket } from "./wrtc.node.js";
import { str2ab, ab2str } from "./protocol.js";

const ICE_SERVERS = [
  {
    credential: "bshu1211",
    urls: "turn:stun.ppzhilian.com",
    username: "bshu",
  },
  { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
];

const defaultSimplePeerConfig = {
  trickle: true,
  config: {
    iceServers: ICE_SERVERS,
  },
};

const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/; // ipv4/ipv6/hostname + port
export const DEFAULT_SERVER_UID = "sb_gfw_server_89_258";

function dialNetConn(addrStr, cb) {
  let [host, port] = addrToIPPort(addrStr);
  console.log("create conn to:", host, port);
  let conn = net.connect(port, host, cb);
  return conn;
}

function addrToIPPort(addr) {
  const m = ADDR_RE.exec(addr);
  if (!m) throw new Error(`invalid addr: ${addr}`);
  return [m[1], Number(m[2])];
}

const defaultConfig = {
  useMultiplex: true,
  simplePeer: {
    trickle: true,
    config: {
      iceServers: ICE_SERVERS,
    },
    initiator: true,
  },
  websocket: {
    host: "localhost",
    port: 9000,
    id: null,
  },
};

class PeerJsBasic {
  constructor(isClient, uid, dstUid, config) {
    config = _.merge(JSON.parse(JSON.stringify(defaultConfig)), config);
    config.simplePeer.initiator = isClient;
    config.websocket.id = uid;

    let usedConfig;
    if (isBrowser) {
      usedConfig = {
        simplePeer: config.simplePeer,
        ...config.websocket,
      };
    } else if (isNode) {
      usedConfig = {
        wrtc,
        fetch,
        WebSocket,
        simplePeer: config.simplePeer,
        ...config.websocket,
      };
    } else {
      assertNotReached("Unsupported env :-(");
    }
    console.log("=====================================================");
    console.log(usedConfig);
    console.log("=====================================================");
    this.peerjs = new SimplePeerJs(usedConfig);
    this.useMultiplex = config.useMultiplex;
    this.uid = uid;
    this.dstUid = dstUid;
  }

  onNewMultiplexedDuplex(duplex) {
    duplex.on("error", (err) => {
      console.error(err);
    });
  }
}

export class PeerJsClient extends PeerJsBasic {
  constructor(uid, dstUid, config) {
    dstUid = dstUid || DEFAULT_SERVER_UID;
    super(true, uid, dstUid, config);

    this.conn = this.peerjs.connect(this.dstUid)
  }

  async DialWebrtcConn(addr) {
    let duplex = (await this.conn).peer;

    if (this.useMultiplex) {
      if (!this.mux) {
        this.mux = new BPMux(duplex);
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
    duplex.write(new Uint8Array(headerAb), () => {
      // signal WebTorrent to know that duplex is ready
      duplex.emit("connect");
    });
    return duplex;
  }
}

export class PeerJsServer extends PeerJsBasic {
  constructor(uid, config) {
    super(false, uid, null, config);

    this.onNewWebrtcConn((duplex) => {
      const onRecvHeaderToBeCanceled = (data) => {
        this.onRecvHeader(duplex, data);
      };
      duplex.onRecvHeaderToBeCanceled = onRecvHeaderToBeCanceled;
      duplex.on("data", onRecvHeaderToBeCanceled);
    });
  }

  onNewWebrtcConn(cb) {
    this.peerjs.on("connect", (conn) => {
      console.log("Peer connected:", conn.peerId);

      // conn.peer is SimplePeer peer instance

      if (this.useMultiplex) {
        if (!this.mux) {
          this.mux = new BPMux(conn.peer);
          this.mux.on("error", (err) => {
            console.error("bpmux error:", err);
          });
        }
        this.mux.on("handshake", (duplex) => {
          this.onNewMultiplexedDuplex(duplex);
          cb(duplex);
        });
      } else {
        cb(conn.peer);
      }
    });
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

    tcpConn.on("error", (err) => {
      console.error("tcp conn error: ", err);
      duplex.destroy();
    });
    tcpConn.on("close", () => {
      console.log("tcp conn close");
      duplex.destroy();
    });
  }
}
