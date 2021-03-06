import { isNode } from "browser-or-node";
import * as NodeDependencies from "./node"

interface IceServerConfig {
  urls: string,
  username?: string,
  credential?: string,
}

interface SimplePeerConfig {
  trickle: boolean,
  initiator: boolean,
  config: {
    iceServers: Array<IceServerConfig>,
  },
}

interface WebsocketConfig {
  host: string,
  port: number,
  secure: boolean,
  id?: string,
}

interface WebrtcProxyConfig {
  simplePeer?: SimplePeerConfig,
  websocket?: WebsocketConfig,
}

const DEFAULT_ICE_SERVERS: Array<IceServerConfig> = [
  { urls: "turn:stun.ppzhilian.com", credential: "bshu1211", username: "bshu" },
  { urls: 'turn:0.peerjs.com:3478', username: 'peerjs', credential: 'peerjsp' },
  { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
  { urls: 'stun:stun.l.google.com:19302' },
];

export function buildDefaultConfig(isClient: boolean, myId: string | null) {
  const simplePeerConfig: SimplePeerConfig = {
    trickle: true,
    config: {
      iceServers: DEFAULT_ICE_SERVERS,
    },
    initiator: isClient,
  };
  const websocketConfig: WebsocketConfig = {
    id: myId,
    // @ts-ignore
    host: globalThis.PEERJS_SERVER_HOST ||
          process.env.PEERJS_SERVER_HOST ||
          "0.peerjs.com",
    // @ts-ignore
    port: globalThis.PEERJS_SERVER_PORT ||
          parseInt(process.env.PEERJS_SERVER_PORT) ||
          443,
    secure: false
  }
  if (websocketConfig.host === "0.peerjs.com") {
    websocketConfig.secure = true;
  }

  const config: WebrtcProxyConfig = {
    simplePeer: simplePeerConfig,
    websocket: websocketConfig,
  }

  const usedConfig: any = {
    simplePeer: config.simplePeer,
    ...config.websocket,
  };
  if (isNode) {
    return Object.assign({}, usedConfig, NodeDependencies)
  }
  return usedConfig;
}
