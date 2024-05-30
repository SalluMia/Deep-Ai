'use client'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import ServiceImage from "../../public/images/services.png";
import Gradient1 from "../../public/svgs/gradient1.svg";
import Gradient2 from "../../public/svgs/gradient2.svg";
import Image from "next/image";
import HeadingMenu from "../MenuComponents/headingMenu/HeadingMenu";

const OurSevices = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="absolute right-0 top-0 -z-10">
        <Image className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      <section className=" relative snap-center flex flex-col space-y-4 items-center my-8 ">
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
         <HeadingMenu heading={"OUR SERVICES"}/>
          <p  data-aos="fade-up" className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-[60%] xl:w-[65%]">
            Encourage Achievement All-inclusive Services Include Blockchain, AI
            Solutions, Digital Marketing, Web And App Development, And
            Cutting-Edge Technology.{" "}
          </p>
        </div>

        <div className="relative"  data-aos="fade-up">
          <Image className=" drop-shadow-2xl" alt="about" src={ServiceImage} />
        </div>
      </section>
    </>
  );
};

export default OurSevices;
