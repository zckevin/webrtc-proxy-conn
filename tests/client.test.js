import { jest } from "@jest/globals";

import { DialWebrtcConnForTesting } from "../src/client.js";
import { MockSignaling } from "../src/signaling/signaling.js";
import { BPMux } from "bpmux";
import { relativeTimeThreshold } from "moment";
import { assert } from "../src/assert.js";

import net from "net";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { Server, TestingServer } from "../src/server.js";
import { SingleEntryPlugin } from "webpack";
import { sign } from "crypto";

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

function createTestingPeer(uid, dstUid, registry, isClient, config = {}) {
  const signaling = createTestingSignaling(
    uid,
    dstUid,
    registry,
    isClient,
    config
  );
  const peer = signaling.CreatePeer("peer_id_for_testing", dstUid);
  return peer;
}

function CreateTestPairs(registry, config) {
  const srcUid = 2;
  const dstUid = 3;
  const client = createTestingPeer(srcUid, dstUid, registry, true, config);
  const server = createTestingPeer(dstUid, srcUid, registry, false, config);
  return [client, server];
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

function spawnLocalTcpServer(payload, cb) {
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

test("server accept webrtc peers", (done) => {
  const registry = new Registry();

  const clientUid = 2;
  const serverUid = 3;

  const clientPeer = createTestingPeer(clientUid, serverUid, registry, true, {
    useMultiplex: false,
  });

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

      console.log(444, data)
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
