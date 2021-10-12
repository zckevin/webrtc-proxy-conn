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

class SignalingConfig {
  constructor() {
    this.isClient = false;
    this.useMultiplex = false;

    this.serverPeerForTesting = true;
    this.useTrickle = true;

    // this.setupSetters();
  }

  set(key, value) {
    assert(
      this.hasOwnProperty(key),
      `unknown key: ${key} set in SignalingConfig`
    );
    this[key] = value;
    return this;
  }

  /*
  setupSetters() {
    const keys = Object.keys(this);
    const fn = function (key) {
      const expr = `
      this.set${key.charAt(0).toUpperCase() + key.slice(1)} = function(${key}) {
        this.${key} = ${key};
        return this;
      }`;
      eval(expr);
    };
    keys.map((key) => {
      fn.call(this, key);
    });
  }
  */

  clone() {
    // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    const cloned = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
    return cloned;
  }
}

// pod object
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

  static parseSerializedSdpObjects(objs) {
    return objs.map(
      (o) => new SdpObject(o.peerId, o.srcUid, o.dstUid, o.sdpText)
    );
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

    this.onReceiveSdpsCallbacks = [];

    const that = this;
    const fn = function () {
      const callback = (sdpObjects) => {
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
      };
      if (config.isClient || config.serverPeerForTesting) {
        this.onReceiveSdpsCallbacks.push(callback);
      }

      this.setupOnReceiveSdps((sdpObjects) => {
        that.onReceiveSdpsCallbacks.map((cb) => {
          cb.call(that, sdpObjects);
        });
      });
    };

    // wait for subclass constructor finishes, subclass instance is ready
    // and then we could call subinstance.setupOnReceiveSdps()
    setTimeout(fn.bind(this), 0);
  }

  appendOnReceiveSdpsCallbacks(callback) {
    assert(
      typeof callback === "function",
      "append none-function object to onReceiveSdpsCallbacks"
    );
    this.onReceiveSdpsCallbacks.push(callback);
  }

  setupOnReceiveSdps(callback) {
    assertNotReached("Interface not IMPLEMENTED");
  }

  SendSdp(sdpObject) {
    assertNotReached("Interface not IMPLEMENTED");
  }

  CreateSimplePeer(peerId) {
    const simplePeerConfig = {
      initiator: this.config.isClient,
      trickle: this.config.useTrickle,
      config: {
        iceServers: ICE_SERVERS,
      },
    };
    // Node.js env, use wrtc
    if (wrtc && Object.keys(wrtc).length !== 0) {
      simplePeerConfig["wrtc"] = wrtc;
    }
    let peer;
    if (this.config.useMultiplex) {
      peer = new MultiplexedProxyPeer(peerId, simplePeerConfig);
    } else {
      peer = new ProxyPeer(peerId, simplePeerConfig);
    }
    peer._signaling = this;
    return peer;
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

  setupOnReceiveSdps(fn) {
    this.registry.registerCallback(this.uid, fn);
  }
}

export { SignalingConfig, SdpObject, BasicSignaling, MockSignaling };
