import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/help_logo.svg";

export const Header = () => {
  return (
    <div className="flex flex-col justify-between gap-10 p-3 sm:py-10 sm:px-20 bg-white fixed left-0 right-0 top-0 w-full z-10 shadow ">
      <div className="flex justify-between items-cente">
        <div className="font-bold py-2 flex flex-row gap-2 items-center">
          <img src={logo} className="w-10 rounded-full" />
          <p className=" text-[#08051e] font-bold">HelpMeOut</p>
        </div>
        <p>John Mark</p>
      </div>
      <div>
        <div>
          <h1 className="font-bold text-[1.8rem] text-[#08051e]">
            Hello, John Mark
          </h1>
          <p>Here are your recorded videos</p>
        </div>
      </div>
    </div>
  );
};
