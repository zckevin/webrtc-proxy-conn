// run with on Node.js 15+
// export NODE_OPTIONS=--unhandled-rejections=warn

import { jest } from "@jest/globals";

import AblySignaling from "../src/signaling/signaling.ably.js";

jest.setTimeout(5 * 1000);

test("ably signaling single", (done) => {
  const fromId = "from123";
  const toId = "to456";
  const sdpOffer = { type: "offer", sdp: "sdp" };
  const sdpAnswer = { type: "answer", sdp: "sdp" };

  const debugLog = false;
  const use_cached_client = false;
  const client = new AblySignaling(
    fromId,
    toId,
    true,
    debugLog,
    use_cached_client
  );
  const server = new AblySignaling(
    toId,
    fromId,
    false,
    debugLog,
    use_cached_client
  );

  client.WaitForSdps((sdps) => {
    expect(sdps.length).toEqual(1);
    expect(sdps[0].sdp).toEqual(sdpAnswer);

    // wait for Ably unsubscribe, and then close client/conn
    setTimeout(() => {
      client.Close();
      server.Close();

      done();
    }, 100);
  });

  server.WaitForSdps((sdps) => {
    expect(sdps.length).toEqual(1);
    expect(sdps[0].sdp).toEqual(sdpOffer);

    server.SendSdp(sdpAnswer);
  });

  // wait for Ably subscribe, in case reciver missing sender's message
  setTimeout(() => {
    client.SendSdp(sdpOffer);
  }, 500);
});

test("ably signaling multiple clients", (done) => {
  const toId = "to456";
  const sdpOffer = { type: "offer", sdp: "sdp" };
  const sdpAnswer = { type: "answer", sdp: "sdp" };

  const isClient = true;
  const debugLog = false;
  const use_cached_client = false;

  const clients = [1, 2, 3].map(
    (id) =>
      new AblySignaling(
        `from${id}`,
        toId,
        isClient,
        debugLog,
        use_cached_client
      )
  );
  const server = new AblySignaling(
    toId,
    null, // toId is unknown for server
    !isClient,
    debugLog,
    use_cached_client
  );

  let n = 0;
  const onClientResolve = (sdps) => {
    expect(sdps[0].sdp).toEqual(sdpAnswer);

    n += sdps.length;
    if (n === clients.length) {
      // wait for Ably unsubscribe, and then close client/conn
      setTimeout(() => {
        clients.map(client => client.Close());
        server.Close()
        done()
      }, 100);
    }
  };
  clients.map(client => client.WaitForSdps(onClientResolve));

  server.WaitForSdpsForever((sdps) => {
    expect(sdps[0].sdp).toEqual(sdpOffer);

    server.SendSdp(sdpAnswer, sdps[0].fromId);
  });

  // wait for Ably subscribe, in case reciver missing sender's message
  setTimeout(() => {
    clients.map(client => client.SendSdp(sdpOffer));
  }, 500);
});