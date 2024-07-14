"use client";
import { FaBookOpen } from "react-icons/fa6";
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

  // Function to toggle sub-menu visibility in mobile menu
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    {
      id: 2,
      text: "About us",
      link: "",
      subMenu: [
        { id: 21, text: "Vision, Mission and Values", link: "/vmv" },
        { id: 22, text: "Why choose us", link: "/" },
        { id: 22, text: "Principal Message", link: "/" },
        { id: 22, text: "Our Team", link: "/" },
        { id: 22, text: "Curriculum", link: "/" },
        { id: 22, text: "History", link: "/" },
        { id: 22, text: "Campus", link: "/" },
        { id: 22, text: "Upcoming Events", link: "/" },
        { id: 22, text: "Gallery", link: "/" },
      ],
    },
    { id: 3, text: "About", link: "/about" },
    {
      id: 4,
      text: "Pages",
      link: "",
      subMenu: [
        { id: 23, text: "Blog List", link: "/blog" },
        { id: 24, text: "Blog Details", link: "/blog/blog-details" },
      ],
    },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center h-32 container mx-auto px-3 md:py-5 text-white md:text-white text-xl font-semibold z-50">
      {/* Logo */}
      <div className="flex justify-center items-center gap-4 hover:scale-110 transition-transform delay-75">
        <FaBookOpen className="text-8xl" />
        <Link href="/" className="w-full text-3xl font-bold text-blue-700">
          <div className="flex flex-col">
            <span>Idea-School</span>
            <span className="text-sm">Serving the purpose of study</span>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-lg">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              href={item.link}
              className="p-4 hover:bg-blue-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black md:whitespace-nowrap"
            >
              {item.text}
            </Link>
            {/* Submenu for Services */}
            {item.subMenu && (
              <ul className="text-sm md:mt-3 md:ml-2 absolute hidden group-hover:block mt-1 bg-gray-900 text-white rounded-lg shadow-lg w-50 whitespace-nowrap">
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
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-red-500 m-4">IDark.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <Link
              href={item.link}
              className="block p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex justify-between items-center"
              onClick={() => item.subMenu && toggleSubMenu()}
            >
              <span>{item.text}</span>
              {item.subMenu && (
                <span className="ml-2">
                  {subMenuOpen ? (
                    <AiOutlineMinus size={16} />
                  ) : (
                    <AiOutlinePlus size={16} />
                  )}
                </span>
              )}
            </Link>
            {/* Submenu for Services */}
            {item.subMenu && subMenuOpen && (
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
  );
};

export default Navbar;
