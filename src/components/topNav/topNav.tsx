"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo1 from "./../../../public/logo1.png";

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <Link href="/">
            <div className=" rounded-full h-14 w-14 mx-4 ">
              <Image src={logo1} alt="logo" width={500} height={500} />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h26M4 12h26M4 18h26"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } hidden md:flex space-x-4 md:space-x-8 md:items-center mr-10`}
        >
          <li className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className="text-white hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-xl font-sans"
            >
              Home
            </Link>
          </li>
          <li className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/Blog"
              className="text-white hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-xl font-sans"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>
            <Link href="/" className="block text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="block text-gray-300 hover:text-white">
              Blog
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default TopNav;
