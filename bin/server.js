import { DEFAULT_SERVER_PEER_ID, Server } from "../src/server.js";
import { SignalingConfig } from "../src/signaling/signaling.js";
import AblySignaling from "../src/signaling/signaling.ably.js";

function run() {
  const config = new SignalingConfig()
    .set("isClient", false)
    .set("useMultiplex", true)
    .set("serverPeerForTesting", false);
  const signaling = new AblySignaling(DEFAULT_SERVER_PEER_ID, config);
  const server = new Server(signaling);
}
run();
