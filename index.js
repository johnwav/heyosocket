const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const server = http.createServer();

const io = new Server(server, {
//   cors: {
//     origin: "*", // Allow requests from this origin
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
  addTrailingSlash: false,
});

io.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`Websocket server listening on port ${PORT}`);
});
