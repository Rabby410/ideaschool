import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const JoinNetwork = () => {
  return (
    <div className="-mt-14 max-w-5xl mx-auto">
      <div className="py-10 bg-blue-400 text-white px-5 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <h3 className="text-3xl font-semibold text-center md:text-left mb-2 md:mb-0">Join IdeaSchool Alumni Network</h3>
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-4 rounded-lg transition-colors duration-300 hover:scale-105 hover:transition-transform">
            Register Now <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNetwork;
