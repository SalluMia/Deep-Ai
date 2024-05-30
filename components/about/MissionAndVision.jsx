'use client'
import React,{useState,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";


import vision from "../../public/images/vision.png";
import purpleGradient from "../../public/svgs/purpleGradient.svg";

const MissionAndVision = () => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <section className=" my-10 p-5 lg:p-10">
        {/* Gradient divs */}
        <div className="absolute left-0">
          <Image
            className="xl:w-full animate-pulse"
            alt="gradient1"
            src={purpleGradient}
          />
        </div>

        <div className="snap-center flex flex-col space-y-4 my-5 items-center ">
          <h1
          data-aos="fade-up"
            className="font-varino capitalize text-[30px] xl:text-[50px] text-center  md:w-3/4 xl:w-3/4"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our mission and vision
          </h1>
        </div>
        <div className=" grid lg:grid-cols-2  gap-5 lg:my-10">
          <div className=" flex flex-col gap-7 lg:p-10 order-2">
            <div className=" flex flex-col  lg:gap-5">
              <h1 data-aos="fade-up" className=" font-varino text-[1.5rem] lg:text-[2.1rem] text-white font-[400] capitalize">
                Our Mission
              </h1>
              <p data-aos="fade-up" className=" font-monosans  text-white font-[300] ">
                At Alright Tech, we are dedicated to pioneering technological
                excellence that transforms businesses. Our mission is to empower
                clients with innovative solutions. Through a commitment to
                quality and client success, we aim to be a catalyst for positive
                change, fostering growth and progress in the digital landscape.
              </p>
            </div>
            <div className=" flex flex-col gap-5">
              <h1 data-aos="fade-up" className=" font-varino text-[1.5rem] lg:text-[2.1rem] text-white font-[400] capitalize">
                Our Vision
              </h1>
              <p data-aos="fade-up" className=" font-monosans  text-white font-[300] ">
                Alright Tech aspires to be a global technology leader, shaping
                its rotation. We aim to create a dynamic digital space for
                companies to evolve and thrive effortlessly. Staying ahead with
                cutting-edge solutions and a culture of continuous improvement,
                we seek to drive positive change through innovation, quality,
                and unwavering commitment, leaving a lasting impact globally.
              </p>
            </div>
          </div>

          <div className=" flex justify-center items-center order-1 lg:order-2 ">
            <div>
              <Image
              data-aos="fade-up"
                src={vision}
                alt="helping grow"
                className="rounded-3xl bg-gradient-to-r from-[#EC66B7] to-[#2D5887] p-1 w-[100%] max-w-[534px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;
