import React from "react";
import { FaCloud, FaLock, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import NavigateToMyProfile from "../Components/NavigateToMyProfile";
import Feature from "../Components/Feature";
import { Helmet } from 'react-helmet';

const AboutPage = () => {


  return (
    <div className="bg-[#141414] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
       <Helmet>
        <title>NimbusNotes | About</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12 border-b border-gray-800 pb-3">
          About - NimbusNotes
        </h1>

        <div className="mb-12 ">
          <p className="text-lg mb-6">
            Welcome to NimbusNotes, your secure cloud-based note-taking
            solution. Created by Aditya Namdev, NimbusNotes offers a seamless
            and safe way to store and access your thoughts, ideas, and important
            information from anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Feature
              icon={<FaCloud className="text-blue-400" />}
              title="Cloud Storage"
              description="Access your notes from any device, anytime, anywhere."
            />
            <Feature
              icon={<FaLock className="text-green-400" />}
              title="Secure"
              description="Your data is encrypted and protected with industry-standard security measures."
            />
            <Feature
              icon={<FaUserPlus className="text-purple-400" />}
              title="Easy Sign Up"
              description="Create your account in seconds and start taking notes immediately."
            />
            <Feature
              icon={<FaSignInAlt className="text-red-400" />}
              title="Quick Login"
              description="Seamless login process for returning users."
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <h2 className="text-3xl font-semibold text-white mb-8">
            About the Creator
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border p-4 rounded-lg border-gray-800">
            <div className="w-64 h-64 bg-gray-800 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dwanfti2a/image/upload/v1720115532/vectorartADITYA_NAMDEV_hmyiiz.jpg"
                alt="Aditya Namdev"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-center md:text-start">
                Aditya Namdev
              </h3>
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with a keen interest in
                creating user-friendly and innovative web applications. With
                NimbusNotes, I aim to provide a reliable and secure platform for
                users to organize their thoughts and ideas in the cloud.
              </p>
              <p className="text-lg mb-4">
                My expertise includes React, Node.js, and cloud technologies.
                I'm constantly learning and exploring new ways to improve user
                experiences and application performance.
              </p>

              <div className="flex gap-4 border-t p-4  border-gray-800">
                <NavigateToMyProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
