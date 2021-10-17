import { PeerJsServer, DEFAULT_SERVER_UID } from "../src/peerjs.js";

function run() {
  new PeerJsServer(DEFAULT_SERVER_UID);
}

run();
