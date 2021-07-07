"use strict";

import { v4 as uuid } from "uuid";

// import leancloud from "./leancloud.js";
import { assert } from "./assert.js";
import { str2ab } from "./protocol.js";
import { CreateSimplePeer } from "./webrtc.js";
import AblySignaling from "./signaling/signaling.ably.js";
import LeancloudSignaling from "./signaling/signaling.leancloud.js";

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
      assert(
        sdps.length === 1,
        "Client receives more than one sdp from server"
      );
      peer.signal(sdps[0].object);
    },
    (err) => {
      console.error(err);
      peer.destroy();
    }
  );

  peer.once("signal", (data) => {
    console.log("SIGNAL", JSON.stringify(data));
    signaling.SendSdp(data);
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
