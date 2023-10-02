import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/help_logo.svg";

export const Navbar = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 sm:py-3 sm:px-20 bg-white fixed left-0 right-0 top-0 w-full z-10 shadow">
      <div className="font-bold py-2 flex flex-row gap-2 items-center">
        <img src={logo} className="w-10 rounded-full" />
        <p className=" text-[#08051e] font-bold">HelpMeOut</p>
      </div>
      <div>
        <ul className="flex flex-row gap-6 text-[#08051e]">
          <li>
            <Link to="#features">Features</Link>
          </li>
          <li>
            <Link to="#steps">How it Works</Link>
          </li>
        </ul>
      </div>
      <p>
        <Link
          to="/signup"
          className="cursor-pointer font-[600] hover:text-[#08051e] text-[0.8rem] sm:text-base"
        >
          Get Started
        </Link>
      </p>
    </div>
  );
};
