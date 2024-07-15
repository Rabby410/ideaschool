import React from "react";

const About = () => {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-5 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-10">
            <div>
              <img src="./images/home/about/about.jpg" alt="about" className="hover-animate"/>
            </div>
            <div>
              <p className="text-md font-semibold leading-5 mb-5">About us</p>
              <h3 className="text-xl md:text-7xl text-blue-500 font-bold mb-5">
                Idea School is admitting students from Playgroup to Grade 7
              </h3>
              <p className="text-md">
                Idea School follows the Pearson Edexcel curriculum and intends
                to deliver excellent educational programs in the following Key
                Learning Areas: English, Mathematics, Science, Technology,
                Global Citizenship, Creative Arts, Personal Development, Health
                and Physical Education as well as lessons in Quran, Islamic
                Studies and Arabic Language classes. <br />
                <br />
                Here at Idea School, we aim to help our precious children to
                think and act in ways that are truly inspiring.
              </p>
              <div className="mt-5">
                <span className="bg-blue-500 text-lg text-white hover:scale-110 px-5 py-3 rounded-full">
                  Know more about us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
