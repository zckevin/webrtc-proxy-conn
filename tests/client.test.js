import { jest } from "@jest/globals";

import { DialWebrtcConnForTesting } from "../src/client.js";
import { MockSignaling } from "../src/signaling/signaling.js";
import { relativeTimeThreshold } from "moment";
import { assert } from "../src/assert.js";

import net from "net";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { Server, TestingServer } from "../src/server.js";
import { SingleEntryPlugin } from "webpack";
import { sign } from "crypto";
import { v4 as uuidv4 } from "uuid";

// process.on("beforeExit", (code) => process.exit(code));

class Registry {
  constructor() {
    // uid -> BasicSignaling
    this.signalings = {};

    this.pendingSdps = {};
    this.callbacks = {};
  }

  addSignaling(uid, signaling) {
    assert(!this.signalings[uid]);
    this.signalings[uid] = signaling;

    const sdps = this.pendingSdps[uid];
    if (sdps && sdps.length > 0) {
      sdps.map((sdp) => {
        this.sendSdp(sdp.dstUid, sdp);
      });
      this.pendingSdps[uid] = [];
    }
  }

  registerCallback(uid, fn) {
    assert(!this.callbacks[uid]);
    this.callbacks[uid] = fn;
  }

  sendSdp(dstUid, sdpObject) {
    const fn = this.callbacks[dstUid];
    assert(fn, `callback for uid: ${dstUid} is not set`);
    fn([sdpObject]);
  }

  signal(dstUid, sdpObject) {
    assert(dstUid);
    const dstSignaling = this.signalings[dstUid];
    if (dstSignaling) {
      this.sendSdp(dstUid, sdpObject);
    } else {
      if (this.pendingSdps[dstUid]) {
        this.pendingSdps[dstUid].push(sdpObject);
      } else {
        this.pendingSdps[dstUid] = [sdpObject];
      }
    }
  }
}

function createTestingSignaling(uid, dstUid, registry, isClient, config = {}) {
  const usedConfig = {
    isClient,
    serverPeerForTesting: true,
    useMultiplex: config.useMultiplex || false,
  };
  if (!isClient && config.serverPeerForTesting === false) {
    usedConfig.serverPeerForTesting = false;
  }

  const signaling = new MockSignaling(uid, usedConfig, registry);
  registry.addSignaling(uid, signaling);
  return signaling;
}

function createTestingPeer(
  peerId,
  uid,
  dstUid,
  registry,
  isClient,
  config = {}
) {
  const signaling = createTestingSignaling(
    uid,
    dstUid,
    registry,
    isClient,
    config
  );
  peerId = peerId || uuidv4();
  const peer = signaling.CreatePeer(peerId, dstUid);
  return peer;
}

function CreateTestPairs(registry, config) {
  const srcUid = 2;
  const dstUid = 3;
  const peerId = uuidv4();
  const client = createTestingPeer(
    peerId,
    srcUid,
    dstUid,
    registry,
    true,
    config
  );
  const server = createTestingPeer(
    peerId,
    dstUid,
    srcUid,
    registry,
    false,
    config
  );
  return [client, server];
}

function spawnLocalTcpServer(payload, cb) {
  if (typeof payload === "function") {
    payload = payload();
  }
  const tcpServer = net.createServer((sock) => {
    sock.end(payload);
  });

  tcpServer.listen(0, "localhost", () => {
    const addr = `localhost:${tcpServer.address().port}`;
    console.log("TCP Server is running at", addr);
    cb(addr);
  });

  return tcpServer;
}

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

  const clientPeer = createTestingPeer(
    null,
    clientUid,
    serverUid,
    registry,
    true,
    {
      useMultiplex: false,
    }
  );

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    false,
    { useMultiplex: false, serverPeerForTesting: false }
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
  const [clientPeer, serverPeer] = CreateTestPairs(registry, {
    useMultiplex: true,
  });

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
      true,
      {
        useMultiplex: false,
      }
    );
  }

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    false,
    { useMultiplex: false, serverPeerForTesting: false }
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

  const clientUid = 2;
  const serverUid = 100;

  const useMultiplex = true;

  const clientPeer = createTestingPeer(
    null,
    clientUid,
    serverUid,
    registry,
    true,
    {
      useMultiplex,
    }
  );

  const serverSignaling = createTestingSignaling(
    serverUid,
    null,
    registry,
    false,
    { useMultiplex, serverPeerForTesting: false }
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
