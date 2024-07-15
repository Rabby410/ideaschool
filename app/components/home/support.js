import React from "react";

const Support = () => {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-5 justify-center items-center">
          <div className="py-3 text-center">
            <p className="text-md font-semibold leading-5 mb-5">ACADEMICS</p>
            <h3 className="text-xl md:text-7xl text-blue-500 font-bold mb-5">
              Age-specific support for every stage
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="common-box text-center p-5">
              <img
                src="./images/home/support/s1.jpg"
                alt="support"
                className="h-[350px] mb-3"
              />
              <h3 className="text-xl mb-3">PRESCHOOL</h3>
              <p className="text-justify text-sm">
                We welcome children from 3 to 6 in the Preschool Program to
                participate in the classroom from Playgroup (Reception 1),
                Nursery (Reception 2) and Kindergarten (Year 1). Our children in
                Preschool (Early Years) are exposed to different areas of
                learning that includes communication and language, personal,
                social and emotional development, physical development,
                literacy, mathematics, understanding the world, expressive arts
                and design. Learning process is pursued through various fun and
                playful activities to develop the sense of spirituality and to
                build the foundation for academic success.
              </p>
              <div className="text-blue-500 hover:underline mt-5">
                Read More {">"}
              </div>
            </div>
            <div className="common-box text-center p-5">
              <img
                src="./images/home/support/s2.jpg"
                alt="support"
                className="h-[350px] mb-3"
              />
              <h3 className="text-xl mb-3">PRIMARY SCHOOL</h3>
              <p className="text-justify text-sm">
                In the Primary School program children can enroll from Year 2 to
                Year 6 (Grade 1 to Grade 5). To continue the development of
                student&apos;s academic success Reverie School keeps on
                nurturing the innate curiosity and learning skills of each
                child. We expose students to a wide range of subject areas to
                keep them motivated to become creative, analytical and continue
                to achieve academic success. Students are taught English,
                Bangla, Maths, Science, Computing, Global Citizenship, Islam,
                Arabic, Tahfeez (reading and memorizing surahs from the Quran),
                creative art and physical education.
              </p>
              <div className="text-blue-500 hover:underline mt-5">
                Read More {">"}
              </div>
            </div>
            <div className="common-box text-center p-5">
              <img
                src="./images/home/support/s3.jpg"
                alt="support"
                className="h-[350px] mb-3"
              />
              <h3 className="text-xl mb-3">MIDDLE SCHOOL</h3>
              <p className="text-justify text-sm">
                In the Lower Secondary School program are taught to the children
                in Year 7 (Grade 6), Year 8 (Grade 7) and Year 9 (Grade 8) in
                order to prepare them for IGCSE O & A Levels. The Lower
                Secondary School Program provides a safe place for students to
                meet, individually or in small groups, to focus on social and
                emotional development, and to seek guidance from school
                counselors. Students increase their levels of independence in
                emotional self-regulation, self-advocacy, and interpersonal
                skills by continuing their learning journey in English, Bangla,
                Maths, Physics, Chemistry, Biology, Computing, Global
                Citizenship, Islam, Arabic, Tahfeez (reading and memorizing
                surahs from the Quran), creative art and physical education.
              </p>
              <div className="text-blue-500 hover:underline mt-5">
                Read More {">"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
