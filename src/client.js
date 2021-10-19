"use strict";
import { assert } from "./assert.js";
import { v4 as uuidv4 } from "uuid";
import { PeerJsClient, DEFAULT_SERVER_UID } from "./peerjs.js";

let g_clientPeer = createPeerClient(uuidv4());

function createPeerClient(peerId) {
  const client = new PeerJsClient(peerId, DEFAULT_SERVER_UID);
  client.peerjs.once("error", (err) => {
    console.error(err);
    client.peerjs.close();
    client.peerjs = null;
    client.__met_error = true;
  });
  return client;
}

async function DialWebrtcConn(addr, recreateClientPeer = false) {
  if (recreateClientPeer || g_clientPeer.__met_error) {
    g_clientPeer = null;
    g_clientPeer = createPeerClient(uuidv4());
  }
  let conn;
  try {
    conn = await g_clientPeer.DialWebrtcConn(addr);
  } catch (err) {
    console.error(err);
    g_clientPeer.__met_error = true;
  }
  return conn;
}

export { DialWebrtcConn };
