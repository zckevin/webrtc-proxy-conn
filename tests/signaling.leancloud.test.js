import { jest } from "@jest/globals";

import leancloud from "../src/signaling/leancloud.js";
import LeancloudSignaling from "../src/signaling/signaling.leancloud.js";

jest.setTimeout(5 * 1000);

test("leancloud signaling single", (done) => {
  const fromId = "from123";
  const toId = "to456";
  const sdp = { type: "offer", sdp: "sdp" };

  let client, server;
  leancloud
    .GetAvailableEndpoint()
    .then((config) => {
      client = new LeancloudSignaling(fromId, toId, config);
      server = new LeancloudSignaling(toId, fromId, config);
    })
    .then(() => {
      return client.SendSdp(sdp);
    })
    .then(() => {
      server.WaitForSdps(
        (sdps) => {
          expect(sdps.length).toEqual(1);
          expect(sdps[0].object).toEqual(sdp);
          done();
        },
        (err) => {
          throw err;
        }
      );
    });
});
