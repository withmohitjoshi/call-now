import React from "react";
import Dialpad from "./components/Dialpad";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

const App = () => {
  socket.on("connection", () => {
    console.log("Connected to Socket.IO server");
  });
  
  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <div className="max-w-screen-sm shadow-xl rounded-xl px-4 py-6 mx-4">
        <Dialpad />
      </div>
    </div>
  );
};

export default App;
