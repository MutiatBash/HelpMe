// import Logo from "../assets/svg/logo_white.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-full h-full sm:px-16 py-20 bg-[#100a42]">
      <div className="flex flex-row flex-wrap sm:flex-nowrap md:flex-row items-center justify-between">
        {/* <div><img src={Logo} alt="" /></div> */}
        <div className="flex flex-col text-white gap-4">
          <p className="font-[600]">Menu</p>
          <ul className="text-[0.8rem] flex flex-col gap-4">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link>Converter</Link>
            </li>
            <li>
              <Link>How it Works</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white gap-4">
          <p className="font-[600]">About us</p>
          <ul className="text-[0.8rem] flex flex-col gap-4">
            <li>
              <Link to="/home">About</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white gap-4">
          <p className="font-[600]">Screen Record</p>
          <ul className="text-[0.8rem] flex flex-col gap-4">
            <li>
              <Link to="/home">Browser Window</Link>
            </li>
            <li>
              <Link>Desktop</Link>
            </li>
            <li>
              <Link>Application</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
