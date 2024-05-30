"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import purpleGradient from "@/public/svgs/purpleGradient.svg";
import Image from "next/image";
import centerGradient from "../../public/svgs/Center2.svg";
import Link from "next/link";
const SubService = ({ data, desc }) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center mt-10  lg:px-10">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className=" absolute right-0  w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px]  xl:leading-[60px]"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            data-aos="fade-up"
          >
            Subservices
          </h1>
          <p
            data-aos="fade-down"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
          >
            {desc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-5 px-5 lg:px-0">
          {data.map((offer, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`rounded-[40px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2 mb-5`}
            >
              <div className="flex flex-col justify-center items-center bg-[#111424] h-full w-full back rounded-[36px]">
                <div className="px-2 relative flex flex-col items-center justify-center py-[16px] space-y-3 z-20">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    className="object-cover"
                  />
                  <p className="font-varino text-[18px] text-center text-white">
                    {offer.title}
                  </p>
                  <p className="font-monosans text-[12px] text-center text-white px-[15px]">
                    {offer.description}
                  </p>
                  <Image
                    className="absolute -top-3 rounded-3xl -z-10 w-full h-full"
                    alt="cardBG"
                    src={purpleGradient}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SubService;
