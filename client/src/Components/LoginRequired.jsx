import React from "react";
import { FaLock, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginRequired = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex  justify-center text-white m-10">
      <div className="bg-[#141414] p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center mb-6">
          <FaLock className="text-6xl mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Login Required</h1>
          <p className="text-gray-600 mt-2">
            Please log in to access the dashboard and your notes.
          </p>
        </div>
        <button className="w-full bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-lg  transition duration-300 flex items-center justify-center font-semibold " onClick={() => navigate("/login")}>
          <FaSignInAlt className="mr-2" />
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default LoginRequired;