import { jest } from "@jest/globals";

import { DialWebrtcConnForTesting } from "../src/client.js";
import { MockSignaling, SignalingConfig } from "../src/signaling/signaling.js";
import { relativeTimeThreshold } from "moment";
import { assert } from "../src/assert.js";

import net from "net";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { Server, TestingServer } from "../src/server.js";
import { SingleEntryPlugin } from "webpack";
import { sign } from "crypto";
import { v4 as uuidv4 } from "uuid";

import {
  Registry,
  createTestingSignaling,
  createTestingPeer,
  CreateTestPairs,
  spawnLocalTcpServer,
} from "./helper";

// For jest testing core dump?
// process.on("beforeExit", (code) => process.exit(code));

test("simple peers", (done) => {
  const registry = new Registry();
  const [client, server] = CreateTestPairs(registry);

  const payload = new Uint8Array([1, 2, 3]);
  client.on("connect", () => {
    client.send(payload);
  });
  server.on("connect", () => {});
  server.on("data", (data) => {
    data = new Uint8Array(data);
    expect(data).toEqual(payload);
    client.destroy();
    server.destroy();
    done();
  });

  setTimeout(() => {
    console.log(registry);
  }, 1000);
});

test("simple client with testing server", (done) => {
  const registry = new Registry();
  const [client, server] = CreateTestPairs(registry);
  const webrtcServer = new TestingServer(server, server);

  const payload = new Uint8Array([1, 2, 3]);

  const tcpServer = spawnLocalTcpServer(payload, (addr) => {
    const clientConn = client.DialWebrtcConn(addr);

    clientConn.on("data", (data) => {
      data = new Uint8Array(data);
      expect(data).toEqual(payload);

      tcpServer.close();
      done();
    });
  });
});

test("server accept single webrtc peer", (done) => {
  const registry = new Registry();

  const clientUid = 2;
  const serverUid = 3;

  const config = new SignalingConfig()
    .set("useMultiplex", false)
    .set("serverPeerForTesting", false);

  const clientPeer = createTestingPeer(
    null,
    clientUid,
    serverUid,
    registry,
    config.clone().set("isClient", true)
  );

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    config.clone().set("isClient", false)
  );
  const server = new Server(serverSignaling);

  const payload = new Uint8Array([1, 2, 3]);
  const tcpServer = spawnLocalTcpServer(payload, (addr) => {
    const clientConn = clientPeer.DialWebrtcConn(addr);
    clientConn.on("data", (data) => {
      data = new Uint8Array(data);
      expect(data).toEqual(payload);
      tcpServer.close();
      done();
    });
  });

  setTimeout(() => {
    console.log(registry);
  }, 1000);
});

test("peers with multiplexing, single duplex", (done) => {
  const registry = new Registry();
  const config = new SignalingConfig().set("useMultiplex", true);

  const [clientPeer, serverPeer] = CreateTestPairs(registry, config);

  const payload = new Uint8Array([1, 2, 3]);

  const tcpServer = spawnLocalTcpServer(payload, (addr) => {
    serverPeer.onNewWebrtcConn((duplex) => {
      const webrtcServer = new TestingServer(serverPeer, duplex);
    });

    const clientConn = clientPeer.DialWebrtcConn(addr);
    clientConn.on("data", (data) => {
      data = new Uint8Array(data);
      expect(data).toEqual(payload);

      tcpServer.close();
      done();
    });
  });
});

test("server accept multiple webrtc peers", (done) => {
  const registry = new Registry();

  const config = new SignalingConfig().set("serverPeerForTesting", false);

  const N = 10;
  const clientUid = 2;
  const serverUid = 100;
  const clientPeers = [];

  for (let i = 0; i < N; i++) {
    clientPeers[i] = createTestingPeer(
      null,
      clientUid + i,
      serverUid,
      registry,
      config.clone().set("isClient", true)
    );
  }

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    config.clone().set("isClient", false)
  );
  const server = new Server(serverSignaling);

  const payload = new Uint8Array([1, 2, 3]);
  let finished = 0;
  const tcpServer = spawnLocalTcpServer(payload, (addr) => {
    for (let i = 0; i < N; i++) {
      const clientPeer = clientPeers[i];
      const clientConn = clientPeer.DialWebrtcConn(addr);
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

  setTimeout(() => {
    console.log(registry);
  }, 1000);
});

test("server accept single peers, using multiplex", (done) => {
  const registry = new Registry();

  const config = new SignalingConfig()
    .set("serverPeerForTesting", false)
    .set("useMultiplex", true);

  const clientUid = 2;
  const serverUid = 100;

  const clientPeer = createTestingPeer(
    null,
    clientUid,
    serverUid,
    registry,
    config.clone().set("isClient", true)
  );

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    config.clone().set("isClient", false)
  );
  const server = new Server(serverSignaling);

  const N = 10;
  let finished = 0;
  let clientConns = [];
  const payload = new Uint8Array([1, 2, 3]);
  const tcpServer = spawnLocalTcpServer(payload, (addr) => {
    for (let i = 0; i < N; i++) {
      clientConns[i] = clientPeer.DialWebrtcConn(addr);
      clientConns[i].on("data", (data) => {
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

  setTimeout(() => {
    console.log(registry);
  }, 1000);
});
