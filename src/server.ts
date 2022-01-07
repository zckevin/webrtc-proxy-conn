import { WebrtcProxyServer } from "./conn"

const server = new WebrtcProxyServer();
server.Serve().subscribe();