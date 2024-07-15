import React from "react";
import { FaArrowRight } from 'react-icons/fa';


const SchoolTiming = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-5 justify-center items-center">
        <div className="py-3 text-center">
          <h3 className="text-xl md:text-7xl text-blue-500 font-bold mb-5">
            School Timing
          </h3>
        </div>

        <div className="border border-blue-500">
          <div className="p-5">
            <div className="overflow-x-auto">
              <h3 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
                For Early Years (Playgroup, Nursery, Kindergarten)
              </h3>
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Class</th>
                    <th className="py-3 px-6 text-left">First Shift</th>
                    <th className="py-3 px-6 text-left">Second Shift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left">
                      Reception 1 (Playgroup)
                    </td>
                    <td className="py-4 px-6 text-left">9:00 am – 11:15 am</td>
                    <td className="py-4 px-6 text-left">11:30 am – 1:45 pm</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left">
                      Reception 2 (Nursery)
                    </td>
                    <td className="py-4 px-6 text-left">8:15 am – 11:40 am</td>
                    <td className="py-4 px-6 text-left">11:15 am – 2:30 pm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left">
                      Year 1 (Kindergarten)
                    </td>
                    <td className="py-4 px-6 text-left">8:15 am – 12:20 pm</td>
                    <td className="py-4 px-6 text-left">Not applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <h3 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
                For Primary Years (Grades 1-4)
              </h3>
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Class</th>
                    <th className="py-3 px-6 text-left">School Timing</th>
                    <th className="py-3 px-6 text-left">Salah Timing </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left">
                      Year 2-3(Grades 1-2){" "}
                    </td>
                    <td className="py-4 px-6 text-left">8:15 am – 1:45 pm</td>
                    <td className="py-4 px-6 text-left">1:25 pm – 1:40 pm </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 text-left">
                      Year 4-5(Grades 3-4){" "}
                    </td>
                    <td className="py-4 px-6 text-left">8:15 am – 2:00 pm </td>
                    <td className="py-4 px-6 text-left">1:25 pm – 1:40 pm </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <h3 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
                For Primary Years (Grades 1-4)
              </h3>
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Class</th>
                    <th className="py-3 px-6 text-left">School Timing</th>
                    <th className="py-3 px-6 text-left">Salah Timing </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-left">
                      Year 6-7(Grades 5-6){" "}
                    </td>
                    <td className="py-4 px-6 text-left">8:15 am – 2:450 pm</td>
                    <td className="py-4 px-6 text-left">1:25 pm – 1:40 pm </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-md">
              *Reverie School holds the right to chnage the school timing as per
              requirement.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button className="mt-5 flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-4 rounded-lg transition-colors duration-300 hover:scale-105 hover:transition-transform">
            Enroll Your Kid now <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolTiming;
