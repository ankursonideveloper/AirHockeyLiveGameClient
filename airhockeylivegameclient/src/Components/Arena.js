import React, { useEffect, useRef, useState } from "react";
import Player1Paddle from "./Player1Paddle";

const Arena = () => {
  const [position, setPosition] = useState({ x: 0 });
  const arenaRef = useRef(null);

  useEffect(() => {
    if (arenaRef) {
      setPosition({ x: (arenaRef.current.offsetWidth * 5) / 12 });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
          break;
        case "ArrowRight":
          setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="w-11/12 sm:w-1/2 mt-1 rounded-md border-2 border-red-600 mx-auto h-screen flex-grow flex flex-col relative"
      ref={arenaRef}
    >
      <Player1Paddle position={position} />
    </div>
  );
};

export default Arena;
