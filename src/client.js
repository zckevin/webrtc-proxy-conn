"use strict";

import { v4 as uuid } from "uuid";

// import leancloud from "./leancloud.js";
import { assert } from "./assert.js";
import { str2ab } from "./protocol.js";
import { CreateSimplePeer } from "./webrtc.js";
import AblySignaling from "./signaling/signaling.ably.js";

// LeanCloud signaling is disabled by default
// import LeancloudSignaling from "./signaling/signaling.leancloud.js";

// @addr host:port
// @signaling
function DialWebrtcConn(addr, signaling) {
  assert(addr.length > 0, "invalid addr for Dial()");

  // every conn has its unique random id
  const myId = uuid();
  signaling = signaling || new AblySignaling(myId);
  const headerAb = str2ab(addr);

  let peer = CreateSimplePeer(true, signaling);

  signaling.WaitForSdps(
    (sdps) => {
      sdps.map((sdp) => {
        peer.signal(sdp.sdp);
      });
    },
    (err) => {
      console.error(err);
      peer.destroy();
    }
  );

  peer.once("signal", (sdp) => {
    console.log("SIGNAL", JSON.stringify(sdp));
    signaling.SendSdp(sdp);
  });

  peer.once("connect", () => {
    console.log("webrtc connnected, dial tcp conn:", addr);
    peer.send(headerAb);
  });

  peer.on("close", () => {
    console.log("webrtc close");
  });

  return peer;
}

export { DialWebrtcConn };
