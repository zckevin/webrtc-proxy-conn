"use strict";
import { assert } from "./assert.js";
import { v4 as uuidv4 } from "uuid";
import { PeerJsClient, DEFAULT_SERVER_UID } from "./peerjs.js";

let inited = false;
let g_clientPeer;

function init() {
  if (inited) {
    return;
  }
  inited = true;

  const peerId = uuidv4();
  g_clientPeer = new PeerJsClient(peerId, DEFAULT_SERVER_UID);
}

function DialWebrtcConn(addr) {
  assert(addr.length > 0, "invalid addr for Dial()");
  init();
  return g_clientPeer.DialWebrtcConn(addr);
}

export { DialWebrtcConn };
