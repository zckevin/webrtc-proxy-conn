# Install
`npm install --save @zckevin/webrtc-proxy-conn`

# Config

```TypeScript
interface Config {
    PEERJS_SERVER_HOST: string;
    PEERJS_SERVER_PORT: number;
}
```

- Using .env file
- Using variables in `globalThis`

# Usage

## server

```bash
# 1. install and start peerjs server
npm install -g peerjs
peerjs --port 8080 --host localhost

# 2. start proxy server
./bin/webrtc-proxy-server
```

## client

```TypeScript
interface WebrtcProxyClient {
    DialTcp(host: string, port: number): Promise<stream.Duplex>;
}
```

```JavaScript
// for Node.js
const { client } = require("@zckevin/webrtc-proxy-conn/packages/node").WebrtcConn;

// for browser
const { client } = require("webrtc-proxy-conn/packages/browser");

client.DialTcp("localhost", 8080).then(duplex => {
    // ...
});
```
