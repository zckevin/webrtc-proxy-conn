"use strict";

import { assert } from "./assert.js";
import moment from "moment";
import node_fetch from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = node_fetch;
}

const APP_ID = "ilxm1ScIAE9c8xOTH3pAiUWg-MdYXbMMI";
const APP_KEY = "b7PyCMCBs7RD2E6Sg8cG8Dww";
const TABLE_NAME = "Post";
const API_ENDPOINT = `https://${APP_ID}.api.lncldglobal.com/1.1/classes/${TABLE_NAME}`;

async function SendSdp(sdp, fromId, toId) {
  try {
    let obj = {
      fromId,
      toId,
      sdp,
    };
    let resp = await fetch(API_ENDPOINT, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-LC-Id": APP_ID,
        "X-LC-Key": APP_KEY,
      },
      body: JSON.stringify(obj),
    });
    let body = await resp.json();
    console.log(body);
    assert(body.objectId, "leancloud api failure");
  } catch (err) {
    throw err;
  }
}

async function QuerySdp(fromId, toId, should_delete = false) {
  assert(toId, "toId must not be null");
  const query = {
    createdAt: {
      $gte: {
        __type: "Date",
        iso: moment().subtract(10, "seconds").toISOString(),
      },
    },
    toId,
  };
  if (fromId) {
    query["fromId"] = fromId;
  }
  let url = new URL(API_ENDPOINT);
  url.searchParams.append("where", JSON.stringify(query));
  url.searchParams.append("order", "-createdAt");
  try {
    let resp = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-LC-Id": APP_ID,
        "X-LC-Key": APP_KEY,
      },
    });
    let body = await resp.json();
    console.log(body);
    if (should_delete) {
      body.results.map((obj) => {
        deleteSdp(obj.objectId);
      });
    }
    return body.results;
  } catch (err) {
    throw err;
  }
}

async function deleteSdp(objectid) {
  assert(objectid, "objectid should not be null");
  let url = new URL(`${objectid}`, API_ENDPOINT + "/");
  try {
    let resp = await fetch(url, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-LC-Id": APP_ID,
        "X-LC-Key": APP_KEY,
      },
    });
    await resp.json();
  } catch (err) {
    console.error(err);
  }
}

const leancloud = {
  SendSdp,
  QuerySdp,
};
export default leancloud;
