"use strict";

import moment from "moment";
import node_fetch from "node-fetch";

import { assert } from "../assert.js";
import "../dotenv.node.js"; // empty in browser, using webpack plugin dotenv-webpack

const IS_BROWSER_ENV = !(
  typeof globalThis.process !== "undefined" &&
  globalThis.process.release.name === "node"
);

if (!globalThis.fetch) {
  globalThis.fetch = node_fetch;
}

class LeanCloud {
  constructor(is_browser) {
    this._is_browser = is_browser;
    this._leancloud_config = null;

    if (this._is_browser) {
      this.ensureAvailableEndpoint();
    }
  }

  invalidateCurrentLeancloudConfig() {
    this._leancloud_config = null;
  }

  async testEndPoint(appId, appKey, endpoint) {
    let url = new URL(endpoint);
    url.searchParams.append("limit", 1);
    try {
      let resp = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-LC-Id": appId,
          "X-LC-Key": appKey,
        },
      });
      let body = await resp.json();
      if (body.error) {
        throw new Error(body.error);
      }
    } catch (err) {
      throw err;
    }
  }

  async ensureAvailableEndpoint() {
    assert(this._is_browser);

    if (this._leancloud_config) {
      return this._leancloud_config;
    }
    this._leancloud_config = await this.GetAvailableEndpoint();
    console.log("Set leancloud config:", this._leancloud_config.APP_ID);
    return this._leancloud_config;
  }

  async GetAvailableEndpoint() {
    const { appIds, appKeys, endpoints } = this.GetEnv();
    const requests = endpoints.map(async (endpoint, index) => {
      await this.testEndPoint(appIds[index], appKeys[index], endpoint);
      return index;
    });
    try {
      const index = await Promise.any(requests);
      return {
        APP_ID: appIds[index],
        APP_KEY: appKeys[index],
        API_ENDPOINT: endpoints[index],
      };
    } catch (err) {
      throw new Error("no Leancloud endpoint is available.");
    }
  }

  GetEnv() {
    // from $ROOT_DIR/.env ENV file by dotenv
    const appIds = (process.env.LEANCLOUD_APP_ID || "").split(",");
    const appKeys = (process.env.LEANCLOUD_APP_KEY || "").split(",");
    const tableName = process.env.LEANCLOUD_TABLE_NAME;
    const endpoints = appIds.map(
      (id) => `https://${id}.api.lncldglobal.com/1.1/classes/${tableName}`
    );
    assert(
      appIds.length > 0 &&
        appIds.length === appKeys.length &&
        tableName.length > 0,
      "invalid .env config file"
    );
    return {
      appIds,
      appKeys,
      endpoints,
    };
  }

  async deleteObject(objectid, specified_config = null) {
    assert(objectid, "objectid should not be null");
    const config = specified_config || (await this.ensureAvailableEndpoint());

    const url = new URL(`${objectid}`, config.API_ENDPOINT + "/");
    try {
      let resp = await fetch(url, {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-LC-Id": config.APP_ID,
          "X-LC-Key": config.APP_KEY,
        },
      });
      await resp.json();
    } catch (err) {
      console.error(err);
    }
  }

  async PutObject(object, fromId, toId, specified_config = null) {
    assert(fromId && toId, "fromId/toId must not be null");
    const config = specified_config || (await this.ensureAvailableEndpoint());

    try {
      let wrapper = {
        fromId,
        toId,
        object,
      };
      let resp = await fetch(config.API_ENDPOINT, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-LC-Id": config.APP_ID,
          "X-LC-Key": config.APP_KEY,
        },
        body: JSON.stringify(wrapper),
      });
      let body = await resp.json();
      if (body.error) {
        this.invalidateCurrentLeancloudConfig();
        return;
      }
      console.log(body);
      assert(body.objectId, "leancloud api failure");
    } catch (err) {
      throw err;
    }
  }

  async GetObjects(fromId, toId, should_delete = false, specified_config = null) {
    assert(toId, "toId must not be null");
    const config = specified_config || (await this.ensureAvailableEndpoint());

    let url = new URL(config.API_ENDPOINT);
    // ingore requests earlier then 10s from now
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
    url.searchParams.append("where", JSON.stringify(query));
    // decending on create time
    url.searchParams.append("order", "-createdAt");

    try {
      let resp = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-LC-Id": config.APP_ID,
          "X-LC-Key": config.APP_KEY,
        },
      });
      let body = await resp.json();
      if (body.error) {
        this.invalidateCurrentLeancloudConfig();
        return [];
      }
      console.log(body);
      if (should_delete) {
        body.results.map((obj) => {
          this.deleteObject(obj.objectId, specified_config);
        });
      }
      return body.results;
    } catch (err) {
      throw err;
    }
  }
}

let leancloud = new LeanCloud(IS_BROWSER_ENV);

export default leancloud;
