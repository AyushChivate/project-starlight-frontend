import Lobby from "./Lobby";
import Game from "./Game";
import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log(`You (Player "${socket.id}") have connected!`);
});

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Lobby");
  const [hasLastPlayerJoined, setHasLastPlayerJoined] = useState(false);
  const [isRoomFull, setIsRoomFull] = useState(false);

  socket.on("has-last-player-joined", (message) =>
    setHasLastPlayerJoined(message)
  );

  socket.on("is-room-full", (message) => {
    setIsRoomFull(message);
  });

  function toggleScreen() {
    setCurrentScreen(currentScreen === "Lobby" ? "Game" : "Lobby");
  }

  return (
    <>
      {currentScreen === "Lobby" && isRoomFull === false && (
        <Lobby
          onToggle={toggleScreen}
          hasLastPlayerJoined={hasLastPlayerJoined}
          isRoomFull={isRoomFull}
        />
      )}
      {currentScreen === "Game" && <Game onToggle={toggleScreen} />}
    </>
  );
}

// TODO: fix Room Full logic
// TODO: add logic to disable start game button after players leave after 5 have joined
