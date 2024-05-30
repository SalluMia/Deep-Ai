"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import centerGradient from "../../public/svgs/RightCornerGradient.svg";

const FAQS = ({ faqsData }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center mt-10 sm:mt-20  xl:px-32">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className="absolute right-0  w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino  xl:px-36 lg:px-44 md:px-24 px-10 text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px]  xl:leading-[60px]"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            data-aos="fade-up"
          >
            FAQS
          </h1>
          <p
            data-aos="fade-up"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
          >
            Explore our FAQs for quick answers to common queries about our
            products and services. Need more help? Contact us anytime.
          </p>
        </div>
        {/* FAQS QUESTION */}
        <div class="relative w-full   pb-8    sm:mx-auto sm:max-w-2xl px-4 sm:px-8 lg:px-0">
          <div class="mx-auto ">
            <div class="mx-auto mt-8 grid  divide-y divide-neutral-200">
              {faqsData?.map((item, index) => {
                return (
                  <div class="py-5" key={index}>
                    <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="text-white font-monosans">
                          {item?.question}
                        </span>
                        <span class="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            color="white"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-white font-monosans text-xs font-thin">
                        {item?.answer}
                      </p>
                    </details>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQS;
