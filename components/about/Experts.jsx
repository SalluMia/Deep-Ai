'use client'
import React,{useState,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import profile from "../../public/images/profile.png";
import Image from "next/image";
import { Data } from "./Utils/ExpertsData";
import linkedIn from "../../public/svgs/linkedin2.svg";
import leftTop from "../../public/svgs/leftTop.svg";
import Link from "next/link";
const Experts = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="absolute left-0">
        <Image
          className="xl:w-full animate-pulse"
          alt="gradient1"
          src={leftTop}
        />
      </div>
      <section className="relative flex flex-col space-y-4 p-5 items-center mt-[130px] xl:mx-32">
        <div className=" flex flex-col gap-3 lg:gap-4 xl:gap-5 justify-center items-center mb-5 sm:mb-8 lg:mb-10">
          <h1
          data-aos="fade-up"
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
            Meet our CORE Team
          </h1>
          <p data-aos="fade-up" className="text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-[75%]">
            Discover the expertise within Alright Tech as we introduce our team
            of dedicated tech professionals committed to innovation, excellence,
            and delivering transformative solutions for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center  py-5 px-2">
          {Data.map((expert, index) => (
            <div
            data-aos="fade-up"
              key={expert.id}
              style={{ height: "368px" }}
              className={`bg-gradient-to-r from-fuchsia-500 to-violet-500   rounded-3xl p-1 ${
                index % 2 === 1 ? "mt-[3rem]" : ""
              }`}
            >
              <div
                className={`relative rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? " lg:mt-[0rem]" : ""
                }`}
                style={{ height: "360px" }} // Adjust the height as needed
              >
                {expert.image ? (
                  <Image
                    src={expert.image}
                    className="object-cover w-full h-full"
                    alt="expert image"
                    lazy
                  />
                ) : (
                  <Image
                    src={profile}
                    className="object-cover w-full h-full"
                    alt="expert image"
                  />
                )}

                <div
                  className="absolute bottom-0 w-full p-3 flex flex-col items-center rounded-b-3xl"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <p className="font-varino text-[18px] text-center text-white">
                    {expert.title}
                  </p>
                  <p className="font-monosans text-[13px] text-center text-white">
                    {expert.designation}
                  </p>
                  <Link href={expert?.linkedIn} target="blank">
                    <Image src={linkedIn} alt="expert" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experts;
