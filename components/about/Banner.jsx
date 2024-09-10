'use client'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import AboutImg from "../../public/images/about.png";
import Gradient1 from "../../public/svgs/gradient1.svg";
import Gradient2 from "../../public/svgs/gradient2.svg";

const Banner = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="absolute right-0 top-0 -z-10">
        <Image className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      <section className=" relative snap-center flex flex-col space-y-4 items-center my-16">
        {/* Gradient divs */}
        <div className="absolute left-0">
          <Image
            className="xl:w-full animate-pulse"
            alt="gradient1"
            src={Gradient1}
          />
        </div>

        {/* End Gradient divs */}
        <div className="flex flex-col justify-center items-center">
          <h1
           data-aos="fade-up"
            className="font-varino text-[35px] xl:text-[66px] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ABOUT US
          </h1>
          <p  data-aos="fade-up"  className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-[60%] xl:w-[65%]">
          Visit our domain where state-of-the-art technology meets to create inventive solutions in CMS, Web 3.0, Gen AI, and more.
          </p>
        </div>
        <div className="relative "  data-aos="fade-up">
          <Image className="" alt="about" src={AboutImg} />
        </div>
      </section>
    </>
  );
};

export default Banner;
