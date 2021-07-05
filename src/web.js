"use strict";

import { DialWebrtcConn } from "./client.js";

{
  const peerId = "foobar89";
  let conn = DialWebrtcConn(peerId, "localhost:8080");

  conn.on("connect", () => {
    conn.write("GET / HTTP/1.1\r\nHost: localhost:8080\r\n\r\n");
    console.log("after http get")
  });

  conn.on("data", (data) => {
    console.log(new TextDecoder().decode(data));
  });
}
