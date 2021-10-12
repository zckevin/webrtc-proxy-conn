// run with on Node.js 15+
// export NODE_OPTIONS=--unhandled-rejections=warn

import { jest } from "@jest/globals";

import AblySignaling from "../src/signaling/signaling.ably.js";
import { SignalingConfig } from "../src/signaling/signaling";
import {
  Registry,
  createTestingSignaling,
  createTestingPeer,
  CreateTestPairs,
  spawnLocalTcpServer,
} from "./helper";

jest.setTimeout(5 * 1000);

test("ably signaling single", (done) => {
  const config = new SignalingConfig()
    .set("serverPeerForTesting", true)
    .set("useMultiplex", false);

  const clientUid = 2;
  const serverUid = 100;

  // **************************************************************
  // WARN: timing issue
  //       start server first in case it miss client's ICE signals!
  // **************************************************************
  const serverPeer = createTestingPeer(
    "testingPeer",
    serverUid,
    clientUid,
    null,
    config.clone().set("isClient", false),
    AblySignaling
  );
  setTimeout(() => {
    const clientPeer = createTestingPeer(
      "testingPeer",
      clientUid,
      serverUid,
      null,
      config.clone().set("isClient", true),
      AblySignaling
    );

    let clientDone = false;
    let serverDone = false;
    clientPeer._signaling.appendOnReceiveSdpsCallbacks((sdpObjects) => {
      clientDone = true;
      if (serverDone === true) {
        done();
      }
    });

    serverPeer._signaling.appendOnReceiveSdpsCallbacks((sdpObjects) => {
      serverDone = true;
      if (clientDone === true) {
        done();
      }
    });
  }, 1000);
});
