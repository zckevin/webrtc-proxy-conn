import { WebrtcProxyClient,  WebrtcProxyServer } from "../src/conn";
import EventEmitter from "eventemitter3"
import { take, fromEvent, scan, merge, map, reduce } from 'rxjs';

function dial(client: any) {
  const nonExistPort = 123456789;
  client.DialTcp("localhost", nonExistPort).then((duplex: any) => {
    // @ts-ignore
    duplex.on("error", () => {})
  });
}

test("would timeout and re-dial", (done) => {
  const client = new WebrtcProxyClient();
  const testingEv = new EventEmitter()
  client.setTestingEventemitter(testingEv);

  const onFinish = () => {
    client.Destroy();
    done();
  }

  merge(
    fromEvent(testingEv, "dial").pipe(map(() => "dial")),
    fromEvent(testingEv, "retry").pipe(map(() => "retry")),
  ).pipe(
    take(3),
    reduce((acc, curr) => acc.push(curr) && acc, []),
  ).subscribe(val => {
    if (val.length >= 3) {
      expect(val).toEqual(["dial", "retry", "dial"])
      onFinish();
    }
  })

  dial(client);
});

test("should fire connected", (done) => {
  const N = 1;

  const server = new WebrtcProxyServer();
  const serverEv = new EventEmitter()
  server.setTestingEventemitter(serverEv);
  server.Serve().pipe(take(N)).subscribe();

  const client = new WebrtcProxyClient();
  const clientEv = new EventEmitter()
  client.setTestingEventemitter(clientEv);

  const onFinish = () => {
    client.Destroy();
    server.Destroy();
    done();
  }

  merge(
    fromEvent(clientEv, "dial").pipe(map(() => "dial")),
    fromEvent(clientEv, "connected").pipe(map(() => "connected")),
  ).pipe(
    take(2),
    reduce((acc, curr) => acc.push(curr) && acc, []),
  ).subscribe(val => {
    if (val.length >= 2) {
      expect(val).toEqual(["dial", "connected"])
      onFinish();
    }
  })

  dial(client)
})

test("should return multiplexed duplex from cached SimplePeer conn", (done) => {
  const N = 2;

  const server = new WebrtcProxyServer();
  const serverEv = new EventEmitter()
  server.setTestingEventemitter(serverEv);
  server.Serve().pipe(take(N)).subscribe();

  const client = new WebrtcProxyClient();
  const clientEv = new EventEmitter()
  client.setTestingEventemitter(clientEv);

  const onFinish = () => {
    client.Destroy();
    server.Destroy();
    done();
  }

  merge(
    fromEvent(clientEv, "dial").pipe(map(() => "dial")),
    fromEvent(clientEv, "connected").pipe(map(() => "connected")),
  ).pipe(
    take(2),
    reduce((acc, curr) => acc.push(curr) && acc, []),
  ).subscribe(val => {
    if (val.length == 2) {
      expect(val).toEqual(["dial", "connected"])

      // order matters...
      merge(
        fromEvent(clientEv, "dial").pipe(map(() => "dial")),
        fromEvent(clientEv, "connected").pipe(map(() => "connected")),
      ).pipe(
        take(1),
      ).subscribe(val => {
        console.log(val)
        expect(val).toEqual("connected")
        onFinish();
      })
      // dial a second duplex
      dial(client)
    }
  })

  dial(client)
})