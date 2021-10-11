"use strict";

import { assert, assertNotReached } from "../assert.js";
import { v4 as uuidv4 } from "uuid";
import { MultiplexedProxyPeer, ProxyPeer } from "../webrtc.js";
import wrtc from "../wrtc.node.js"; // empty in browser, using webpack plugin dotenv-webpack

const ICE_SERVERS = [
  {
    credential: "bshu1211",
    urls: "turn:stun.ppzhilian.com",
    username: "bshu",
  },
  { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
];

class SdpObject {
  constructor(peerId, srcUid, dstUid, sdpText) {
    this.peerId = peerId;
    this.srcUid = srcUid;
    this.dstUid = dstUid;
    this.sdpText = sdpText;
  }

  rawText() {
    return this.sdpText;
  }
}

// one signaling per user
// one signaling multiple peers
class BasicSignaling {
  constructor(uid, config) {
    this.uid = uid;
    this.config = config;

    // peerId -> ProxyPeer
    this.localPeers = {};

    const fn = function () {
      this.OnReceiveSdps((sdpObjects) => {
        sdpObjects.map((sdpObject) => {
          if (!sdpObject.peerId) {
            // error?
            return;
          }
          const localPeer = this.localPeers[sdpObject.peerId];
          if (localPeer) {
            localPeer.signal(sdpObject.rawText());
          }
        });
      });
    };

    if (config.isClient || config.serverPeerForTesting) {
      // wait for subclass constructor finishes,
      // then subclass instance's this is ready
      setTimeout(fn.bind(this), 0);
    }
  }

  OnReceiveSdps(callback) {
    assertNotReached("Interface not IMPLEMENTED");
  }

  SendSdp(sdpObject) {
    assertNotReached("Interface not IMPLEMENTED");
  }

  CreateSimplePeer(peerId) {
    const simplePeerConfig = {
      initiator: this.config.isClient,
      trickle: true,
      config: {
        iceServers: ICE_SERVERS,
      },
    };
    // Node.js env, use wrtc
    if (wrtc && Object.keys(wrtc).length !== 0) {
      simplePeerConfig["wrtc"] = wrtc;
    }
    if (this.config.useMultiplex) {
      return new MultiplexedProxyPeer(peerId, simplePeerConfig);
    } else {
      return new ProxyPeer(peerId, simplePeerConfig);
    }
  }

  // peerId: for server signalings, use same peerId as client in a client/server pair
  // dstUid: for server signalings, we do not know where to send the offer/answer
  //         before peer creation
  CreatePeer(peerId, dstUid) {
    peerId = peerId || uuidv4();
    const peer = this.CreateSimplePeer(peerId);
    assert(!this.localPeers[peerId], `duplicate peerid in localPeers`);
    this.localPeers[peerId] = peer;

    // on or once?
    peer.on("signal", (sdpText) => {
      const sdpObject = new SdpObject(peer.peerId, this.uid, dstUid, sdpText);
      console.log("SIGNAL", sdpObject);
      this.SendSdp(sdpObject);
    });

    peer.once("connect", () => {
      console.log("peer connected");
    });

    peer.on("close", () => {
      console.log("peer close");
      delete this.localPeers[peerId];
    });

    peer.on("error", (err) => {
      console.error("peer err:", err);
      delete this.localPeers[peerId];
    });

    return peer;
  }
}

class MockSignaling extends BasicSignaling {
  constructor(uid, config, registry) {
    super(uid, config);
    this.registry = registry;
  }

  SendSdp(sdpObject) {
    this.registry.signal(sdpObject.dstUid, sdpObject);
  }

  OnReceiveSdps(fn) {
    this.registry.registerCallback(this.uid, fn);
  }
}

export { SdpObject, BasicSignaling, MockSignaling };
