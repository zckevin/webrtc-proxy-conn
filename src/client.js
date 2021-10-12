"use strict";
import { assert } from "./assert.js";
import AblySignaling from "./signaling/signaling.ably.js";
import { v4 as uuidv4 } from "uuid";
import { SignalingConfig } from "./signaling/signaling.js";
import { DEFAULT_SERVER_PEER_ID } from "./server.js";

// LeanCloud signaling is disabled by default
// import LeancloudSignaling from "./signaling/signaling.leancloud.js";

let inited = false;
const g_uid = uuidv4();
let g_signaling;
let g_clientPeer;

function init() {
  if (inited) {
    return;
  }
  inited = true;

  const config = new SignalingConfig()
    .set("isClient", true)
    .set("serverPeerForTesting", false)
    .set("useMultiplex", true);
  g_signaling = new AblySignaling(g_uid, config);

  function createPeer() {
    const peerId = uuidv4();
    g_clientPeer = g_signaling.CreatePeer(peerId, DEFAULT_SERVER_PEER_ID);
    g_clientPeer.on("error", createPeer);
  }
  createPeer();
}

// @addr host:port
// @signaling
function DialWebrtcConn(addr) {
  assert(addr.length > 0, "invalid addr for Dial()");
  init();
  return g_clientPeer.DialWebrtcConn(addr);
}

function DialWebrtcConnForTesting(addr, signaling) {
  return DialWebrtcConn(addr, signaling, true);
}

export { DialWebrtcConn, DialWebrtcConnForTesting };
