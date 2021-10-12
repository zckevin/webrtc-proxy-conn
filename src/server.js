"use strict";

import net from "net";
import pump from "pump";

import { assert, assertNotReached } from "./assert.js";
import { ab2str } from "./protocol.js";
import { MultiplexedPeer } from "./webrtc.js";
import leancloud from "./signaling/leancloud.js";
// import LeancloudSignaling from "./signaling/signaling.leancloud.js";
import AblySignaling from "./signaling/signaling.ably.js";
import { ProxyClient } from "./client.js";
import { SignalingConfig } from "./signaling/signaling.js";

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

/*
function RunLoopLeancloud() {
  const { appIds, appKeys, endpoints } = leancloud.GetEnv();
  for (let index = 0; index < appIds.length; index++) {
    const config = {
      APP_ID: appIds[index],
      APP_KEY: appKeys[index],
      API_ENDPOINT: endpoints[index],
    };
    // querySdp(config);
    const signaling = new LeancloudSignaling(
      DEFAULT_SERVER_PEER_ID,
      null,
      config
    );
    signaling.probe_interval_seconds = 3;
    signaling.WaitForSdpsForever((sdps) => {
      sdps.map((sdp) => {
        createPeer(sdp.fromId, sdp.sdp, signaling);
      });
    });
  }
}
*/

function RunLoopAbly() {
  const signaling = new AblySignaling(
    DEFAULT_SERVER_PEER_ID,
    null, // peerId
    false // isClient
  );

  signaling.WaitForSdpsForever((sdps) => {
    // in case any fatal errors...
    try {
      sdps.map((sdp) => {
        createPeer(sdp.fromId, sdp.sdp, signaling);
      });
    } catch (err) {
      console.error(err);
    }
  });
}

class Server {
  constructor(signaling) {
    const config = new SignalingConfig()
      .set("isClient", false)
      .set("useMultiplex", false)
      .set("serverPeerForTesting", false);
    this.signaling =
      signaling || new AblySignaling(DEFAULT_SERVER_PEER_ID, config);
    this.signaling.appendOnReceiveSdpsCallbacks(this.OnReceiveSdps.bind(this));
  }

  OnReceiveSdps(sdpObjects) {
    sdpObjects.map((sdpObject) => {
      const peerId = sdpObject.peerId;
      if (!peerId) {
        // error?
        return;
      }
      let peer = this.signaling.localPeers[peerId];
      if (!peer) {
        console.log('sbsbsbs server create peer')
        peer = this.signaling.CreatePeer(peerId, sdpObject.srcUid);

        if (this.onNewPeer) {
          this.onNewPeer(peer);
        }

        peer.onNewWebrtcConn((duplex) => {
          duplex.on("data", (data) => {
            peer.onRecvHeader(duplex, data);
          });
        });
      }
      peer.signal(sdpObject.rawText());
    });
  }
}

class TestingServer {
  constructor(peer, duplex) {
    duplex.on("data", (data) => {
      peer.onRecvHeader(duplex, data);
    });
  }
}

export { RunLoopAbly, Server, TestingServer };
