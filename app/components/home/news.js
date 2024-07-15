import React from "react";

const News = () => {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-5 justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div>
              <img
                src="./images/home/int.jpg"
                alt="news"
                className="h-[300px]"
              />
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold">
                Latest updates
              </h3>
              <span className="text-blue-500 text-4xl">_____</span>

              <ul className="mt-5 text-blue-500 underline">
                <li>Admission Open</li>
                <li>Parent Meeting 00/00/0000</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold">
                News & Media
              </h3>
              <span className="text-blue-500 text-4xl">_____</span>
              <div className="flex gap-3 mt-3">
                <div>
                  <img
                    src="./images/home/news/n2.webp"
                    alt="news"
                    className="h-[100px]"
                  />
                </div>
                <p>Glenrich Newsletter – February 2024</p>
              </div>
              <div className="flex gap-3 mt-3">
                <div>
                  <img
                    src="./images/home/news/n2.webp"
                    alt="news"
                    className="h-[100px]"
                  />
                </div>
                <p>Glenrich Newsletter – February 2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-4xl text-blue-500 font-bold">
              ADMISSION QUERY
              </h3>
              <span className="text-blue-500 text-4xl">_____</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
