import React from "react";
import Player1Paddle from "./Player1Paddle";

const Arena = () => {
  return (
    <div className="w-11/12 sm:w-1/2 mt-1 rounded-md border-2 border-red-600 mx-auto h-screen flex-grow flex flex-col relative">
      <Player1Paddle />
    </div>
  );
};

export default Arena;
