"use strict";

import SimplePeer from "simple-peer";
import { v4 as uuid } from 'uuid';

import Leancloud from "./leancloud.js";
import { assert } from "./assert.js";
import { str2ab } from "./protocol.js";

const CHECK_INTERVAL_SECONDS = 1;
const ICE_SERVERS = [
  {
    credential: "bshu1211",
    urls: "turn:stun.ppzhilian.com",
    username: "bshu",
  },
  // { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
];

async function queryAnswers(peer, myId, peerId) {
  let offers = await Leancloud.QuerySdp(peerId, myId, true);
  let seen = new Set();
  offers.map((offer) => {
    const fromId = offer.fromId;
    if (seen.has(fromId)) {
      return;
    }
    seen.add(fromId);

    const sdp = offer.sdp;
    console.log("get signal reply", sdp);
    peer.signal(sdp);
  });
}

// @addr host:port
// @myId string id
// @peerId string id
function DialWebrtcConn(peerId, addr) {
  assert(
    addr.length > 0 && peerId.length > 0,
    "invalid input for Dial()"
  );
  let myId = uuid();
  let headerAb = str2ab(addr);

  let peer = new SimplePeer({
    initiator: true,
    trickle: false,
    config: {
      iceServers: ICE_SERVERS,
    },
  });
  let interval = setInterval(
    queryAnswers.bind(null, peer, myId, peerId),
    CHECK_INTERVAL_SECONDS * 1000
  );

  peer.on("signal", async (data) => {
    console.log("SIGNAL", JSON.stringify(data));
    await Leancloud.SendSdp(data, myId, peerId);
  });

  peer.on("connect", () => {
    console.log("webrtc connnected");
    clearInterval(interval);
    peer.send(headerAb);
  });

  peer.on("close", () => {
    console.log("webrtc close")
  })

  return peer;
}

export { DialWebrtcConn };
