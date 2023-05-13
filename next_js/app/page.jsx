"use client";
import Pause from "./pause.jsx";
import { useState } from "react";

export default function Home() {
  const [gamePause, setGamePause] = useState(false);
  function handleClick(e) {
    setGamePause(!gamePause);
  }

  window.addEventListener("keydown", handleClick);
  return (
    <div id="content">
      {gamePause ? (
        <Pause continue={handleClick} exit={window.close} />
      ) : (
        <h1>Game Continues</h1>
      )}
    </div>
  );
}
