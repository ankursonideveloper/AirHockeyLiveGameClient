import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";
import ScoreCard from "./ScoreCard";
import Logout from "./Logout";

const LoginPage = () => {
  const navigate = useNavigate();
  const [pageType, setPagetype] = useState("Login");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [otp, setOtp] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisbledPasswordSetButton, setIsDisabledPasswordSetButton] =
    useState(true);

  const handleActionClick = (pageName) => {
    setErrorMessage(null);
    setPagetype(pageName);
  };

  const storeEmail = (email) => {
    setEmail(email);
  };

  const storePassword = (password) => {
    setPassword(password);
  };

  const storeOtp = (otp) => {
    setOtp(otp);
  };

  const storeConfirmPassword = (confirmpassword) => {
    setconfirmPassword(confirmpassword);
  };

  const handleRegister = async (email, password) => {
    setIsLoading(true);
    console.log(`${email} ${password}`);
    const loginData = { username: email, password: password };
    let res = await axios.post(
      "http://localhost:5000/api/auth/register",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "User saved") {
      setPagetype("Register OTP Verification");
      setIsLoading(false);
      setErrorMessage(null);
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleVerifyRegisterOTP = async (email, otp) => {
    setIsLoading(true);
    console.log(`${email} ${otp}`);
    const loginData = { username: email, otp: otp };

    let res = await axios.post(
      "http://localhost:5000/api/auth/verify-register",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "User Registered Successfully") {
      setPagetype("Login");
      setIsLoading(false);
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    console.log(`${email} ${password}`);
    const loginData = { username: email, password: password };
    let res = await axios.post(
      "http://localhost:5000/api/auth/login",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "Login successful") {
      localStorage.setItem("authToken", res.data.token);
      setIsLoading(false);
      navigate("/dashboard");
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (email) => {
    setIsLoading(true);
    console.log(`${email}`);
    const loginData = { username: email };
    let res = await axios.post(
      "http://localhost:5000/api/auth/forgot-password",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "OTP sent successfully") {
      setPagetype("OTP Verification");
      setIsLoading(false);
      setErrorMessage(null);
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleForgotPasswordOTP = async (email, otp) => {
    setIsLoading(true);
    console.log(`${email} ${otp}`);
    const loginData = { username: email, otp: otp };

    let res = await axios.post(
      "http://localhost:5000/api/auth/verify-forgot-password",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "OTP matches") {
      setPagetype("Create New Password");
      setErrorMessage(null);
      setIsLoading(false);
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleSetNewPassword = async (email, newpassword) => {
    setIsLoading(true);
    console.log(`${email} ${newpassword}`);
    const loginData = { username: email, password: newpassword };

    let res = await axios.post(
      "http://localhost:5000/api/auth/update-password",
      loginData,
      { validateStatus: () => true }
    );
    console.log(`Login Response: ${JSON.stringify(res, null, 2)}`);
    if (res.data.message === "Password Updated Successfully") {
      setPagetype("Login");
      setErrorMessage(null);
      setIsLoading(false);
    } else {
      setErrorMessage(res.data.message);
      setIsLoading(false);
    }
  };

  const handleResendForgotPasswordOTP = async (email) => {
    console.log(`${email}`);
    const loginData = { username: email };

    let res = await axios.post(
      "http://localhost:5000/api/auth/generate-forgot-password-otp",
      loginData,
      { validateStatus: () => true }
    );
    if (res.data.message === "OTP Sent successfully") {
      setSuccessMessage("OTP Sent successfully");
    } else {
      setErrorMessage(res.data.message);
    }
  };

  const validateconfirmPassword = (password, confirmPassword) => {
    if (pageType === "Create New Password") {
      if (!password && !confirmPassword) {
        setErrorMessage("Required both password");
        setIsDisabledPasswordSetButton(true);
      } else {
        if (password === confirmPassword) {
          setErrorMessage(null);
          setIsDisabledPasswordSetButton(false);
        } else {
          setErrorMessage("Password does not match");
          setIsDisabledPasswordSetButton(true);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <Logout />
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <div className="flex flex-row items-center gap-2 text-4xl md:text-5xl font-semibold">
          <span className="text-pink-500 [text-shadow:_0_0_2px_rgb(236_72_153_/_50%),_0_0_4px_rgb(236_72_153_/_50%),_0_0_7px_rgb(236_72_153_/_50%)]">
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
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}

            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none required "
                  onChange={(e) => {
                    storeEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storePassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full text-right -mt-4">
              <button
                type="button"
                className=" text-sm text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                onClick={() => handleActionClick("Forgot password?")}
              >
                Forgot password?
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className=" w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50 flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password);
                }}
              >
                Log In{" "}
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="text-sm text-slate-400 hover:text-white transition-colors"
                onClick={() => handleActionClick("Register")}
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
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storeEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full text-right -mt-5">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                onClick={() => handleActionClick("Login")}
              >
                Remember the password?{" "}
                <span className="font-semibold text-violet-400 hover:underline">
                  Login
                </span>
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50 flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPassword(email);
                }}
              >
                Submit
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {pageType === "Register" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Register
            </p>
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storeEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Set Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storePassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50 flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister(email, password);
                }}
              >
                Register{" "}
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="text-sm text-slate-400 hover:text-white transition-colors"
                onClick={() => handleActionClick("Login")}
              >
                Already have an account?{" "}
                <span className="font-semibold text-violet-400 hover:underline">
                  Login
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {pageType === "Register OTP Verification" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Verify OTP
            </p>
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Enter OTP
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storeOtp(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50 flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleVerifyRegisterOTP(email, otp);
                }}
              >
                Verify OTP
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {pageType === "OTP Verification" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Verify OTP
            </p>
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            {successMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {successMessage}
              </p>
            ) : null}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Enter OTP
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storeOtp(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50 flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPasswordOTP(email, otp);
                }}
              >
                Verify OTP
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Didn’t receive OTP?{" "}
                <span
                  className="font-semibold text-violet-400 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleResendForgotPasswordOTP(email);
                  }}
                >
                  Resend
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {pageType === "Create New Password" ? (
        <div className="w-full max-w-md rounded-lg border-2 border-violet-500 bg-gray-900/50 p-8 shadow-lg shadow-violet-500/20">
          <form className="flex w-full flex-col items-center gap-6">
            <p className="text-2xl font-semibold [text-shadow:_0_0_1px_#fff,_0_0_2px_#fff]">
              Create new password
            </p>
            {errorMessage ? (
              <p
                className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storePassword(e.target.value);
                    validateconfirmPassword(e.target.value, confirmPassword);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-slate-300">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-700 bg-slate-800/50 p-2 text-white transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
                  onChange={(e) => {
                    storeConfirmPassword(e.target.value);
                    validateconfirmPassword(password, e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={isDisbledPasswordSetButton}
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-sm hover:shadow-blue-500/50  flex flex-row justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleSetNewPassword(email, confirmPassword);
                }}
              >
                Save
                {isLoading ? (
                  <span>
                    <Loader className=" animate-spin w-6 h-6 text-green-400 ml-2 absolute" />
                  </span>
                ) : null}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default LoginPage;
