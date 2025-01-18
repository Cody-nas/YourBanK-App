import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
    { name: "Security", path: "/security" },
  ];

  return (
    <footer>
      <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <div className="flex space-x-4 md:space-x-14 justify-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-1.5">
            <img src={Logo} alt="Logo" className="w-5 h-5" />
            <span className="text-sm ">YourBanK</span>
          </a>
        </div>

        <div className='flex my-6 space-x-4 md:space-x-14 justify-center'>
          <ul className=" space-x-4 flex lg:space-x-6">
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

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center my-8 justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <MdEmail className="text-grn" />
            <span>hello@skillbirdge.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPhone className="text-grn" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-grn" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className='flex space-x-2'>
            <IoLogoFacebook className="text-grn w-6 h-6 cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="text-grn w-6 h-6 cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="text-grn w-6 h-6 cursor-pointer hover:text-gray-400" />
          </div>

          {/* Copyright */}
          <h2 className='text-gray-300'>
            YourBank All Rights Reserved
          </h2>

          {/* Privacy Policy and Terms */}
          <div className="flex space-x-2">
            <a href="#privacy" className="hover:text-grn transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-grn transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;