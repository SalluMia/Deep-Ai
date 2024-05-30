"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import cardBG from "../../public/svgs/cardBG.svg";
import cardLightBG from "../../public/svgs/card-light-BG.svg";

const ProjectsCard = ({ title, descripiton, image, index, id }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  function isEven(number) {
    return number % 2 === 0;
  }

  return (
    <div
      className=" rounded-3xl bg-gradient-to-r from-[#EC66B7] to-[#2D5887] p-1"
      data-aos="fade-up"
    >
      <div className="bg-[#111424] h-full w-full back rounded-3xl">
        <div className=" relative flex flex-col justify-center lg:flex-row lg:justify-between px-8  lg:px-[70px] py-8 lg:py-[45px] space-y-6">
          {isEven(index + 1) ? (
            <>
              <div className="flex justify-center lg:justify-end  mx-auto">
                <Image
                  src={image}
                  alt={title}
                  className="h-auto w-[300px] object-cover"
                  placeholder="blur"
                  quality={100}
                />
              </div>

              <div className="flex flex-col space-y-4 lg:w-8/12 xl:ml-32 lg:ml-32">
                <h1 className="text-white text-xl font-varino text-center  lg:text-left ">
                  {title}
                </h1>
                <p className="text-base font-monosans text-white xl:w-9/12 lg:w-11/12 w-full xl:text-[16px] lg:text-[16px] text-[12px] ">
                  {descripiton}
                </p>

                <Link
                  href={`/detail-page/${id}`}
                  className="text-center px-4 py-3 text-[12px] sm:text-[14px] xl:text-[16px] bg-[#00A7E1] w-full xl:w-[150px] lg:w-[150px] rounded-full text-white font-monosans z-20"
                >
                  Explore More
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col space-y-4 lg:w-8/12 z-30">
                <h1 className="text-white text-xl font-varino text-center  lg:text-left ">
                  {title}
                </h1>
                <p className="text-base font-monosans text-white xl:w-9/12 lg:w-8/12 w-full xl:text-[16px] lg:text-[16px] text-[12px] ">
                  {descripiton}
                </p>

                <Link
                  href={`/detail-page/${id}`}
                  className="text-center px-4 py-3 text-[12px] sm:text-[14px] xl:text-[16px] bg-[#00A7E1] w-full xl:w-[150px] lg:w-[150px] rounded-full text-white font-monosans"
                >
                  Explore More
                </Link>
              </div>

              <div className="flex justify-center lg:justify-end  mx-auto z-30">
                <Image
                  src={image}
                  alt={title}
                  className=" h-[180px] object-cover"
                />
              </div>
            </>
          )}
          <Image
            src={cardBG}
            alt="card-bg"
            className="absolute w-full h-full 
                    xl:-top-6 xl:-left-18
                    lg:-top-6 lg:-left-18
                    md:-top-6 lg:-left-18
                    sm:-top-4 sm:-left-18
                    -top-6 -left-[1px]
                    z-10
                    "
          />

          <Image
            src={cardLightBG}
            alt="card-ligth-bg"
            className="absolute h-full 
                        rounded-3xl
                        xl:block
                        xl:-top-5 xl:right-[1px]
                        lg:block
                        lg:-top-5 lg:right-[1px]
                        md:hidden
                        hidden
                        z-10
                    "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
