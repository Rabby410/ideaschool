import React from 'react';

const AchivmentPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["a1.avif", "a2.jpeg", "a3.webp","a4.jpeg"].map((image, index) => (
          <div key={index} className="group relative overflow-hidden">
            <img
              src={`./images/achivments/${image}`}
              alt={`Achievement ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold">Achievement {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivmentPage;
