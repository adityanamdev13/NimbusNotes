import React from "react";
import { Link } from "react-router-dom";
import NavigateToMyProfile from "./NavigateToMyProfile";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-6 text-center">
            <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
              NimbusNotes
            </Link>
            <p className="mt-2 text-gray-400">
              Your go-to app for note-taking and organizing your thoughts.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 ">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            &nbsp; &nbsp; &nbsp;/
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
            &nbsp; &nbsp; &nbsp;/
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
           <NavigateToMyProfile/>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} NimbusNotes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
