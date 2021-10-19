import { PeerJsServer, DEFAULT_SERVER_UID } from "../src/peerjs.js";

function run() {
  let server = new PeerJsServer(DEFAULT_SERVER_UID);
  server.peerjs.once("error", (err) => {
    console.error(err);
    server.peerjs.close();
    server.peerjs = null;
    server = null;
    console.log("Recreate a new server in 2000ms...")
    setTimeout(run, 2000);
  });
}

run();
