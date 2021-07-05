"use strict";

import net from "net";
import pump from "pump";

import leancloud from "../src/leancloud.js";
import { assert, assertNotReached } from "../src/assert.js";
import { ab2str } from "../src/protocol.js";
import { CreateSimplePeer } from "./webrtc.js";
import SignalingService from "../src/signaling.js";

const ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/; // ipv4/ipv6/hostname + port
const DEFAULT_SERVER_PEER_ID = "foobar89";

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

function createPeer(peerId, sdp, signaling) {
  const p = CreateSimplePeer(false, signaling);

  p.on("error", (err) => console.error("Simple peer on error", err));

  p.on("signal", async (data) => {
    console.log("SIGNAL", JSON.stringify(data));
    signaling.SendSdp(data, peerId);
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
      console.log(ab);
      assertNotReached("peer on recv data header fragmentation");
    }

    // header is recved, then pump to conn
    p.removeListener("data", waitOnHeader);

    let conn = dialNetConn(addrStr, () => {
      if (leftAb.byteLength > 0) {
        console.log("leftAb", leftAb);
        conn.write(new Uint8Array(leftAb));
      }
    });

    // bi-directional pipe
    pump(p, conn, (err) => {
      console.error("pump err write", err);
    });
    pump(conn, p, (err) => {
      console.error("pump err read", err);
    });

    conn.once("error", (err) => {
      console.error("tcp conn error: ", err);
    });

    conn.on("close", () => {
      console.log("conn close");
      p.destroy();
    });
  };
  p.on("data", waitOnHeader);
  p.signal(sdp);

  return p;
}

/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let g_should_stop_now = false;
function set_should_stop_now() {
  g_should_stop_now = true;
}

async function querySdp(config, left_recursive_rounds = Infinity, left_active_rounds = 0) {
  let interval_seconds = 5;
  if (left_active_rounds > 0) {
    interval_seconds = 1;
  }
  if (g_should_stop_now || left_recursive_rounds === 0) {
    return;
  }
  // using try...catch to avoid server crash
  try {
    let offers = await leancloud.GetObjects(null, myId, true, config);
    if (offers.length > 0) {
      left_active_rounds = 10;
    }
    let seen = new Set();
    offers.map((offer) => {
      const fromId = offer.fromId;
      if (seen.has(fromId)) {
        return;
      }
      seen.add(fromId);

      const sdp = offer.sdp;
      createPeer(fromId, sdp, config);
    });
  } catch (err) {
    console.error(err);
  }

  setTimeout(() => {
    queryOffer(config, left_recursive_rounds - 1, left_active_rounds - 1);
  }, ((interval_seconds * getRandomIntInclusive(7, 11)) / 10) * 1000);

  return set_should_stop_now;
}
*/

async function RunLoop() {
  const { appIds, appKeys, endpoints } = leancloud.GetEnv();
  for (let index = 0; index < appIds.length; index++) {
    const config = {
      APP_ID: appIds[index],
      APP_KEY: appKeys[index],
      API_ENDPOINT: endpoints[index],
    };
    // querySdp(config);
    const signaling = new SignalingService(
      DEFAULT_SERVER_PEER_ID,
      null,
      config
    );
    signaling.probe_interval_seconds = 3;
    signaling.WaitForSdpsForever((sdps) => {
      sdps.map((sdp) => {
        createPeer(sdp.fromId, sdp.object, signaling);
      });
    });
  }
}

export { createPeer, RunLoop };
