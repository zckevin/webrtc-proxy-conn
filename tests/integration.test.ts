// @ts-ignore
// import * as wtfnode from "wtfnode"

import { WebrtcProxyClient, WebrtcProxyServer } from "../src/conn";
import { spawnLocalTcpServer, spawnPeerjsServer } from "./helper"
import { take } from 'rxjs';

test("single client", (done) => {
  const payloads = [
    new Uint8Array([1, 2, 3])
  ];
  const N = payloads.length

  const server = new WebrtcProxyServer();
  server.Serve().pipe(take(N)).subscribe();

  const tcpServer = spawnLocalTcpServer(payloads[0], async (port) => {
    const client = new WebrtcProxyClient();
    const duplex = await client.DialTcp("localhost", port);

    const destroy = () => {
      tcpServer.close();
      client.Destroy();
      server.Destroy();
      setTimeout(() => {
        done()
      }, 1000);
    }

    // @ts-ignore
    duplex.on("data", (data: any) => {
      data = new Uint8Array(data);
      console.log(data)
      expect(data).toEqual(payloads[0]);
      destroy();
    });
    // @ts-ignore
    duplex.on("error", () => {})
  });
});

test("multiple clients", (done) => {
  const payload = [
    new Uint8Array([1, 2, 3]),
    new Uint8Array([4, 5, 6]),
    new Uint8Array([7, 8, 9]),
  ];
  const N = payload.length;

  const server = new WebrtcProxyServer();
  server.Serve().pipe(take(N)).subscribe();

  const genPayloadFn = () => {
    let i = 0;
    return () => payload[i++];
  }

  const tcpServer = spawnLocalTcpServer(genPayloadFn(), async (port) => {
    let recved: Uint8Array[] = [];
    for (let i = 0; i < N; i++) {
      const client = new WebrtcProxyClient();
      const duplex = await client.DialTcp("localhost", port);

      const destroy = () => {
        tcpServer.close();
        client.Destroy();
        server.Destroy();
        setTimeout(() => {
          done();
        }, 1000);
      }

      // @ts-ignore
      duplex.on("data", (data: any) => {
        data = new Uint8Array(data);
        recved.push(data);

        if (recved.length === N) {
          expect(recved.sort()).toEqual(payload);
          destroy();
        }
      });
      // @ts-ignore
      duplex.on("error", () => {})
    }
  });
});
