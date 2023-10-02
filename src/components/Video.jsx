import { Header } from "./Header";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { useState, useContext, useEffect } from "react";

export const Video = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex flex-col mt-16 gap-10">
        <Hero />
      </div>
    </div>
  );
};

// HERO
export const Hero = () => {
  return (
    <div className=" bg-white mt-20 pt-20">
      <div className="p-4 sm:p-14 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 items-center h-full">
        <div className=" flex flex-col gap-8 sm:w-[50%]">
          <h4 className="font-bold text-[#08051e]">Recent files</h4>
          <div className="grid md:grid-col-2"></div>
        </div>
      </div>
    </div>
  );
};
