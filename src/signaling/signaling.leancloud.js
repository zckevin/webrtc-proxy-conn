import { assert } from "../assert.js";
import leancloud from "./leancloud.js";
import BasicSignaling from "./signaling.js";

const MAX_PROBE_N = 15;

const DEFAULT_SERVER_PEER_ID = "foobar89";

class LeancloudSignaling extends BasicSignaling {
  constructor(myId, peerId = DEFAULT_SERVER_PEER_ID, leancloud_config = null) {
    super();
    this.myId = myId;
    this.peerId = peerId;

    this.leancloud_config = leancloud_config;

    this.FAST_PROBE_INTERVAL = 1;
    this.SLOW_PROBE_INTERVAL = 5;
  }

  async SendSdp(data, peerId) {
    assert(this.peerId || peerId, "SendSdp no peerId supplied.");
    await leancloud.PutObject(
      data,
      this.myId,
      peerId || this.peerId,
      this.leancloud_config
    );
  }

  async querySdps(resolve) {
    let sdps = await leancloud.GetObjects(
      this.peerId,
      this.myId,
      true,
      this.leancloud_config
    );
    if (sdps.length === 0) {
      return;
    }
    // const sdps = objs.map((obj) => obj.object); // .object key defined in leancloud.js
    console.log("get sdps", sdps);
    resolve(sdps);
  }

  OnReceiveSdps(resolve, reject) {
    let trial_n = 0;
    let interval = setInterval(() => {
      try {
        this.querySdps((sdps) => {
          clearInterval(interval);
          resolve(sdps);
        });
      } catch (err) {
        console.error(err);
      }
      if (trial_n++ >= MAX_PROBE_N) {
        clearInterval(interval);
        reject(new Error(`Retry times exceeds ${trial_n}, abort conn`));
      }
    }, this.FAST_PROBE_INTERVAL * 1000);
  }

  WaitForSdpsForever(resolve) {
    setInterval(() => {
      try {
        this.querySdps((sdps) => {
          resolve(sdps);
        });
      } catch (err) {
        console.error(err);
      }
    }, this.SLOW_PROBE_INTERVAL * 1000);
  }
}

export default LeancloudSignaling;
