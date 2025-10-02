import React, { useState } from "react";

const Player1Paddle = ({ position }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: position });

  return (
    <div
      className="w-1/6 h-10 bg-blue-500 rounded-md absolute bottom-0 "
      tabIndex={0}
      style={{ left: `${currentPosition.x}px` }}
    ></div>
  );
};

export default Player1Paddle;
