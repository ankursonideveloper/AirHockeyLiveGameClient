import React from "react";

const AvailablePlayers = ({ availablePlayers }) => {
  return (
    <div className="max-w-md mx-auto p-2 rounded-xl shadow-md bg-black">
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="player-select"
          className="block text-sm font-semibold text-white bg-black"
        >
          Select opponent to choose.
        </label>
        <select
          id="player-select"
          className="
            block w-full px-3 py-2 bg-white border border-gray-300 
            rounded-md shadow-sm placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          "
        >
          <option value="" disabled selected>
            Choose a player...
          </option>
          {availablePlayers.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AvailablePlayers;
