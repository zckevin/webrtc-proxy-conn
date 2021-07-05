import SimplePeer from "simple-peer";
import wrtc from "./wrtc.node.js"; // empty in browser, using webpack plugin dotenv-webpack

function CreateSimplePeer(is_initiator, signaling) {
  const SimplePeerConfig = {
    initiator: is_initiator,
    trickle: false,
    config: {
      iceServers: signaling.ICE_SERVERS,
    },
  };
  if (wrtc && Object.keys(wrtc).length !== 0) {
    SimplePeerConfig["wrtc"] = wrtc;
  }
  return new SimplePeer(SimplePeerConfig);
}

export { CreateSimplePeer };
