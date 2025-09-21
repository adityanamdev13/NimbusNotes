import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { VscArrowRight } from "react-icons/vsc";
import axios from "axios";
import { useAuth } from "../Context/auth";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); 


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/dashboard");
      } else {
        toast.error(res.data.message);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div>
       <Helmet>
       <title>NimbusNotes | Login</title>
      </Helmet>

      <div className="mt-8 flex items-center justify-center text-white mb-8">
        <div className="bg-[#141414] border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center ">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className=" flex items-center gap-1 mb-2 text-sm font-medium"
                htmlFor="email"
              >
                <IoMailOutline size={18} />
                Email
              </label>
              <input
                className="w-full p-3 bg-[#0b0b0b] text-white rounded-md "
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
                className="w-full p-3 bg-[#0b0b0b] text-white rounded-md  "
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
              className="w-full p-3 bg-white text-black rounded-md font-medium  flex items-center gap-1 justify-center hover:bg-gray-300 disabled:opacity-10 "
              type="submit"
              disabled={loading}
            >
            {loading?"please wait...":<>Login <VscArrowRight /></>}  
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-[#dddddd]">
                New User?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-500 hover:text-indigo-700 font-medium text-base"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
