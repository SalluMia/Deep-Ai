"use client";
import React from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import centerGradient from "../../public/svgs/Center2.svg";

const Technologies = ({ data, techDesciption }) => {
  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center mt-10 sm:mt-20 xl:px-32">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className=" absolute right-0  w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            // data-aos="fade-up"
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px]  xl:leading-[60px]"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            TECHNOLOGIES
            <br /> WE WORK WITH
          </h1>
          <p
            // data-aos="fade-up"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
          >
            {techDesciption}
          </p>
        </div>

        {/* Selected Menu result  */}
        <div className=" flex  flex-wrap justify-center  gap-3 py-3 w-[100%]">
          {data?.map((menu, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex gap-3  justify-center items-center text-white px-4 py-2 rounded-full border-2 border-silver bg-gradient-to-r from-[#111424] via-[#111424] to-transparent"
            >
              <Image
                src={menu.icon}
                alt={menu.title}
                className=" w-[1.5rem] h-auto"
                data-aos="fade-up"
              />
              <button key={index}>{menu?.title}</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Technologies;
