"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import careerImg from "../../public/images/career.png";
import Gradient1 from "../../public/svgs/gradient1.svg";
import Link from "next/link";
const DevelopCareer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <---- Gradient -----> */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image className="xl:w-full " alt="gradient1" src={Gradient1} />
      </div>
      <section className=" px-5 lg:px-32 py-16">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="3000"
            className="font-varino text-[25px] xl:text-[54px] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Develop your <br /> career with us
          </h1>

          <div className=" grid lg:grid-cols-2 my-5">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" flex flex-col  gap-5 justify-center items-center"
            >
              <p className=" text-white lg:text-[1.25rem] font-monosans font-[300] text-center ">
                Let us collaborate to improve your career experience. Discover
                exciting personal and professional development opportunities in
                a collaborative atmosphere that promotes creativity and quality.
                Join a group of individuals dedicated to helping you progress in
                your professional journey.
              </p>
              <Link
                href="/jobApplication"
                type="button"
                className=" text-white hover:bg-gray-400 hover:bg-opacity-50 transition-colors duration-300 inline-flex py-2 xl:py-2 px-3 xl:px-6 justify-center items-center gap-10 flex-shrink-0 bg-gradient-to-r rounded-full border-2 border-white border-opacity-50 shadow-xl"
              >
                Apply Now
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Image
                data-aos="fade-up"
                data-aos-duration="3000"
                src={careerImg}
                alt="career image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevelopCareer;
