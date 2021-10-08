import { jest } from "@jest/globals";

import { CreateSimplePeer } from "../src/webrtc.js";
import { createPeer } from "../src/server.js";
import { str2ab } from "../src/protocol.js";
import BasicSignaling from "../src/signaling/signaling.js";
import net from "net";

jest.setTimeout(10 * 1000);

test("dummy server without leancloud signaling", (done) => {
  function run(targetAddr) {
    const signaling = new BasicSignaling();
    const client = CreateSimplePeer(true, signaling);
    let server;

    const mockSignaling = {
      SendSdp: (sdp) => {
        client.signal(sdp);
      },
      ICE_SERVERS: [
        {
          credential: "bshu1211",
          urls: "turn:stun.ppzhilian.com",
          username: "bshu",
        },
        // { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
      ],
    };

    client.on("signal", (sdp) => {
      server = createPeer("peer_id_does_not_matter", sdp, mockSignaling);
    });

    client.on("connect", () => {
      const headerAb = str2ab(targetAddr);
      client.send(headerAb);
    });

    let checked = false;
    client.on("data", (view) => {
      let d = new TextDecoder();
      expect(d.decode(view)).toEqual(targetAddr);
      checked = true;
    });

    client.on("close", () => {
      expect(checked).toBeTruthy();
      client.destroy();
      server.destroy();
      done();
    });
  }

  let addr = "";
  const tcpServer = net.createServer((sock) => {
    sock.end(addr);
  });
  tcpServer.listen(0, "localhost", () => {
    addr = `localhost:${tcpServer.address().port}`;
    console.log("TCP Server is running", addr);
    run(addr);
  });
});
