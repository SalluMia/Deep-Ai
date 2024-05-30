"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { LuArrowRightSquare } from "react-icons/lu";
import Image from "next/image";
import centerGradient from "../../public/svgs/Center2.svg";

const OurSolution = ({ solItems, solDescription, solItemDetails }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleButtonClick = (id) => {
    const menuItemDetail = solItemDetails?.filter(
      (item) => item?.solItemId === id
    );
    setSelectedMenuItem(menuItemDetail ? menuItemDetail[0] : null);
  };

  useEffect(() => {
    if (solItemDetails) {
      handleButtonClick(1);
    }
    Aos.refresh();
  }, []);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center mt-10 sm:mt-20  xl:px-32">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className=" absolute right-0  w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            // data-aos="fade-right"
            className="font-varino   text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px]  xl:leading-[60px]"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Solutions Are Applicable for the Following Industries
          </h1>
          <p
            // data-aos="fade-right"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
          >
            {solDescription}
          </p>
        </div>
        {/* Menu Buttons */}
        <div className=" flex  flex-wrap gap-3 p-3">
          {solItems?.map((menu, index) => (
            <div key={index}>
              <button
                // data-aos="fade-up"
                key={index}
                className={`text-white px-5 py-2 rounded-full border-2 ${
                  selectedMenuItem?.solItemId === menu.id
                    ? "border-pink-500 bg-gradient-to-r from-[#EC66B7] to-[#2D5887] font-medium"
                    : "border-silver bg-gradient-to-r from-[#111424] via-[#111424] to-transparent"
                }`}
                onClick={() => handleButtonClick(menu.id)}
              >
                {menu?.title}
              </button>
            </div>
          ))}
        </div>
        {selectedMenuItem && (
          <div className="flex flex-col justify-start items-start px-4 sm:px-8 lg:px-0">
            <p
              // data-aos="fade-up"
              className="text-[14px] sm:text-[16px] w-[58%] xl:text-[18px] text-start font-monosans text-white font-extralight  my-3 sm:my-4 lg:my-5 xl:my-6"
            >
              {selectedMenuItem?.title}
            </p>
            {selectedMenuItem?.text?.map((item, index) => {
              return (
                <div key={index} className=" w-full flex gap-3 items-center">
                  <LuArrowRightSquare color="white" size={22} />
                  <p className="text-[14px] sm:text-[16px]  xl:text-[18px] text-start font-monosans text-white font-extralight my-2">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default OurSolution;
