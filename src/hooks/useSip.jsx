import JsSIP from "jssip";
import { useEffect } from "react";

const socket = new JsSIP.WebSocketInterface("ws://localhost:3000");
const jssipUA = new JsSIP.UA({
  sockets: socket,
  uri: "sip:mohit_xzhgtj@tryit.jssip.net",
  authorization_user: "MOHIT",
  password: "123456789",
  realm: null,
});
export const useSip = () => {
  useEffect(() => {
    JsSIP.debug.disable("JsSIP:*");
    jssipUA.start();
    jssipUA.on("connecting", (e) => {
      console.log("connecting:", e);
    });

    jssipUA.on("connected", (e) => {
      console.log("connected:", e);
    });

    jssipUA.on("disconnected", (e) => {
      console.log("disconnected:", e);
    });

    jssipUA.on("registered", (e) => {
      console.log("registered:", e);
    });

    jssipUA.on("unregistered", (e) => {
      console.log("unregistered:", e);
    });

    jssipUA.on("registrationFailed", (e) => {
      console.log("registrationFailed:", e);
    });
  }, []);
};
