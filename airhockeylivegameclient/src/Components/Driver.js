import React from "react";
import ScoreCard from "./ScoreCard";

const Driver = () => {
  return (
    <div className="flex flex-col justify-center mx-auto w-1/2 mt-1 rounded-md border-2 border-orange-600">
      <div className="flex justify-around items-center">
        <p className="text-2xl rounded-md border-2 border-green-600 px-1 py-1">
          Play Game
        </p>
        <ScoreCard />
      </div>
      <div></div>
    </div>
  );
};

export default Driver;
