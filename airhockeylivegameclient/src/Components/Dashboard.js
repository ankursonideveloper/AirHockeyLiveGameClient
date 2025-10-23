import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Navigation from "./Navigation";
import Arena from "./Arena";
import AvailablePlayers from "./AvailablePlayers";

const Dashboard = () => {
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const [playState, setPlayState] = useState(false);

  useEffect(() => {
    if (!playState) {
      console.log("✅ useEffect in Dashboard running...");
      const token = localStorage.getItem("authToken");

      const socket = io("http://localhost:5000", { auth: { token } });

      socket.on("connect", () => {
        console.log("✅ Socket connected, ID:", socket.id);
        socket.emit("messageFromClient", {
          msg: "Hello from React1" + socket.id,
        });
      });

      socket.on("availableUsersUpdate", (data) => {
        console.log("Received players:", data);
        setOnlinePlayers(data);
      });

      socket.on("connect_error", (err) => {
        console.error("❌ Socket connection error:", err);
      });

      return () => {
        console.log("❌ Disconnecting socket...");
        socket.disconnect();
      };
    }
  }, []);

  return (
    <div className="text-slate-300 w-full flex flex-col h-screen mb-1">
      <Navigation />
      <AvailablePlayers availablePlayers={onlinePlayers} />
      <Arena />
    </div>
  );
};

export default Dashboard;
