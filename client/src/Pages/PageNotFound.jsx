import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-white mx-5">
       <Helmet>
       <title>NimbusNotes | Page Not Found</title>
      </Helmet>

      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-xl mb-6">
          The page you are looking for does not exist.
        </p>
       
          <Link
            to="/"
            className="flex items-center justify-center text-blue-700 hover:underline"
          >
            <FaHome className="mr-2" /> Go To Home
          </Link>

      </div>
    </div>
  );
};

export default PageNotFound;
