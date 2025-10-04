import React, { useEffect, useRef, useState } from "react";
import Player1Paddle from "./Player1Paddle";

const Arena = () => {
  const arenaRef = useRef(null);
  const arenaInitialWidthRef = useRef(null);
  const [position, setPosition] = useState({ x: 0 });
  const previousPaddle1Position = useRef(0);

  useEffect(() => {
    if (arenaRef.current) {
      const arenaInitialWidth = arenaRef.current.clientWidth;
      const paddleInitialPosition = (arenaInitialWidth * 5) / 12;
      setPosition({ x: paddleInitialPosition });
      arenaInitialWidthRef.current = arenaInitialWidth;
      previousPaddle1Position.current = paddleInitialPosition;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentWidthOfArena = arenaRef.current.clientWidth;
      switch (e.key) {
        case "ArrowLeft":
          setPosition((prev) => {
            const newPos = prev.x <= 1 ? 0 : prev.x - 4;
            previousPaddle1Position.current = newPos;
            return { x: newPos };
          });
          break;

        case "ArrowRight":
          setPosition((prev) => {
            const newPos =
              prev.x >= (currentWidthOfArena * 5) / 6 - 4
                ? (currentWidthOfArena * 5) / 6
                : prev.x + 2;
            previousPaddle1Position.current = newPos;
            return { x: newPos };
          });

          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!arenaRef.current) {
        return;
      }

      const arenaPreviousWidth = arenaInitialWidthRef.current;
      const arenaCurrentWidth = arenaRef.current.clientWidth;
      const paddle1PreviousPosition = previousPaddle1Position.current;
      const paddle1NewPosition =
        arenaCurrentWidth * (paddle1PreviousPosition / arenaPreviousWidth);

      setPosition({ x: paddle1NewPosition });

      arenaInitialWidthRef.current = arenaCurrentWidth;
      previousPaddle1Position.current = paddle1NewPosition;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
