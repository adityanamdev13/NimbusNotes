const Feature = ({ icon, title, description }) => {
    return (
      <div className="flex items-start border p-4 rounded-lg border-gray-800 shadow-lg transition-transform transform hover:scale-105 ">
        <div className="flex-shrink-0 text-2xl mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <p className="mt-1 text-gray-400">{description}</p>
        </div>
      </div>
    );
  };


  export default Feature;