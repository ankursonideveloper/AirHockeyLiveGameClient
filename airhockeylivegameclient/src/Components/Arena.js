import React, { useEffect, useRef, useState } from "react";
import Player1Paddle from "./Player1Paddle";

const Arena = () => {
  const arenaRef = useRef(null);
  const arenaInitialWidthRef = useRef(null);
  const [position, setPosition] = useState({ x: 0 });
  const [onLeftMost, setOnLeftMost] = useState(false);
  const [onRightMost, setOnRightMost] = useState(false);

  useEffect(() => {
    if (arenaRef.current) {
      setPosition({ x: (arenaRef.current.offsetWidth * 5) / 12 });
      arenaInitialWidthRef.current = arenaRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentWidthOfArena = arenaRef.current.clientWidth;
      switch (e.key) {
        case "ArrowLeft":
          setPosition((prev) => {
            if (prev.x <= 1) {
              return { x: 0 };
            } else {
              return { x: prev.x - 2 };
            }
          });
          break;

        case "ArrowRight":
          setPosition((prev) => {
            if (prev.x >= (currentWidthOfArena * 5) / 6 - 2) {
              return { x: (currentWidthOfArena * 5) / 6 };
            } else {
              return { x: prev.x + 2 };
            }
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
      let arenaNewWidth = arenaRef.current.offsetWidth;
      let arenaLastWidth = arenaInitialWidthRef.current;
      if (arenaNewWidth > arenaLastWidth) {
        console.log("Width is increasing → expanding");
        setPosition((prev) => {
          if (prev.x == 0) {
            return { x: prev.x };
          } else if (prev.x >= (5 * arenaNewWidth) / 12 - 1) {
            return { x: (5 * arenaNewWidth) / 12 };
          } else {
            return { x: prev.x + (5 * (arenaNewWidth - arenaLastWidth)) / 12 };
          }
        });
      } else if (arenaNewWidth < arenaLastWidth) {
        console.log("Width is decreasing → shrinking");
        setPosition((prev) => {
          if (prev.x <= 1) {
            return { x: 0 };
          } else if (prev.x == (5 * arenaNewWidth) / 12) {
            return { x: prev.x };
          } else {
            return { x: prev.x - (5 * (arenaLastWidth - arenaNewWidth)) / 12 };
          }
        });
      }

      arenaInitialWidthRef.current = arenaNewWidth;
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
