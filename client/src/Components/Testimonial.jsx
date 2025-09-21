import React from "react";

const Testimonial = ({ quote, author }) => (
  <blockquote className="bg-[#141414] p-6 rounded-lg ">
    <p className="mb-4">"{quote}"</p>
    <footer className="font-bold">- {author}</footer>
  </blockquote>
);

export default Testimonial;
