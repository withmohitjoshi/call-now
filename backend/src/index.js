import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173/"
  },
});

app.get("/", (req, res) => {
  res.send("Hello");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });

  socket.on("message", (message) => {
    console.log("Message received:", message);
    io.emit("message", message); // Broadcast the message to all connected clients
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
