import { MockSignaling, SignalingConfig } from "../src/signaling/signaling.js";
import { assert } from "../src/assert.js";
import net from "net";
import { v4 as uuidv4 } from "uuid";

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

function createTestingSignaling(
  uid,
  dstUid,
  registry,
  config,
  SignalingConstructor = MockSignaling
) {
  const signaling = new SignalingConstructor(uid, config, registry);
  if (registry && SignalingConstructor === MockSignaling) {
    registry.addSignaling(uid, signaling);
  }
  return signaling;
}

function createTestingPeer(
  peerId,
  uid,
  dstUid,
  registry,
  config,
  SignalingConstructor = MockSignaling
) {
  const signaling = createTestingSignaling(
    uid,
    dstUid,
    registry,
    config,
    SignalingConstructor
  );
  peerId = peerId || uuidv4();
  const peer = signaling.CreatePeer(peerId, dstUid);
  return peer;
}

function CreateTestPairs(registry, config, SignalingConstructor) {
  const srcUid = 2;
  const dstUid = 3;
  const peerId = uuidv4();
  const client = createTestingPeer(
    peerId,
    srcUid,
    dstUid,
    registry,
    config.clone().set("isClient", true),
    SignalingConstructor
  );
  const server = createTestingPeer(
    peerId,
    dstUid,
    srcUid,
    registry,
    config.clone().set("isClient", false),
    SignalingConstructor
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

export {
  Registry,
  createTestingSignaling,
  createTestingPeer,
  CreateTestPairs,
  spawnLocalTcpServer,
};
