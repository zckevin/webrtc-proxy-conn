"use strict";

import * as Ably from "ably";
// const vcdiffDecoder = require("@ably/vcdiff-decoder");
import * as vcdiffDecoder from "@ably/vcdiff-decoder";

import { assert, assertNotReached } from "../assert.js";
import { BasicSignaling } from "./signaling.js";
import "../dotenv.node.js"; // empty in browser, using webpack plugin dotenv-webpack

const ABLY_CHANNEL_NAME = "sdps";
const DEFAULT_SERVER_PEER_ID = "foobar89";

/*
 * Ably free user limitation:
 * https://faqs.ably.com/error-code-42910-rate-limit-exceeded-request-rejected
 * https://faqs.ably.com/do-you-have-any-connection-message-rate-or-other-limits-on-accounts
 *
 * FREE user could only send no more than 15 msgs per second to a concurrent live channel,
 * and max msg length is 16384 bytes(16KiB)
 */
const ALBY_FREE_USER_MSG_THROTTLE_TIME = 500; // 800ms
const ALBY_FREE_USER_MSG_THROTTLE_LEN = 15000;

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
        plugins: {
          vcdiff: vcdiffDecoder,
        },
      });
      if (use_cached_client) CACHED_ABLY_CLIENT = this.client;
    }
    this.channel = this.client.channels.get(ABLY_CHANNEL_NAME, {
      params: {
        delta: "vcdiff",
      },
    });
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
      const s = JSON.stringify(this.pendingSdps);
      console.log("=============================================");
      console.log("sdps total len: ", s.length);

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
    }).catch((err) => {
      console.log(err);
    });
  }

  pendingSdpsLengthExceedsLimit() {
    const s = JSON.stringify(this.pendingSdps);
    return s.length >= ALBY_FREE_USER_MSG_THROTTLE_LEN;
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
    if (
      now - this.lastSendTime < ALBY_FREE_USER_MSG_THROTTLE_TIME &&
      !this.pendingSdpsLengthExceedsLimit()
    ) {
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

  // OVERRIDE
  OnReceiveSdps(resolve, reject, only_once = true) {
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
      // if (only_once) {
      //   this.channel.unsubscribe(ABLY_CHANNEL_NAME);
      // }
    });
  }

  WaitForSdpsForever(resolve) {
    this.OnReceiveSdps(resolve, null, false);
  }

  Close() {
    this.client.close();
  }
}

export default AblySignaling;
