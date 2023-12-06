import { createContext, useContext } from 'react';
import io from "socket.io-client";

const socket = io.connect('http://localhost:3000');
const SocketContext = createContext(socket);

export default function SocketWrapper({ children }) {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

export const useSocketContext = () => useContext(SocketContext);
