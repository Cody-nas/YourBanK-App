import React, { useState } from "react";
import Logo from "../assets/Logo.png";
// react icons
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
    { name: "Security", path: "/security" },
  ];

  return (
    <nav className=" bg-zinc-900  md:px-14 p-1.5 max-w-screen-xl border rounded-full mx-auto fixed top-6 right-0 left-0 z-50">
      <div className="text-sm container mx-auto flex justify-between items-center font-sm">
        <div className="flex space-x-4 md:space-x-14 items-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-1.5">
            <img src={Logo} alt="Logo" className="w-5 h-5" />
            <span className="text-sm pr-12">YourBanK</span>
          </a>
        </div>
        {/* Desktop Navigation Items */}
        <div>
          <ul className="hidden md:flex lg:space-x-8 lg:mx-[160]">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="block cursor-pointer hover:text-gray-500 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex space-x-6 lg:space-x-2 items-center">
          <button className="flex items-center justify-center space-x-2 py-1 px-4 transition-all duration-300 rounded-2xl hover:bg-space-cadet hover:text-white">
            <span className="text-sm">Sign Up</span>
          </button>
          <button className="bg-grn flex items-center space-x-2 py-0.5 px-4 text-black text-sm md:text-base font-medium transition-all duration-300 rounded-2xl hover:bg-slate-grey">
            <span className="text-sm">Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center border bg-grn border-grn rounded-full px-1 py-1 mr-0.5">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-sm"
          >
            {isMenuOpen ? (
              <FaTimes className="w-4 h-4 text-black" />
            ) : (
              <FaBars className="w-4 h-4 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className=" bg-black absolute top-14 right-0 left-0 border-t text-grn border-gray-200 shadow-lg p-6 md:hidden">
          <ul className="space-y-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block text-grn hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col space-y-4">
            <button className="border py-2 px-4 text-center rounded-full">
              Sign Up
            </button>
            <button className="border py-2 px-4 text-white text-center rounded-full">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
