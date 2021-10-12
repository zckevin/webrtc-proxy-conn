"use strict";

import * as Ably from "ably";
// const vcdiffDecoder = require("@ably/vcdiff-decoder");
import * as vcdiffDecoder from "@ably/vcdiff-decoder";

import { assert, assertNotReached } from "../assert.js";
import { BasicSignaling, SdpObject } from "./signaling.js";
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

// let CACHED_ABLY_CLIENT = null;

class AblySignaling extends BasicSignaling {
  constructor(uid, config, debug_log = false, use_cached_client = false) {
    super(uid, config);
    // if (use_cached_client && CACHED_ABLY_CLIENT) {
    //   this.client = CACHED_ABLY_CLIENT;
    // } else {
    assert(process.env.ABLY_APP_KEY, "process.env.ABLY_APP_KEY not set");
    this.client = new Ably.default.Realtime({
      key: process.env.ABLY_APP_KEY,
      clientId: this.config.isClient ? "dummyClient" : "proxyServer",
      log: { level: debug_log ? 4 : 1 },
      plugins: {
        vcdiff: vcdiffDecoder,
      },
    });
    //   if (use_cached_client) CACHED_ABLY_CLIENT = this.client;
    // }
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

  getSendMsgName() {
    // return `sdps:${this.config.isClient ? "offerFrom" : "answerTo"}:${this.uid}`;

    // using broadcasting right now...
    return `sdps:${this.config.isClient ? "offer" : "answer"}:${this.uid}`;
  }

  ablySendPendingSdps() {
    if (this.pendingSdps.length <= 0) {
      return Promise.resolve();
    }
    if (this.publishPendingSdpsTimeoutId) {
      clearTimeout(this.publishPendingSdpsTimeoutId);
    }
    return new Promise((resolve, reject) => {
      const s = JSON.stringify(this.pendingSdps);
      // console.log("sdps total len: ", s.length);
      if (this.config.isClient) {
        console.log("=============================================");
      } else {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      }

      this.channel.publish(
        this.getSendMsgName(),
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
      console.error(err);
    });
  }

  pendingSdpsLengthExceedsLimit() {
    const s = JSON.stringify(this.pendingSdps);
    return s.length >= ALBY_FREE_USER_MSG_THROTTLE_LEN;
  }

  SendSdp(sdpObject) {
    this.pendingSdps.push(sdpObject);

    const now = Date.now();
    if (
      now - this.lastSendTime < ALBY_FREE_USER_MSG_THROTTLE_TIME &&
      !this.pendingSdpsLengthExceedsLimit()
    ) {
      this.publishPendingSdpsTimeoutId = setTimeout(
        this.ablySendPendingSdps.bind(this),
        ALBY_FREE_USER_MSG_THROTTLE_TIME
      );
    } else {
      this.ablySendPendingSdps();
    }
    this.lastSendTime = now;
  }

  // OVERRIDE
  setupOnReceiveSdps(resolve, reject, only_once = true) {
    this.channel.subscribe((ablyMsg) => {
      // error handling?
      const sdpObjects = SdpObject.parseSerializedSdpObjects(ablyMsg.data);
      if (this.config.isClient) {
        if (ablyMsg.name.startsWith("sdps:answer:")) {
          const filtered = sdpObjects.filter(
            (sdpObject) => sdpObject.dstUid === this.uid
          );
          console.log("Ably client recv: ", filtered);
          resolve(filtered);
        }
      } else {
        if (ablyMsg.name.startsWith("sdps:offer:")) {
          console.log("Ably Server recv: ", ablyMsg);
          resolve(sdpObjects);
        }
      }
      // if (only_once) {
      //   this.channel.unsubscribe(ABLY_CHANNEL_NAME);
      // }
    });
  }

  WaitForSdpsForever(resolve) {
    this.setupOnReceiveSdps(resolve, null, false);
  }

  Close() {
    this.client.close();
  }
}

export default AblySignaling;
