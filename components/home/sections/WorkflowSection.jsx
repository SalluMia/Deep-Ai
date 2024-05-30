'use client'
import React, { useState,useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import WorkFlowImage from "../../../public/images/workflowImages/WorkflowImage.png";

import SECPImage from "../../../public/images/awardsImages/image 1.png";
import PSEBImage from "../../../public/images/awardsImages/image 2.png";
import PASHAImage from "../../../public/images/awardsImages/image 3.png";
import FBRImage from "../../../public/images/awardsImages/image 4.png";
import NCCS from "../../../public/images/awardsImages/NCCS.png";
import PCC from "../../../public/images/awardsImages/Pccc.png";
import AirUni from "../../../public/images/awardsImages/AirUni.png";
import AridUni from "../../../public/images/awardsImages/Arid.png";
import HEC from "../../../public/images/awardsImages/Hec.png";
import PKCERT from "../../../public/images/awardsImages/PKCERT.png";

import AchivementsLine from "../../../public/images/workflowImages/AchivementsLine.png";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Heading from "@/components/core/Heading";
import purpleGradient from "../../../public/svgs/purpleGradient.svg";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import centerGradient from "../../../public/svgs/Center1.svg";

const WorkflowSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="mt-10 mb-16">
      <div className="absolute left-0">
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>
      <section className=" relative flex flex-col items-center space-y-3 mt-[30px] lg:mt-[60px] mx-auto mb-6">
        <Image
          className="absolute  rounded-3xl -z-10 w-full h-full   animate-pulse "
          alt="cardBG"
          src={purpleGradient}
        />

        {/* ////// Why Choose US section /////// */}
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col space-y-3 sm:space-y-4 items-center" >
            <Heading>OUR WORK FLOW</Heading>
            <p data-aos="fade-up" className="text-[14px] sm:text-[16px] xl:text-[18px] lg:text-[18px] text-center font-monosans text-white font-extralight w-[90%] md:w-8/12 xl:w-full">
              Our Professional Workflow, Certifications, Awards And Numbers Will
              Prove The Quality We Offer.
            </p>
          </div>

          <Image
            className="w-[320px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1000px] object-contain  select-none no_drag"
            alt="WorkflowImage"
            src={WorkFlowImage} data-aos="fade-up"
          />
        </div>
        {/* //////    awards & certifications    /////// */}
        <div className="h-full flex flex-col justify-between items-center  gap-5   py-10 lg:py-20">
          <h1
          data-aos="fade-up"
            className="font-varino text-[26px] sm:text-[35px] xl:text-[66px]  text-center "
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            AWARDS & CERTIFICATIONS
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-5 space-y-6 lg:space-x-4 lg:space-y-4 place-content-center items-center xl:space-x-4 ">
            <Image src={SECPImage} alt="SECPImage" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>

            <Image src={PASHAImage} alt="PASHAImage" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>

            <Image src={PSEBImage} alt="PSEBImage" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>

            <Image src={FBRImage} alt="FBR" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>

            <Image src={NCCS} alt="NCCS" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
            <Image src={PCC} alt="PCC" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
            <Image src={AirUni} alt="AirUni" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
            <Image src={AridUni} alt="AridUni" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
            <Image src={HEC} alt="HEC" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
            <Image src={PKCERT} alt="PKCERT" className="w-[80px]  sm:w-[120px] sm:h-auto"  data-aos="fade-up"/>
          </div>
        </div>

        <div className=" relativeh-full flex flex-col justify-between items-center ">
          <div>
            <Image
              src={centerGradient}
              alt="center gradient"
              className=" absolute right-0 top-[100rem] w-[50rem] animate-bounce"
            />
          </div>

          {/* ////////////////////////////////////////// */}
          <h1
           data-aos="fade-up"
            className="font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center mb-16"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Achievements
          </h1>

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="relative">
              <Image
                alt="alrigt_tech_achivements"
                src={AchivementsLine}
                // height={500}
                // width={153}
                className="h-[420px] sm:h-[500px]"  data-aos="fade-up"
              />
              <div
                className="lg:-space-y-2 xl:-space-y-3 absolute -top-6 sm:-top-10 -left-[90px] xl:-top-9 xl:-left-[220px] lg:-top-9 lg:-left-[220px] flex-col items-center justify-center text-center xl:w-fit lg:w-fit w-8/12"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}  data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={4} duration={2} delay={0} />
                  )}
                  .
                  {counterOn && (
                    <CountUp start={0} end={8} duration={2} delay={0} />
                  )}
                  B+
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  REVENUE GENERATED
                </p>
              </div>

              <div
                className="lg:-space-y-2 xl:-space-y-3 absolute top-[118px] sm:top-32 left-[130px] sm:left-[160px] xl:top-32 xl:left-[90px] lg:top-30 lg:left-[90px] flex-col items-center justify-center text-center xl:w-[350px] lg:w-[350px] w-8/12"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}  data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  PROJECTS COMPLETED
                </p>
              </div>

              <div
                className="lg:-space-y-2 xl:-space-y-3 absolute top-[250px] sm:top-[290px] -left-[80px] xl:top-[280px] xl:-left-[240px] lg:top-[300px] lg:-left-[220px] flex-col items-center justify-center text-center xl:w-fit lg:w-fit w-7/12"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}  data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  IN-HOUSE DEVELOPERS
                </p>
              </div>

              <div
                className="lg:-space-y-2 xl:-space-y-3 absolute top-[390px] sm:top-[450px] left-[140px] xl:top-[450px] xl:left-[100px] lg:top-[465px] lg:left-[100px] flex-col items-center justify-center text-center xl:w-[350px] lg:w-[350px] w-7/12"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}  data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={98} duration={2} delay={0} />
                  )}
                  %
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  CLIENT SATISFACTION
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
};

export default WorkflowSection;
