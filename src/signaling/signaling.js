"use strict";

class BasicSignaling {
  constructor() {
    this.ICE_SERVERS = [
      {
        credential: "bshu1211",
        urls: "turn:stun.ppzhilian.com",
        username: "bshu",
      },
      // { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
    ];
  }
}

export default BasicSignaling;
