import React, { useState } from "react";
import { useAuth } from "../Context/auth";
import LoginRequired from "../Components/LoginRequired";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CreateNote from "../Components/CreateNote";
import AllNotes from "../Components/AllNotes";
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

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

  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };


  return (
    <div>
       <Helmet>
       <title>NimbusNotes | Dashboard</title>
      </Helmet>

      {!auth.user ? (
        <LoginRequired />
      ) : (
        <>
          <div className="min-h-screen bg-[#0b0b0b] text-white flex relative ">
            <div className="hidden  md:block w-64 bg-[#141414] p-4">
              <div className=" mb-5">
                <h1 className="text-3xl font-bold mb-6 text-center  border-b border-gray-800 pb-3">
                  Profile
                </h1>
                <div className="flex justify-center mb-1">
                  <FaUserCircle size={60} />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold">{auth.user.name}</h2>
                  <p className="text-sm">{auth.user.email}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-1 px-4 rounded-full text-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="flex-1 p-6">
              <CreateNote  triggerRefresh={triggerRefresh} />
              <div>
                <h2 className="text-xl font-semibold mb-8  border-b border-gray-800 pb-3">All Notes</h2>
              <AllNotes refresh={refresh} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
