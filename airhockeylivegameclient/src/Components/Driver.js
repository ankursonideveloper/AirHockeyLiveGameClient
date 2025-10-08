import React, { useState } from "react";
import ScoreCard from "./ScoreCard";
import { Loader } from "lucide-react";

const Driver = () => {
  const [buttonState, setButtonState] = useState("Play");

  const handleButtonClick = (current) => {
    if (current === "Play") {
      setButtonState("Search");
    } else if (current === "Pause") {
      setButtonState("Play");
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-11/12 sm:w-1/2 mt-1 rounded-md border-2 border-orange-600">
      <div className="flex justify-around items-center">
        <button
          value={buttonState}
          className="text-2xl rounded-md border-2 border-green-600 px-1 py-1"
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick(e.target.value);
          }}
        >
          {buttonState === "Play" ? (
            "Play"
          ) : buttonState === "Pause" ? (
            "Pause"
          ) : (
            <span className="flex items-center">
              Searching
              <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 "></Loader>
            </span>
          )}
        </button>
        {buttonState === "Pause" ? (
          <ScoreCard />
        ) : buttonState === "Search" ? (
          "Available Players"
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Driver;
