"use strict";

import * as Ably from "ably";
import { assert, assertNotReached } from "../assert.js";
import BasicSignaling from "./signaling.js";
import "../dotenv.node.js"; // empty in browser, using webpack plugin dotenv-webpack

const ABLY_CHANNEL_NAME = "sdps";
const DEFAULT_SERVER_PEER_ID = "foobar89";

const ALBY_FREE_USER_MSG_THROTTLE_TIME = 800; // 800ms

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

    this.lastSendTime = 0;
    this.pendingSdps = [];
    this.publishPendingSdpsTimeoutId = 0;
  }

  getSendMsgName(peerId) {
    return `sdps:${this.isClient ? "offer" : "answer"}:${peerId}`;
  }

  publishPendingSdps(peerId) {
    peerId = peerId || this.peerId;

    if (this.pendingSdps.length <= 0) {
      return Promise.resolve();
    }
    if (this.publishPendingSdpsTimeoutId) {
      clearTimeout(this.publishPendingSdpsTimeoutId);
    }
    return new Promise((resolve, reject) => {
      this.channel.publish(
        this.getSendMsgName(peerId),
        [...this.pendingSdps], // using a shallow copy
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
      this.pendingSdps = [];
    });
  }

  SendSdp(sdp, peerId) {
    peerId = peerId || this.peerId;
    assert(peerId, "SendSdp no peerId supplied.");

    const obj = {
      sdp,
      fromId: this.myId,
      toId: peerId,
    };
    this.pendingSdps.push(obj);

    let result;
    const now = Date.now();
    if (now - this.lastSendTime < ALBY_FREE_USER_MSG_THROTTLE_TIME) {
      this.publishPendingSdpsTimeoutId = setTimeout(
        this.publishPendingSdps.bind(this, peerId),
        ALBY_FREE_USER_MSG_THROTTLE_TIME
      );
      result = Promise.resolve();
    } else {
      result = this.publishPendingSdps(peerId);
    }
    this.lastSendTime = now;
    return result;
  }

  WaitForSdps(resolve, reject, only_once = true) {
    this.channel.subscribe((msg) => {
      // resolve array instead of object because Leancloud signaling does this.
      if (this.isClient) {
        if (msg.name === `sdps:answer:${this.myId}`) {
          console.log("Ably client recv: ", msg);
          resolve(msg.data);
        }
      } else {
        if (msg.name.startsWith("sdps:offer:")) {
          console.log("Ably Server recv: ", msg);
          resolve(msg.data);
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
