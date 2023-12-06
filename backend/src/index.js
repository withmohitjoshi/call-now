import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("Hello");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  socket.on('msg', (data) => {
    console.log({ data }, 'Data is here');
  })
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
