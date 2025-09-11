import React from "react";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center w-7/12">
      <div>
        <p>NEON PONG</p>
        <p>Play. Compete. Climb the leaderboard</p>
      </div>
      <div>
        <form>
          <p>Login</p>
          <div>
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="text"></input>
          </div>
          <p>Forgot password?</p>
          <div>
            <button>Log In</button>
            <p>Don't have an account? Register</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
