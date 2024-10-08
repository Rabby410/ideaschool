'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBuildingUser, FaUserGraduate, FaSchool, FaArrowRight } from "react-icons/fa6";
import { BsClipboardData, BsPeopleFill, BsBuildingsFill } from "react-icons/bs";
import dynamic from "next/dynamic"; // Use dynamic import for react-odometerjs

// Dynamic import of Odometer component
const Odometer = dynamic(() => import("react-odometerjs"), { ssr: false });

const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // State variables for counts
  const [teachersCount, setTeachersCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState(0);
  const [branchesCount, setBranchesCount] = useState(0);
  const [campusesCount, setCampusesCount] = useState(0);

  useEffect(() => {
    // Simulate counting effect when section becomes visible
    if (isVisible) {
      // You can replace these with actual fetching logic if needed
      setTimeout(() => setTeachersCount(210), 500);
      setTimeout(() => setStudentsCount(4000), 1000);
      setTimeout(() => setStaffsCount(120), 1500);
      setTimeout(() => setBranchesCount(3), 2000);
      setTimeout(() => setCampusesCount(9), 2500);
    }
  }, [isVisible]);

  useEffect(() => {
    // Import CSS file dynamically on client side
    if (typeof window !== 'undefined') {
      import("odometer/themes/odometer-theme-default.css");
    }
  }, []);

  return (
    <>
      <div ref={sectionRef} className="pt-20 bg-[url('/images/home/about/banner.jpg')] bg-cover bg-no-repeat">
        <div className="bg-gradient-to-b from-transparent to-black">
          <div className="container mx-auto px-5 justify-center items-center">
            <p className="text-md font-semibold leading-5 mb-5 text-white">About us</p>
            <h3 className="text-xl md:text-3xl text-white font-bold mb-5">
              History of our School
            </h3>
            <p className="text-md text-white w-[60%]">
              The Averroes International School is recognized by the Bangladesh
              Ministry of Education and authorized by British Council and Edexcel
              as an English-medium educational institution for both Primary and
              Secondary Sections. The school established in 2015 is situated at
              Lalmatia, Mohammadpur in Dhaka. The School, surrounded by peaceful
              environment, which gives pleasures to children, offers education
              from Play to A Level.{" "}
              <Link href="" className="text-blue-500 underline">
                Read More
              </Link>
            </p>

            <div className="flex flex-wrap gap-32 py-20">
              <div className="text-white">
                <FaBuildingUser className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">2015</h3>
                <p>Founded</p>
              </div>
              <div className="text-white">
                <BsClipboardData className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">
                  <Odometer value={teachersCount} format="(,ddd)" />+
                </h3>
                <p>Teachers</p>
              </div>
              <div className="text-white">
                <FaUserGraduate className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">
                  <Odometer value={studentsCount} format="(,ddd)" />+
                </h3>
                <p>Students</p>
              </div>
              <div className="text-white">
                <BsPeopleFill className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">
                  <Odometer value={staffsCount} format="(,ddd)" />+
                </h3>
                <p>Staffs</p>
              </div>
              <div className="text-white">
                <BsBuildingsFill className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">
                  <Odometer value={branchesCount} format="(,ddd)" />+
                </h3>
                <p>Branches</p>
              </div>
              <div className="text-white">
                <FaSchool className="text-7xl mb-3" />
                <h3 className="text-3xl font-bold text-blue-300 mb-2">
                  <Odometer value={campusesCount} format="(,ddd)" />+
                </h3>
                <p>Campuses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-14 max-w-5xl mx-auto">
        <div className="py-10 bg-blue-400 text-white px-5 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <h3 className="text-3xl font-semibold text-center md:text-left mb-2 md:mb-0">Start your Beautiful & Bright Future From Here</h3>
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-4 rounded-lg transition-colors duration-300 hover:scale-105 hover:transition-transform">
              Apply Now <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
