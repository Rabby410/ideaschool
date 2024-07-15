"use client";
import { FaBookOpen } from "react-icons/fa6";
import { FaArrowRight, FaFacebook, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Function to toggle mobile menu
  const handleNav = () => {
    setNav(!nav);
  };

  // State to manage sub-menu visibility in mobile menu
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const toggleSubMenu = (id) => {
    setSubMenuOpen(subMenuOpen === id ? null : id);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    {
      id: 2,
      text: "About us",
      link: "#",
      subMenu: [
        { id: 21, text: "Vision, Mission and Values", link: "#" },
        { id: 22, text: "Why choose us", link: "#" },
        { id: 23, text: "Principal Message", link: "#" },
        { id: 24, text: "Our Team", link: "#" },
        { id: 25, text: "Curriculum", link: "#" },
        { id: 26, text: "History", link: "#" },
        { id: 27, text: "Campus", link: "#" },
        { id: 28, text: "Upcoming Events", link: "#" },
        { id: 29, text: "Gallery", link: "#" },
      ],
    },
    {
      id: 3,
      text: "Admission",
      link: "#",
      subMenu: [
        { id: 31, text: "A brief admission Procedure", link: "#" },
        { id: 32, text: "Scholarship", link: "#" },
        { id: 33, text: "School fees", link: "#" },
        { id: 34, text: "Withdrawal Policy", link: "#" },
        { id: 35, text: "FAQ on Admissions", link: "#" },
        { id: 36, text: "How to Apply", link: "#" },
        { id: 37, text: "Apply Online", link: "#" },
        { id: 38, text: "Online Payment", link: "#" },
      ],
    },
    { id: 4, text: "Contact us", link: "/contact" },
    { id: 5, text: "Achievements", link: "/achivments" },
    { id: 6, text: "Key Information", link: "#" },
    { id: 7, text: "Policies", link: "#" },
    { id: 8, text: "Facilities", link: "#" },
    { id: 9, text: "Request For A Tour", link: "#" },
    { id: 10, text: "Login", link: "#" },
  ];

  return (
    <>
      <div className="mb-3 container mx-auto justify-between items-center md:flex px-5 hidden">
        <div className="flex justify-center items-center gap-4 hover:scale-110 transition-transform delay-75">
          <FaBookOpen className="text-8xl text-blue-700" />
          <Link href="/" className="w-full text-3xl font-bold text-blue-700">
            <div className="flex flex-col">
              <span>Idea-School</span>
              <span className="text-sm">Serving the purpose of study</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3 text-3xl">
          <div className="bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white text-xl rounded-full">DPS Portal</div>
          <div className="bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white text-xl rounded-full">Apply now</div>
          <div className="bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white  text-xl rounded-full flex justify-center items-center gap-3">Visit our School <FaArrowRight/></div>
          <FaFacebook className="hover:text-blue-500 hover:scale-110 transition-transform delay-75"/> 
          <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition-transform delay-75"/> 
          <FaInstagramSquare className="hover:text-blue-500 hover:scale-110 transition-transform delay-75"/> 
          <FaYoutube className="hover:text-blue-500 hover:scale-110 transition-transform delay-75"/>
        </div>
      </div>
      <div className="bg-blue-500 flex justify-end md:justify-center items-center h-10 md:py-8 px-5 text-white md:text-white text-xl font-semibold z-30">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-lg flex-wrap gap-5">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                href={item.link}
                className="p-2 hover:bg-blue-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black md:whitespace-nowrap"
              >
                {item.text}
              </Link>
              {/* Submenu for items with subMenu */}
              {item.subMenu && (
                <ul className="text-sm z-50 absolute hidden group-hover:block mt-1 bg-gray-900 text-white rounded-lg shadow-lg w-50 whitespace-nowrap">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.link}
                        className="block p-2 hover:bg-blue-500 hover:text-black"
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden z-50 ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-40"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-40"
          }
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <FaBookOpen className="text-4xl text-blue-700" />
            <h1 className="text-2xl font-bold text-blue-700">Idea-School</h1>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <Link
                href={item.link}
                className="block p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex justify-between items-center"
                onClick={() => item.subMenu && toggleSubMenu(item.id)}
              >
                <span>{item.text}</span>
                {item.subMenu && (
                  <span className="ml-2">
                    {subMenuOpen === item.id ? (
                      <AiOutlineMinus size={16} />
                    ) : (
                      <AiOutlinePlus size={16} />
                    )}
                  </span>
                )}
              </Link>
              {/* Submenu for items with subMenu */}
              {item.subMenu && subMenuOpen === item.id && (
                <ul className="ml-4">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.link}
                        className="block p-2 hover:bg-[#00df9a] hover:text-black"
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
