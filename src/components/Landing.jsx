import { Navbar } from "./Navbar";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { useState, useContext, useEffect } from "react";
import share from "../assets/easy_share.svg";
import record from "../assets/record-circle.svg";
import revisit from "../assets/revisit.svg";
// import steps from "../assets/how_it_works.png";
import features from "../assets/video-repository.png";
import steps from "../assets/steps.svg";
import womanblue from "../assets/woman_blue.svg";
import womanorange from "../assets/woman_orange.svg";
import man from "../assets/father_son.svg";

export const Landing = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <div className="flex flex-col mt-20 gap-10">
        <Hero />
        <Features />
        <Works />
      </div>
      <Footer />
    </div>
  );
};

// HERO
export const Hero = () => {
  return (
    <div className=" bg-white md:px-8 py-10">
      <div className="p-4 sm:p-14 sm:pt-10 sm:py-16 flex flex-col sm:flex-row justify-between gap-6 items-center h-full">
        <div className=" flex flex-col gap-8 sm:w-[45%]">
          <h1 className="font-bold text-[3.89rem] leading-[4.105625rem] tracking-wide text-[#08051e]">
            Show Them Don't Just Tell
          </h1>
          <p className="sm:w-[85%]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text={"Install HelpMeOut →"}
              customClassName="bg-[#08051e] text-[0.9rem] p-2  sm:px-4 text-white sm:p-3 rounded-lg"
            />
          </div>
        </div>
        <div className="sm:w-[50%]">
          <div className="flex flex-row gap-4 items-center w-full justify-end">
            <div className="flex flex-col gap-4 items-stretch">
              <img src={womanblue} className="rounded-lg" />
              <img src={man} className="rounded-lg" />
            </div>
            <div>
              <img src={womanorange} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FEATURES
export const Features = () => {
  return (
    <div className=" bg-white flex flex-col py-14 md:px-8">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[2rem] text-[#08051e]">Features</h1>
        <p className="">Key Highlights of Our Extension</p>
      </div>
      <div className="p-4 sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 items-center h-full">
        <div className="flex flex-col gap-10">
          <Feature
            img={record}
            title="              Simple Screen Recording"
            details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
          />
          <Feature
            img={share}
            title="              Simple Screen Recording"
            details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
          />
          <Feature
            img={revisit}
            title="              Simple Screen Recording"
            details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
          />
        </div>
        <div className="sm:w-[40%]">
          <img src={features} className="" />
        </div>
      </div>
    </div>
  );
};

// HOW IT WORKS
export const Works = () => {
  return (
    <div className=" bg-white flex flex-col py-14 md:px-8">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[2rem] text-[#08051e]">How it Works</h1>
      </div>
      <div className="p-4 sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-8 items-center h-full text-center">
        <Steps
          num={1}
          title="              Record Screen"
          details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
        />
        <Steps
          num={2}
          title="              Share Your Recording"
          details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
        />
        <Steps
          num={3}
          title="              Learn Effortlessly"
          details=" Help your friends and loved ones by creating and sending videos on
              how to get things done on a website"
        />
      </div>
    </div>
  );
};

// FEATURE CARDS
const Feature = ({ title, img, details }) => {
  return (
    <div className="flex flex-row items-start gap-5 ">
      <img src={img} className="bg-[#413c6d] p-2 rounded-full" />
      <div className=" flex flex-col gap-1 sm:w-[50%]">
        <h1 className="font-[500] text-[1.4rem] text-[#08051e]">{title}</h1>
        <p className="">{details}</p>
      </div>
    </div>
  );
};

// STEPS CARD
const Steps = ({ title, img, details, num }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p className="bg-[#08051e] rounded-full py-2 px-4 text-white text-bold">
        {num}
      </p>
      <div className="">
        <h1 className="font-[500] text-[1.4rem] text-[#08051e]">{title}</h1>
        <p className="">{details}</p>
      </div>
      <img src={steps} />
    </div>
  );
};
