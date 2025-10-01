import React from "react";
import Logout from "./Logout";

const Navigation = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center rounded-lg border-2 border-violet-500 p-1 gap-2">
      <div></div>

      <div className="flex flex-row items-center justify-center gap-2 text-2xl font-semibold">
        <span className="text-pink-500 [text-shadow:_0_0_2px_rgb(236_72_153_/_50%),_0_0_4px_rgb(236_72_153_/_50%),_0_0_7px_rgb(236_72_153_/_50%)]">
          NEON
        </span>
        <span className="text-[#21c9ff] [text-shadow:_0_0_2px_rgb(33_201_255_/_50%),_0_0_4px_rgb(33_201_255_/_50%)]">
          PONG
        </span>
      </div>

      <div className="justify-self-center sm:justify-self-end">
        <Logout />
      </div>
    </div>
  );
};

export default Navigation;
