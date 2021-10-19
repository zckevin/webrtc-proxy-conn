import { jest } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";
import { PeerJsClient, PeerJsServer } from "../src/peerjs.js";
import { spawnLocalTcpServer } from "./helper.js";

const testingConfig = {
  websocket: {
    secure: false,
    host: "localhost",
    port: 9000,
  },
};

test("simple peer pair", (done) => {
  const config = {
    useMultiplex: false,
    ...testingConfig
  };
  const clientId = uuidv4();
  const serverId = uuidv4();
  const client = new PeerJsClient(clientId, serverId, config);
  const server = new PeerJsServer(serverId, config);

  const payload = new Uint8Array([1, 2, 3]);

  const tcpServer = spawnLocalTcpServer(payload, async (addr) => {
    const clientConn = await client.DialWebrtcConn(addr);

    clientConn.on("data", (data) => {
      data = new Uint8Array(data);
      expect(data).toEqual(payload);

      tcpServer.close();
      done();
    });
  });
});

test("server accept multiple webrtc peers", (done) => {
  const N = 10;

  const config = {
    useMultiplex: false,
    ...testingConfig
  };
  const serverId = uuidv4();
  const server = new PeerJsServer(serverId, config);

  const payload = new Uint8Array([1, 2, 3]);
  let finished = 0;

  const tcpServer = spawnLocalTcpServer(payload, async (addr) => {
    for (let i = 0; i < N; i++) {
      const clientId = uuidv4();
      const client = new PeerJsClient(clientId, serverId, config);
      const clientConn = await client.DialWebrtcConn(addr);

      clientConn.on("data", (data) => {
        data = new Uint8Array(data);
        expect(data).toEqual(payload);
        finished++;
        if (finished >= N) {
          tcpServer.close();
          done();
        }
      });
    }
  });
});

test("server accept multiple webrtc conns and single peer, using multiplex", (done) => {
  const N = 10;

  const clientId = uuidv4();
  const serverId = uuidv4();
  const client = new PeerJsClient(clientId, serverId, testingConfig);
  const server = new PeerJsServer(serverId, testingConfig);

  const payload = new Uint8Array([1, 2, 3]);
  let finished = 0;

  const tcpServer = spawnLocalTcpServer(payload, async (addr) => {
    for (let i = 0; i < N; i++) {
      const clientConn = await client.DialWebrtcConn(addr);
      clientConn.on("data", (data) => {
        data = new Uint8Array(data);
        expect(data).toEqual(payload);

        finished++;
        if (finished >= N) {
          tcpServer.close();
          done();
        }
      });
    }
  });
});
