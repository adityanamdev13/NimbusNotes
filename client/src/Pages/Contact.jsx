import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { VscArrowRight } from "react-icons/vsc";
import { Helmet } from 'react-helmet';
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //I DON'T HANDLE CONTACTING  IF YOU WANT THEN ADD YOUR LOGIC 
    toast.success("Thanks for Contacting us! We will contact you soon.")

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#141414] py-9 px
    -4 sm:px-6 lg:px-8 text-gray-300 ">
       <Helmet>
       <title>NimbusNotes | Contact us </title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center pb-3 text-white mb-10 border-b border-gray-800 ">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border p-6 border-gray-800 rounded-lg ">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h2>
            <p className="mb-6">
              We'd love to hear from you. Please fill out the form below or use
              our contact information to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <span>mrnamdev1372000@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 rotate-90" />
                <span>+91 8120544147</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 mr-3" />
                <span>Ujjain ,Madhya Pradesh</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6  ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md  p-2 bg-[#0b0b0b] border-gray-700 "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block p-2 w-full rounded-md bg-[#0b0b0b]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-[#0b0b0b] border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md  gap-1 text-sm font-medium  bg-white text-black hover:bg-gray-300 "
              >
                Send Message <VscArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
