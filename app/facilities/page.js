import React from 'react';
import Breadcrumbs from '../components/common/breadcrumb';

const Facilities = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Facilities" parentPage="Home" parentPageUrl="/"/>
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Explore Our Facilities</h1>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Facility Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/facilities/sports.webp"
              alt="Sports Facility"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Sports Facilities</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac nunc accumsan, vitae
                consectetur enim ultrices. Nunc ac metus et leo laoreet molestie.
              </p>
            </div>
          </div>

          {/* Facility Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/facilities/library.jpg" alt="Library" className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Library</h2>
              <p className="text-gray-700">
                Vestibulum commodo odio eu justo fermentum, ut rutrum odio lacinia. Morbi sit amet libero nec libero
                molestie mollis.
              </p>
            </div>
          </div>

          {/* Facility Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/facilities/laboratories.jpg"
              alt="Laboratories"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Laboratories</h2>
              <p className="text-gray-700">
                Phasellus tincidunt, leo sit amet eleifend lacinia, dui nisi tincidunt enim, vitae ullamcorper dui lacus
                vel ipsum.
              </p>
            </div>
          </div>

          {/* Facility Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/facilities/cafeteries.jpg" alt="Cafeteria" className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Cafeteria</h2>
              <p className="text-gray-700">
                Duis ut nunc at turpis maximus mattis non a urna. Curabitur quis augue quis lacus ultrices rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Facilities;
