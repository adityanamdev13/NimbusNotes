import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const NavigateToMyProfile = () => {
  return (
    <>
      <Link
        to="https://github.com/adityaNamdev"
        target="_blank"
        className="  hover:text-blue-400 "
      >
        <FaGithub size="1.5em" />
      </Link>

      <Link
        to="https://www.linkedin.com/in/adityanamdev-13july2000"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaLinkedin size="1.5em" />
      </Link>
      <Link to="https://www.facebook.com/aditya.namdev.1420" target="_blank" className="hover:text-blue-400">
        <FaFacebook size="1.5em" />
      </Link>
      <Link to="https://x.com/?lang=en" target="_blank" className="hover:text-blue-400">
        <FaTwitter size="1.5em" />
      </Link>
      <Link to="https://www.instagram.com/____aditya.namdev/" target="_blank" className="hover:text-blue-400">
        <FaInstagram size="1.5em" />
      </Link>
    </>
  );
};

export default NavigateToMyProfile;
