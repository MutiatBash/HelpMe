import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/help_logo.svg";
import facebook from "../assets/facebook.svg";
// import { ThreeCircles, Oval } from "react-loader-spinner";

export const SignUp = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // SIGNIN USER
  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
    } else {
      setError("");
    }
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="p-2 sm:py-8 sm:px-24 mx-auto flex flex-col justify-center items-center my-auto min-w-[93%] sm:min-w-[70%] md:min-w-[60%]">
      <div className="font-bold flex flex-row gap-2 items-center self-start py-3">
        <img src={logo} className="w-10 rounded-full" />
        <p className=" text-[#08051e] font-bold">HelpMeOut</p>
      </div>
      <div className=" w-[100%] sm:w-[80%] md:w-[55%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
        <h1 className="text-center font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
          Log in or Sign Up
        </h1>
        <p className="text-center pb-3">
          Join millions of others in sharing successful moves on
          <span className="font-[500]"> HelpMeOut</span>
        </p>
        <div className="w-full flex flex-col gap-4 sm:gap-7 my-2">
          <Button
            src={facebook}
            customClassName="bg-white border flex flex-row gap-5 justify-center items-center font-[500] sm:border-2 border-[#08051e] text-[#08051e] p-2 sm:p-3 w-full rounded-lg sm:rounded-xl sm:font-bold"
            text="Continue with Google"
          />
          <Button
            src={facebook}
            customClassName="bg-white border flex flex-row gap-5 justify-center items-center font-[500] sm:border-2 border-[#08051e] text-[#08051e] p-2 sm:p-3 w-full rounded-lg sm:rounded-xl sm:font-bold"
            text="Continue with Facebook"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-[100%] sm:w-[80%] md:w-[55%]  sm:px-12 py-3 sm:py-6 gap-2">
        <hr className=" w-full"></hr>
        <p>or</p>
        <hr className=" w-full"></hr>
      </div>
      <form className="flex bg-white flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full  justify-between sm:w-[80%] md:w-[55%]">
        {error && error ? (
          <span className="text-red-600 text-xs">{error}</span>
        ) : (
          ""
        )}
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Email</label>
          <input
            placeholder="Enter your email address"
            className="border rounded-lg sm:rounded-xl p-2 sm:p-3 w-full focus:outline-none focus:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Password</label>
          <input
            placeholder="Password"
            className="border rounded-lg sm:rounded-xl p-2 sm:p-3 w-full focus:outline-none focus:border-gray-600"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full py-2 text-center flex flex-col gap-3">
          <Button
            customClassName="bg-[#08051e] text-white p-2 sm:p-3 w-full rounded-lg sm:rounded-xl"
            text="Sign Up"
          />
          <p className="text-center pt-1">
            Don't have an account?
            <Link
              className="text-[#08051e] hover:text-[#08051e] font-[600] hover:font-bold px-1"
              to="/"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
