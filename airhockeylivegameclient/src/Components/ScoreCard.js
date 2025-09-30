import React from "react";

const ScoreCard = () => {
  return (
    <div className="flex flex-col rounded-lg border-2 border-violet-500 px-4 py-1">
      <div>
        <p>Score</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>P1</p>
        <p>P2</p>
      </div>
      <div className="flex flex-row justify-evenly">
        <p>2</p>
        <p>-</p>
        <p>3</p>
      </div>
    </div>
  );
};

export default ScoreCard;
