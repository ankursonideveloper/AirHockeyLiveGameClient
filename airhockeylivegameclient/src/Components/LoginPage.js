import React, { useState } from "react";

const LoginPage = () => {
  const [pageType, setPagetype] = useState("Login");

  const handleActionClick = (pageName) => {
    setPagetype(pageName);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <div className="flex flex-row items-center gap-2 text-4xl md:text-5xl font-semibold">
          <span className="text-pink-500 [text-shadow:_0_0_2px_rgb(236_72_153_/_50%),_0_0_4px_rgb(236_72_153_/_50%)]">
            NEON
          </span>
          <span className="text-[#21c9ff] [text-shadow:_0_0_2px_rgb(33_201_255_/_50%),_0_0_4px_rgb(33_201_255_/_50%)]">
            PONG
          </span>
        </div>
        <p className="text-[#b0b6f5] text-lg md:text-xl">
          Play. Compete. Climb the leaderboard.
        </p>
      </div>
      {pageType === "Login" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Login
            </p>
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full text-right">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                onClick={() => handleActionClick("Forgot password?")}
              >
                Forgot password?
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50"
              >
                Log In
              </button>
              <button
                type="button"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Don't have an account?{" "}
                <span className="font-semibold text-violet-400 hover:underline">
                  Register
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {pageType === "Forgot password?" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Forgot Password
            </p>
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full text-right">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                onClick={() => handleActionClick("Login")}
              >
                Login
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default LoginPage;
