import React from "react";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto justify-center items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-between px-5 py-5">
            <div>
              <p className="text-md font-semibold leading-5 mb-5">
                Learn. Play. Explore
              </p>
              <h3 className="text-xl md:text-7xl text-blue-500 font-bold mb-5">
                A safe and joyful place for your lovely children
              </h3>
              <p className="text-md">
                Assalamu Alaikum! Welcome to Reverie School, where academic
                excellence meets moral values. Located at Bashundhara
                Residential Area in Dhaka, our English medium institution offers
                a holistic education, nurturing students to thrive academically
                and spiritually. Join us for a journey of learning and
                enlightenment.
              </p>
              <div className="flex flex-wrap justify-between items-center gap-10 mt-5">
                <span className="bg-blue-500 text-lg text-white hover:scale-110 px-5 py-3 rounded-full">
                  Enroll Your Kid
                </span>
                <div>
                  *****
                  <br />
                  4.8 on Google
                </div>
              </div>
              <div className="flex gap-5 items-center mt-5">
                <div className="rounded-full px-4 py-4 bg-yellow-400 flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <p className="text-gray-600">+(000) 000 0000 000</p>
              </div>
            </div>
            <div>
                <img src="./images/home/banner/b1.jpg" alt="banner1" className="rounded-2xl h-[400px]"/>
                <img src="./images/home/banner/b2.jpg" alt="banner2" className="rounded-2xl h-[400px] lg:-mt-[280px] lg:ml-[285px]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
