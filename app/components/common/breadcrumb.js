import React from "react";
import Link from "next/link";
import Navbar from "../layouts/header";

const Breadcrumbs = ({ pageTitle, parentPage, parentPageUrl, bgImage }) => {
  // Default background image URL
  const defaultBgImage = "/images/bg-brd.jpg";

  return (
    <>
      <div className="relative z-40">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${bgImage ? bgImage : defaultBgImage})`
          }}
        >

        <div className="bg-gradient-to-b from-white to-transparent">
          <Navbar />
          <div className="text-center md:py-32 pb-20">
            <h1 className="title">
              <span className="text-white">{pageTitle}</span>
            </h1>
            <p className="para">
              <span className="text-gray-400 hover:text-white">
                <Link href={parentPageUrl}>{parentPage}</Link>
              </span>{" "}
              /{" "}
              <span className="text-gray-400 hover:text-white">
                <Link href="#">{pageTitle}</Link>
              </span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;