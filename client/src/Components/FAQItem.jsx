import React from 'react'

const FAQItem = ({ question, answer }) => (
    <div className="p-6 bg-[#141414] rounded-lg shadow-lg transition-transform transform hover:scale-105 m-10">
      <h4 className="text-xl font-bold mb-2 text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {question}
      </h4>
      <p className="text-gray-300">{answer}</p>
    </div>
  );

export default FAQItem;
