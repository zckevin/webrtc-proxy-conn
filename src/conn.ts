import * as net from "net"
// @ts-ignore
import pump from "pump"
// @ts-ignore
import { BPMux } from "bpmux";
// @ts-ignore
import SimplePeerJs from "@zckevin/simple-peerjs";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {
  tap, retryWhen, map, mergeMap, timeout, defer, from, fromEvent, delay,
  merge, of, take, Observable, catchError, shareReplay, takeUntil, Subject, mergeWith
} from 'rxjs';

import { buildDefaultConfig } from "./config"

function onErrorHelper(target: any): Observable<any> {
  return fromEvent(target, "error")
    .pipe(
      map(err => { throw err })
    );
}

class HandleshakeData {
  private static seperator = "-";

  public static serialize(host: string, port: number) {
    return Buffer.from(`${host}${this.seperator}${port}`);
  }

  public static tryParse(buf: Buffer) : [string, number] {
    const s = buf.toString("utf8");
    const parts = s.split(this.seperator);
    if (parts.length === 2) {
      const host = parts[0]
      const port = parseInt(parts[1])
      if (host && !isNaN(port)) {
        return [host, port]
      }
    }
    throw new Error(`Invalid handleshake data: ${s}`);
  }
}

class WebrtcProxyBase {
  protected static PROXY_SERVER_ID =
    // @ts-ignore
    globalThis.localStorage?.getItem("PEERJS_SERVER_ID") ||
    process.env.PEERJS_SERVER_ID ||
    "webrtc-proxy-server";
  protected mux: any;
  protected signaling: any;
  protected destoryed = new Subject();
  protected testingEv: any;

  protected constructor(protected config: any, protected signalingClass?: any) {
    if (!this.signalingClass) {
      this.signalingClass = SimplePeerJs;
    }
  }

  protected muxConn(conn: any) {
    const mux = this.mux = new BPMux(conn.peer);
    const onMuxClose = fromEvent(mux, "close").pipe(
      map(() => { throw new Error("mux closed") })
    );
    return merge(
      of(mux),
      onErrorHelper(mux),
      onErrorHelper(conn.peer),
      onMuxClose,
    );
  }

  protected onFatalError() {
    this.Destroy()
  }

  protected destroy() {
    if (this.mux && this.mux.carrier) {
      // clear pending timers/intervals in SimplePeer
      const timeout = this.mux.carrier._iceCompleteTimer;
      if (timeout) {
        clearTimeout(timeout);
      }
      // destroy SimplePeer's webrtc conns
      this.mux.carrier.destroy();
    }

    if (this.signaling) {
      // close websocket conn in simple-peerjs
      this.signaling.signaler?.destroy();
      // close other stuff in simple-peerjs
      this.signaling.close();
      this.signaling = null;
    }
  }

  public Destroy() {
    this.destoryed.next(true);
    this.destoryed.complete();
    this.destroy();
  }

  public setTestingEventemitter(testingEv: any) {
    this.testingEv = testingEv;
  }
}

export class WebrtcProxyClient extends WebrtcProxyBase {
  private CONN_TIMEOUT_MS = 10 * 1000;
  private MAX_RETRY: number = 5;
  private retry_n: number = 0;
  private peerSource: any = null;

  public constructor(signalingClass?: any) {
    super(buildDefaultConfig(true, uuidv4()), signalingClass);
  }

  private getTimeoutMs() {
    if(this.testingEv) {
      return 1000;
    }
    return this.CONN_TIMEOUT_MS;
  }

  private getRetryDelay() {
    if(this.testingEv) {
      return 0;
    }
    if (this.retry_n <= 10) {
      return 3 * 1000;
    } else {
      return 30 * 1000;
    }
  }

