import React from "react";
import { FaHome, FaInfoCircle, FaPhone, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/");
  }; 

  return (
    <div className="bg-[#0b0b0b] text-white">
      <div className=" flex  justify-between items-center px-4 py-2 border-b border-gray-700">
        <Link
          to="/"
          className="text-2xl  md:text-3xl p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 "
        >
          NimbusNotes
        </Link>
        <div className="flex space-x-4">
          {auth?.user ? (
            <>
              <span className="py-2 px-4 ">
                Hi , {auth.user.name.split(" ")[0]}
              </span>
              <button
                className="bg-white text-black font-semibold md:py-2 px-3 h-[40px]  rounded hover:bg-gray-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-around items-center px-4 py-2 border-b border-gray-800">
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaUser />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaInfoCircle />
            <span>About</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaPhone className="rotate-90" />
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
