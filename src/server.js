"use strict";

import net from "net";
import pump from "pump";

import { assert, assertNotReached } from "./assert.js";
import { ab2str } from "./protocol.js";
import { CreateSimplePeer } from "./webrtc.js";
import leancloud from "./signaling/leancloud.js";
import LeancloudSignaling from "./signaling/signaling.leancloud.js";
import AblySignaling from "./signaling/signaling.ably.js";

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

async function RunLoopLeancloud() {
  const { appIds, appKeys, endpoints } = leancloud.GetEnv();
  for (let index = 0; index < appIds.length; index++) {
    const config = {
      APP_ID: appIds[index],
      APP_KEY: appKeys[index],
      API_ENDPOINT: endpoints[index],
    };
    // querySdp(config);
    const signaling = new LeancloudSignaling(
      DEFAULT_SERVER_PEER_ID,
      null,
      config
    );
    signaling.probe_interval_seconds = 3;
    signaling.WaitForSdpsForever((sdps) => {
      sdps.map((sdp) => {
        createPeer(sdp.fromId, sdp.sdp, signaling);
      });
    });
  }
}

function RunLoopAbly() {
  const signaling = new AblySignaling(
    DEFAULT_SERVER_PEER_ID,
    null, // peerId
    false // isClient
  );
  signaling.WaitForSdpsForever((sdps) => {
    // in case any fatal errors...
    try {
      sdps.map((sdp) => {
        createPeer(sdp.fromId, sdp.object, signaling);
      });
    } catch (err) {
      console.error(err);
    }
  });
}

export { createPeer, RunLoopAbly, RunLoopLeancloud };
