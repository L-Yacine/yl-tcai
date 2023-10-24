import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="flex items-center">
          <a
            href="https://www.mywebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-4 text-white hover:text-gray-300"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold text-white">
              My Project
            </span>
          </a>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/myname"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-white hover:text-gray-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/myname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="mt-4 text-sm text-white md:mt-0">
          © 2023 My Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
