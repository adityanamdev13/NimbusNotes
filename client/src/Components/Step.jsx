import React from 'react'

const Step = ({ number, title, description }) => (
    <div className="text-center">
      <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );

export default Step
