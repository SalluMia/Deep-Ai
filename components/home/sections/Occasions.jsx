"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Heading from "@/components/core/Heading";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import centerGradient from "../../../public/svgs/Center1.svg";
import occasionGradient from "../../../public/images/occasionGradient.png";
import TestimonialCard from "@/components/core/testimonials/TestimonialCard";
function Occasions() {
  useEffect(() => {
    Aos.init();
  }, []);
  const OccassionData = [
    {
      id: 1,
      name: "Company Anniversary",
    },
    {
      id: 2,
      name: "Games",
    },
    {
      id: 3,
      name: "Our Teams",
    },
    {
      id: 4,
      name: "Company Anniversary",
    },
  ];
  return (
    <>
      {/* Gradient divs */}
      <div className="absolute left-0">
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>

      {/* End Gradient divs */}
      <section className="relative flex flex-col space-y-4 items-center mt-[90px] ">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className=" absolute right-0 top-96 w-[50rem] "
          />
        </div>
        <Heading>Occassions</Heading>
        <p
          className="text-[16px] pb-10 xl:text-[18px] text-center font-monosans text-white font-light w-10/12 
        md:w-[65%] xl:w-[80%]"
          data-aos="fade-up"
        >
          Experience unforgettable moments with us. Our events redefine industry
          standards, offering unparalleled experiences in the realm of printing
          and typesetting.
        </p>
        <div className="flex mt-10 items-center justify-start gap-4 overflow-x-auto w-full mx-auto scrollbar-none">
          {OccassionData.map((occasion, index) => (
            <div
              key={index}
              className={` overflow-hidden scroll-containers flex-none rounded-[40px]  bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-[3px] w-[300px] lg:w-[500px] h-[250px]`}
            >
              <div className=" h-full flex flex-col justify-around items-center rounded-[38px] p-5  bg-[#111424]">
                <div className="w-full relative flex justify-center gap-3 items-center mt-4">
                  <div class="max-w-md rounded-3xl p-[2px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887]">
                    <div class="rounded-[calc(1.5rem-1px)] py-2 px-5 bg-[#111424] dark:bg-gray-900">
                      <div class=" flex items-center">
                        <span class="text-sm tracking-wide font-monosans text-white">
                          {occasion?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Occasions;
