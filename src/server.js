"use strict";

import SimplePeer from "simple-peer";
import wrtc from "wrtc";
import net from "net";
import pump from "pump";
import { Transform } from "stream";

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

import Leancloud from "./leancloud.js";
import { assert, assertNotReached } from "./assert.js";
import { ab2str } from "./protocol.js";

const myId = "foobar89";

const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/; // ipv4/ipv6/hostname + port

function addrToIPPort(addr) {
  const m = ADDR_RE.exec(addr);
  if (!m) throw new Error(`invalid addr: ${addr}`);
  return [m[1], Number(m[2])];
}

function dialNetConn(addrStr, cb) {
  let [host, port] = addrToIPPort(addrStr);
  console.log("create conn to:", host, port);
  let conn = net.connect(port, host, cb);
  return conn;
}

async function createPeer(peerId, sdp) {
  const p = new SimplePeer({
    initiator: false,
    trickle: false,
    config: {
      iceServers: [
        {
          credential: "bshu1211",
          urls: "turn:stun.ppzhilian.com",
          username: "bshu",
        },
        // { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
      ],
    },
    wrtc,
  });

  p.on("error", (err) => console.log("error", err));

  p.on("signal", async (data) => {
    console.log("SIGNAL", JSON.stringify(data));
    await Leancloud.SendSdp(data, myId, peerId);
  });

  p.on("connect", () => {
    console.log("connected");
  });

  let waitOnHeader = (data) => {
    let ab;
    if (data instanceof Uint8Array) {
      ab = data.buffer;
    } else if (data instanceof ArrayBuffer) {
      ab = data;
    } else {
      assertNotReached("peer on recv data unexpected type");
    }

    let [addrStr, leftAb] = ab2str(ab);
    if (!addrStr) {
      console.log("fragmentatin", ab);
      assertNotReached("peer on recv data header fragmentation");
    }
    p.removeListener("data", waitOnHeader);

    let conn = dialNetConn(addrStr, () => {
      if (leftAb.byteLength > 0) {
        console.log("leftAb", leftAb);
        conn.write(new Uint8Array(leftAb));
      }
    });
    pump(p, conn, (err) => {
      console.error("pump err write", err);
    });
    pump(conn, p, (err) => {
      console.error("pump err read", err);
    });

    conn.once("error", (err) => {
      console.error("conn error: ", err);
    });

    conn.on("close", () => {
      console.log("conn close");
      p.destroy();
    });
  };
  p.on("data", waitOnHeader);
  p.signal(sdp);
}

async function queryOffers() {
  console.log(new Date());
  let offers = await Leancloud.QuerySdp(null, myId, true);
  let seen = new Set();
  offers.map((offer) => {
    const fromId = offer.fromId;
    if (seen.has(fromId)) {
      return;
    }
    seen.add(fromId);

    const sdp = offer.sdp;
    createPeer(fromId, sdp);
  });
}

setInterval(queryOffers, 3000);
