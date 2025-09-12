import React from "react";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center w-7/12 gap-3 bg-black">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-1">
          <span className="text-pink-400">NEON</span>
          <span className="text-[#21c9ff]">PONG</span>
        </div>
        <p className="text-[#b0b6f5]">Play. Compete. Climb the leaderboard</p>
      </div>
      <div className=" border-s-violet-500 rounded-md border-3 text-white">
        <form className="flex flex-col items-center gap-1">
          <p>Login</p>
          <div>
            <div className=" flex flex-col">
              <label>Email</label>
              <input type="text"></input>
            </div>
            <div className=" flex flex-col">
              <label>Password</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="flex flex-col ml-12 ">
            <p>Forgot password?</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button>Log In</button>
            <p>Don't have an account? Register</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
