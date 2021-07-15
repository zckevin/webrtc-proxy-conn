"use strict";

import * as Ably from "ably";
import { assert, assertNotReached } from "../assert.js";
import BasicSignaling from "./signaling.js";
import "../dotenv.node.js"; // empty in browser, using webpack plugin dotenv-webpack

const ABLY_CHANNEL_NAME = "sdps";
const DEFAULT_SERVER_PEER_ID = "foobar89";

let CACHED_ABLY_CLIENT = null;

class AblySignaling extends BasicSignaling {
  constructor(
    myId,
    peerId = DEFAULT_SERVER_PEER_ID,
    isClient = true,
    debug_log = false,
    use_cached_client = true
  ) {
    super();
    this.myId = myId;
    this.peerId = peerId;

    if (isClient !== true && isClient !== false) {
      assertNotReached("invalid isClient arg");
    }
    this.isClient = isClient;

    if (use_cached_client && CACHED_ABLY_CLIENT) {
      this.client = CACHED_ABLY_CLIENT;
    } else {
      assert(process.env.ABLY_APP_KEY, "process.env.ABLY_APP_KEY not set");
      this.client = new Ably.default.Realtime({
        key: process.env.ABLY_APP_KEY,
        clientId: isClient ? "dummyClient" : "proxyServer",
        log: { level: debug_log ? 4 : 1 },
      });
      if (use_cached_client) CACHED_ABLY_CLIENT = this.client;
    }
    this.channel = this.client.channels.get(ABLY_CHANNEL_NAME);
    this.channel.attach();
  }

  getSendMsgName(peerId) {
    return `sdps:${this.isClient ? "offer" : "answer"}:${peerId}`;
  }

  SendSdp(data, peerId) {
    peerId = peerId || this.peerId;
    assert(peerId, "SendSdp no peerId supplied.");
    const wrapper = {
      object: data,
      fromId: this.myId,
      toId: peerId,
    };
    return new Promise((resolve, reject) => {
      this.channel.publish(this.getSendMsgName(peerId), wrapper, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  WaitForSdps(resolve, reject, only_once = true) {
    this.channel.subscribe((msg) => {
      // resolve array instead of object because Leancloud signaling does this.
      if (this.isClient) {
        if (msg.name === `sdps:answer:${this.myId}`) {
          console.log("Ably client recv: ", msg);
          resolve([msg.data]);
        }
      } else {
        if (msg.name.startsWith("sdps:offer:")) {
          console.log("Ably Server recv: ", msg);
          resolve([msg.data]);
        }
      }
      if (only_once) {
        this.channel.unsubscribe(ABLY_CHANNEL_NAME);
      }
    });
  }

  WaitForSdpsForever(resolve) {
    this.WaitForSdps(resolve, null, false);
  }

  Close() {
    this.client.close();
  }
}

export default AblySignaling;
