"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "@/components/core/Heading";
import Image from "next/image";

import Gradient1 from "../../../public/svgs/gradient1.svg";
import RightGradient from "../../../public/svgs/right.svg";

import userImage from "../../../public/images/user.png";
import Client1 from '../../../public/images/avatars/Image1.png'
import TestimonialContainer from "@/components/core/testimonials/TestimonialContainer";



const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const reviews = [
    {
      id: 1,
      username: "John Smith",
      profilePicture: Client1,
      review:
        "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
      bio: "founder eDEN.ai",
    },
    {
      id: 2,
      username: "John Smith",
      profilePicture: Client1,
      review:
        "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
      bio: "founder eDEN.ai",
    },
    {
      id: 3,
      username: "John Smith",
      profilePicture: Client1,
      review:
        "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
      bio: "founder eDEN.ai",
    },
    {
      id: 4,
      username: "John Smith",
      profilePicture: Client1,
      review:
        "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
      bio: "founder eDEN.ai",
    },
  ];

  return (
    <>
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image
          className="xl:w-full animate-pulse "
          alt="gradient1"
          src={Gradient1}
        />
      </div>
      <section className="mb-20 relative flex flex-col  items-center space-y-6 pt-[30px] lg:pt-[70px]  w-full">
        <div className="flex flex-col items-center justify-center space-y-1 mb-6" data-aos="fade-up">
          <Heading >TESTIMONIALS</Heading>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12">
            Client Voices: See why we are praised for our innovative,
            user-focused technology solutions. Verified testimonies highlight
            our profoundly positive effects.
          </p>
        </div>
        <TestimonialContainer />
      </section>
    </>
  );
};

export default Testimonials;
