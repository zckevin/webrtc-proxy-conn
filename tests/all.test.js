import { jest } from "@jest/globals";

import { DialWebrtcConn } from "../src/client.js";

import { DEFAULT_SERVER_PEER_ID, Server } from "../src/server.js";
import { SignalingConfig } from "../src/signaling/signaling.js";
import AblySignaling from "../src/signaling/signaling.ably.js";

import { spawnLocalTcpServer2 } from "./helper.js";

function spawnWebrtcServer() {
  const config = new SignalingConfig()
    .set("isClient", false)
    .set("useMultiplex", true)
    .set("serverPeerForTesting", false);
  const signaling = new AblySignaling(DEFAULT_SERVER_PEER_ID, config);
  const server = new Server(signaling);
  return server;
}

test("intergration", (done) => {
  const tcpServer = spawnLocalTcpServer2((addr) => {
    const webrtcServer = spawnWebrtcServer();

    const N = 1;
    let n = 0;
    for (let i = 0; i < N; i++) {
      const clientConn = DialWebrtcConn(addr);
      const payload = new Uint8Array([i, i + 1, i + 2]);
      clientConn.write(payload);

      clientConn.on("data", (data) => {
        data = new Uint8Array(data);
        expect(data).toEqual(payload);
        n++;
        if (n >= N) {
          tcpServer.close();
          done();
        }
      });
    }
  });
});
