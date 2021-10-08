import { jest } from "@jest/globals";

import { DialWebrtcConn } from "../src/client.js";
import BasicSignaling from "../src/signaling/signaling.js";
import { ab2str } from "../src/protocol.js";
import { CreateSimplePeer } from "../src/webrtc.js";

test("dummy client", (done) => {
  const addr = "localhost:8080";
  const signaling = new BasicSignaling();
  const server = CreateSimplePeer(false, signaling);

  let resolve = null;
  const mockSignaling = {
    SendSdp: (sdp) => {
      server.signal(sdp);
    },
    WaitForSdps: (resolve_) => {
      resolve = resolve_;
    },
  };

  server.on("signal", (data) => {
    expect(resolve).not.toBeNull();
    const sdps = [{sdp: data}];
    resolve(sdps);
  });

  let checked = false;
  server.on("data", (data) => {
    const [gotAddr, left] = ab2str(data.buffer);
    expect(gotAddr).toEqual(addr);
    server.destroy();
    checked = true;
  });

  const client = DialWebrtcConn(addr, mockSignaling);
  client.on("close", () => {
    expect(checked).toBeTruthy();
    client.destroy();
    done();
  });
});
