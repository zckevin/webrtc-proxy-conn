import net from "net";

function spawnLocalTcpServer(payload, cb) {
  const tcpServer = net.createServer((sock) => {
    if (typeof payload === "function") {
      sock.end(payload());
    } else {
      sock.end(payload);
    }
  });

  tcpServer.listen(0, "localhost", () => {
    const addr = `localhost:${tcpServer.address().port}`;
    console.log("TCP Server is running at", addr);
    cb(addr);
  });

  return tcpServer;
}

function spawnLocalTcpServer2(cb) {
  const tcpServer = net.createServer((sock) => {
    sock.on("data", (data) => {
      sock.end(data);
    });
  });

  tcpServer.listen(18000, "localhost", () => {
    const addr = `localhost:${tcpServer.address().port}`;
    console.log("TCP Server is running at", addr);
    cb(addr);
  });

  return tcpServer;
}

export {
  spawnLocalTcpServer,
  spawnLocalTcpServer2,
};
