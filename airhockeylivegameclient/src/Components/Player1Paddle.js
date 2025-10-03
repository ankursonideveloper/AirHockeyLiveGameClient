import React, { useState } from "react";

const Player1Paddle = ({ position }) => {
  return (
    <div
      className="w-1/6 h-10 bg-blue-500 rounded-sm absolute bottom-0 "
      style={{ left: `${position.x}px` }}
    ></div>
  );
};

export default Player1Paddle;
