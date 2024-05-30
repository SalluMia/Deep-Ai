'use client'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from "next/image";

import careerImg from "../../public/images/career.png";
import Gradient1 from "../../public/svgs/gradient1.svg";
import Link from "next/link";

const GetQuotesComponent = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      {/* <---- Gradient -----> */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image className="xl:w-full " alt="gradient1" src={Gradient1} />
      </div>
      <section className=" px-5 lg:px-32 py-16">
        <div>
          <h1
           data-aos="fade-up"
            className="font-varino text-[25px] xl:text-[54px] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Your companion, always ready
          </h1>

          <div className=" grid lg:grid-cols-2 my-5">
            <div className=" flex flex-col  gap-5 justify-center items-center">
              <p  data-aos="fade-up" className=" text-white lg:text-[1.25rem] font-monosans font-[300] text-center ">
                Transform customer pleasure with our unmatched quote service,
                which offers customized solutions, quick turnaround times, and
                unbeatable value, making us the benchmark for service excellence
                in each quote we provide.
              </p>
              <Link
               data-aos="fade-up"
                href="/getQuotes"
                type="button"
                className=" text-white hover:bg-gray-400 hover:bg-opacity-50 transition-colors duration-300 inline-flex py-2 xl:py-2 px-3 xl:px-6 justify-center items-center gap-10 flex-shrink-0 bg-gradient-to-r rounded-full border-2 border-white border-opacity-50 shadow-xl"
              >
                Get A Quote
              </Link>
            </div>

            <div className="flex justify-center items-center"  data-aos="fade-up">
              <Image src={careerImg} alt="career image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuotesComponent;
