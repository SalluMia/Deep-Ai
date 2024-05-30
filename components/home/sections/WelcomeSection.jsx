'use client'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import GlobeSvg from "../../../public/svgs/globe.svg";
import Heading from "@/components/core/Heading";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import Gradient2 from "../../../public/svgs/gradient2.svg";

const WelcomeSection = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <section className="snap-center flex flex-col  space-y-2 items-center mt-[80px] sm:mt-[50px] ">
      {/* Gradient divs */}
      <div className="absolute left-0 animate-pulse " >
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>
      <div className="absolute right-0 -top-40 -z-10 ">
        <Image className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      {/* End Gradient divs */}
      <div className=" flex flex-col justify-center items-center" data-aos="fade-up">
        <h1 className="font-varino text-[16px] sm:text-[20px] xl:text-[28px] text-white" >
          WELCOME TO
        </h1>
        <Heading>ALRIGHT TECH</Heading>
        <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-[60%] xl:w-[75%] my-2 ">
          Master The Serverless Cloud To Unlock Digital Potential. Developing
          Concepts into Effective Solutions. 
        </p>
      </div>

      <div className="relative" data-aos="fade-up">
        <Image
          className="xl:w-full mt-16 mb-2 sm:my-3 animate-pulse"
          alt="globe"
          src={GlobeSvg}
          width={800}
          height={800}
        />
        <div className="absolute -top-2 xl:top-6 right-5 left-5 flex justify-center items-center my-4 sm:my-6 lg:my-8">
          <button  className=" hover:bg-gray-400  hover:bg-opacity-50 transition-colors duration-300 inline-flex py-2 lg:py-3 px-5 lg:px-8 justify-center items-center gap-10 flex-shrink-0 bg-gradient-to-r rounded-full border-2 border-white border-opacity-50 shadow-xl">
            <span className="text-white text-[14px] sm:text-[16px] xl:text-[18px]">Explore More</span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default WelcomeSection;
