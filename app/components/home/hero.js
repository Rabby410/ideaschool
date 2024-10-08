
import React from "react";
import Header from "../layouts/header";
import { FaBookOpen } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="bg-[#1d1d24]">
        <div className="bg-[url('/images/home/hero/image.jpg')] bg-no-repeat bg-cover bg-[100%]">
          <Header />
          <div className="container mx-auto py-40 px-5">
            <div>
              <h3 className="px-5 md:px-0 text-2xl md:text-4xl md:w-[40%] text-white font-semibold ">
                One School Serving the Purposes of Here & Hereafter
              </h3>
              <div className="flex gap-2">
                <span className="text-red-500 text-4xl">___</span>
                <span className="text-gray-500 text-4xl">___</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