  private connectToPeer() {
    const dial = () => {
      this.testingEv?.emit("dial");
      this.signaling = new this.signalingClass(this.config);
      return of(null);
    }
    return defer(() => from(dial())).pipe(
      mergeMap(() => merge(
          from(this.signaling.connect(WebrtcProxyBase.PROXY_SERVER_ID)),
          onErrorHelper(this.signaling),
        )
      ),
      takeUntil(this.destoryed),
      timeout(this.getTimeoutMs()),
      mergeMap((conn: any) => this.muxConn(conn)),
      shareReplay(1),
      retryWhen(errs =>
        errs.pipe(
          tap(err => {
            this.onFatalError();
            console.log("met error: ", err);
            if (this.retry_n > this.MAX_RETRY) {
              throw new Error("max retry reached, abort...");
            }
            console.log("retry...");
            this.testingEv?.emit("retry", this.retry_n);
            this.retry_n++;
          }),
          delay(this.getRetryDelay()),
        )
      ),
    );
  }

  public DialTcp(host: string, port: number) {
    if (!this.peerSource) {
      this.peerSource = this.connectToPeer();
    }
    return new Promise((resolve, reject) => {
      this.peerSource
        .pipe(take(1))
        .subscribe({
          next: (mux: any) => {
            this.testingEv?.emit("connected");
            // catch any errors in bpmux
            try {
              const duplex = mux.multiplex({
                handshake_data: HandleshakeData.serialize(host, port)
              });
              // signal WebTorrent that duplex is ready,
              // add some delay to make sure the event handler is set...
              setTimeout(() => {
                duplex.emit("connect");
              }, 10);
              resolve(duplex);
            } catch(err) {
              reject(err);
            }
          },
          error: (err: Error) => {
            console.log("DialTcp error: ", err);
            reject(err);
          }
        })
    })
  }
}

export class WebrtcProxyServer extends WebrtcProxyBase {
  private isAllowedHostPort: (host: string, port: number) => boolean;

  public constructor(signalingClass?: any) {
    super(buildDefaultConfig(false, WebrtcProxyBase.PROXY_SERVER_ID), signalingClass);
  }

  public SetIsAllowedHostPortFn(fn: (host: string, port: number) => boolean) {
    this.isAllowedHostPort = fn;
  }

  private buildProxy(duplex: any, host: string, port: number) {
    console.log(`Dial to ${host}:${port}`);
    let destroyed = false;
    let tcpConn: net.Socket;
    try {
      if (this.isAllowedHostPort && !this.isAllowedHostPort(host, port)) {
        throw new Error(`target ${host}:${port} not allowed`);
      }
      tcpConn = net.connect(port, host)
    } catch(err) {
      console.error(err);
      duplex.destroy();
      return;
    }
    const onError = (err: Error | undefined) => {
      if (err && !destroyed) {
        console.log("pump error:", err);
        tcpConn.destroy();
        duplex.destroy();
        destroyed = true;
        console.log(`Destroy ${host}:${port}`);
      }
    }
    pump(duplex, tcpConn, onError);
    pump(tcpConn, duplex, onError);
  }

  private onHandleshake(duplex: any, buf: Buffer) {
    try {
      const [host, port] = HandleshakeData.tryParse(buf);
      if (this.testingEv) {
        this.testingEv.emit("buildProxy");
        // catch the errors on bpmux's destroy
        duplex.on("error", () => {})
      } else {
        this.buildProxy(duplex, host, port)
      }
    } catch (err) {
      console.warn(err);
      duplex.destroy();
    }
  }

  public Serve() {
    const source = () => {
      this.signaling = new this.signalingClass(this.config);
      return of(null);
    }
    return defer(() => from(source())).pipe(
      mergeMap(() => merge(
          fromEvent(this.signaling, "connect"),
          onErrorHelper(this.signaling),
        )
      ),
      takeUntil(this.destoryed),
      tap(conn => { console.log("Peer connected"); }),
      mergeMap((conn: any) => this.muxConn(conn)),
      mergeMap(mux =>
        fromEvent(mux, "handshake", (duplex: any, handleshakeData: Buffer) => {
          this.onHandleshake(duplex, handleshakeData);
        })
      ),
      catchError((err, caught) => {
        this.onFatalError();
        console.warn("met error, retry: ", err)
        return caught;
      }),
    )
  }
}