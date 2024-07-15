'use client'
import React, { useState } from "react";

const News = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-5 justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div>
              <img
                src="./images/home/int.jpg"
                alt="news"
                className="h-[300px] w-full object-cover"
              />
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold mt-5">
                Latest updates
              </h3>
              <span className="block text-blue-500 text-4xl">_____</span>
              <ul className="mt-5 text-blue-500 underline">
                <li>Admission Open</li>
                <li>Parent Meeting 00/00/0000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold">
                News & Media
              </h3>
              <span className="block text-blue-500 text-4xl">_____</span>
              <div className="flex gap-3 mt-3">
                <img
                  src="./images/home/news/n2.webp"
                  alt="news"
                  className="h-[100px] w-[100px] object-cover"
                />
                <p>Glenrich Newsletter – February 2024</p>
              </div>
              <div className="flex gap-3 mt-3">
                <img
                  src="./images/home/news/n2.webp"
                  alt="news"
                  className="h-[100px] w-[100px] object-cover"
                />
                <p>Glenrich Newsletter – February 2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold">
                ADMISSION QUERY
              </h3>
              <span className="block text-blue-500 text-4xl">_____</span>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
