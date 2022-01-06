import net from "net";
import { spawn } from 'child_process';

export function spawnLocalTcpServer(payload: any, cb: (port : number) => void) {
  const tcpServer = net.createServer((sock) => {
    if (typeof payload === "function") {
      sock.end(payload());
    } else {
      sock.end(payload);
    }
  });

  tcpServer.listen(0, "localhost", () => {
    const addr = tcpServer.address() as net.AddressInfo;
    // console.log("TCP Server is running at", addr);
    cb(addr.port);
  });

  return tcpServer;
}

export function spawnPeerjsServer(port: number = 9999) {
  return spawn("/home/zc/PROJECTS/byrbt/torrent/peerjs-server/bin/peerjs", ["-p", "9999"])
}
