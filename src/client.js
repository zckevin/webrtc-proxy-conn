"use strict";
import { assert } from "./assert.js";
import { MultiplexedPeer } from "./webrtc.js";

// LeanCloud signaling is disabled by default
// import LeancloudSignaling from "./signaling/signaling.leancloud.js";

let global_peer;

// @addr host:port
// @signaling
function DialWebrtcConn(addr, signaling, forceNewPeer = false) {
  assert(addr.length > 0, "invalid addr for Dial()");

  const createPeer = () => {
    return new MultiplexedPeer(true, signaling);
  };

  let peer = forceNewPeer ? createPeer() : global_peer;
  if (!peer) {
    peer = createPeer();
    global_peer = peer;
  }
  return peer.CreateWebrtcConn(addr);
}

function DialWebrtcConnForTesting(addr, signaling) {
  return DialWebrtcConn(addr, signaling, true);
}

class ProxyClient {
  constructor(uid) {
    this.uid = uid;
  }
}

export { DialWebrtcConn, DialWebrtcConnForTesting, ProxyClient };
