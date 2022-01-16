import { WebrtcProxyServer } from "./conn"
import * as ipaddr from "ipaddr.js"

const server = new WebrtcProxyServer();
server.SetIsAllowedHostPortFn((host: string, port: number) => {
  // only allow non-priviledged ports
  if (port < 1024 || port > 65535) {
    return false;
  }

  // only allow ipv6 unicast addresses
  // disallow ipv4/ipv6 linklocal/loopback/multicast addresses...
  try {
    const ip = ipaddr.parse(host);
    if (ip.kind() === "ipv6" && ip.range() === "unicast") {
      return true;
    }
  } catch (err) {}
  return false;
})

server.Serve().subscribe();