import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { VscArrowRight } from "react-icons/vsc";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      toast.success("Account created successfully");
      navigate("/login");
      setLoading(false)
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "An error occurred during registration.";
      toast.error(errorMessage);
      console.error("Registration error:", err);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="bg-[#0b0b0b] h-[96vh]">
      <Helmet>
        <title>NimbusNotes | SignUp</title>
      </Helmet>

      <div className="mt-8 flex items-center justify-center text-white">
        <div className="bg-[#141414] border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="flex items-center gap-1 mb-2 text-sm font-medium"
                htmlFor="name"
              >
                <FaRegUser />
                Name
              </label>
              <input
                className="w-full p-3 bg-[#0b0b0b] text-white rounded-md"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="flex items-center gap-1 mb-2 text-sm font-medium"
                htmlFor="email"
              >
                <IoMailOutline size={18} />
                Email
              </label>
              <input
                className="w-full p-3 bg-[#0b0b0b] text-white rounded-md"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="flex items-center gap-1 mb-2 text-sm font-medium"
                htmlFor="password"
              >
                <IoKeyOutline size={18} /> Password
              </label>
              <input
                className="w-full p-3 bg-[#0b0b0b] text-white rounded-md"
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
            <button
              className="w-full p-3 bg-white text-black rounded-md font-medium flex items-center gap-1 justify-center hover:bg-gray-300 disabled:opacity-10"
              type="submit"
              disabled={loading}
            >
            {loading? "please wait...":<>Sign Up <VscArrowRight /></>}  
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-[#dddddd]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-500 hover:text-indigo-700 font-medium text-base"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
