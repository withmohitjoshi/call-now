import { createContext, useContext, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");
const SocketContext = createContext(socket);

export default function SocketWrapper({ children }) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export const useSocketContext = () => useContext(SocketContext);

export const useEmitSocket = ({ eventName = "", data = null }) => {
  return () => socket.emit(eventName, data);
};

export const useEmitSocketOnMount = ({ eventName = "", data = null }) => {
  const ref = useRef(false);
  useEffect(() => {
    if (!ref.current) {
      console.log('SUUUUUUUU')
      socket.emit(eventName, data);
      ref.current = true;
    }
  }, []);
};
