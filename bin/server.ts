import { WebrtcProxyServer } from "../src/conn"

const server = new WebrtcProxyServer();
server.Serve().subscribe();