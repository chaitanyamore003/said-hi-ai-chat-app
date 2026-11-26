import { Server } from "socket.io";

export const setupSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL
        ? process.env.FRONTEND_URL.replace(/\/$/, "")
        : "http://localhost:5173",
      credentials: true,
    },
  });

  return io;
};
