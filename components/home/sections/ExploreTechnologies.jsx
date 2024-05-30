"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Image8 from "../../../public/images/Technologies/image 8.png";
import Image9 from "../../../public/images/Technologies/image 9.png";
import Image10 from "../../../public/images/Technologies/image 10.png";
import Image11 from "../../../public/images/Technologies/image 11.png";
import Image12 from "../../../public/images/Technologies/image 12.png";
import Image13 from "../../../public/images/Technologies/image 13.png";

import Image from "next/image";
import Heading from "@/components/core/Heading";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import centerGradient from "../../../public/svgs/Center1.svg";

const ExploreTechnologies = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      title: "ChatGPT Vs Bard: Which is better for coding?",
      desc: "ChatGPT and Bard are AI tools used for coding. While ChatGPT is known for its conversational style, Bard is valued for its structured responses. Both have unique advantages in the coding world.",
      image: Image8,
    },
    {
      title: "Scrum vs. SAFe: Which Agile framework is right for your team?",
      desc: "Scrum and SAFe are popular Agile frameworks. Scrum focuses on small teams with short sprints. SAFe suits larger organizations, emphasizing alignment and collaboration. Each has strengths for different team needs.",
      image: Image9,
    },
    {
      title: "The top ChatGPT plugins for developers",
      desc: "The top ChatGPT plugins for developers enhance productivity. These plugins offer code completion, debugging tools, and integration with popular IDEs. They streamline development tasks, making coding more efficient.",
      image: Image10,
    },
    {
      title: "VCP-DCV: All about VMware's Data Center Virtualization 2023",
      desc: "VCP-DCV covers VMware's Data Center Virtualization in 2023. It includes skills for managing and deploying virtual environments. This certification is essential for IT professionals working with VMware technology.",
      image: Image11,
    },
    {
      title: "ChatGPT's new Browse with Bing: Watching AIs stalk you is odd",
      desc: "ChatGPT's new Browse with Bing feature allows real-time web browsing. This AI tool enhances search capabilities but raises privacy concerns. Watching AI track your queries can feel unsettling.",
      image: Image12,
    },
    {
      title:
        "Cloud computing challenges and opportunities for the public sector",
      desc: "Cloud computing presents challenges and opportunities for the public sector. While it offers scalability and cost-efficiency, security and compliance remain concerns. ",
      image: Image13,
    },
  ];

  return (
    <>
      {/* Gradient divs */}
      <div className="absolute left-0">
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>

      {/* End Gradient divs */}
      <section className="relative flex flex-col space-y-4 items-center mt-[90px] xl:mx-32">
        <div>
          <Image
            src={centerGradient}
            alt="center gradient"
            className=" absolute right-0 top-96 w-[50rem] "
          />
        </div>
        <Heading>EXPLORE TECHNOLOGY</Heading>
        <p
          className="text-[16px] xl:text-[18px] text-center font-monosans text-white font-light w-10/12 
            md:w-[65%] xl:w-[80%]"
          data-aos="fade-up"
        >
          Explore technology to learn about new ideas, fashions, and
          game-changing discoveries that define and alter the digital world.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center py-5 px-3 sm:px-2">
          {data.map(({ title, desc, image }, index) => (
            <div
              key={index}
              className={`relative rounded-[40px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 sm:h-[480px] ${
                index % 3 === 1 ? "lg:mt-[50px]" : ""
              }`}
              data-aos="fade-up"
            >
              <div className="bg-[#111424] rounded-[38px] overflow-hidden h-full">
                <div className="relative flex flex-col items-center justify-center space-y-3 z-20 sm:py-4 sm:px-4 px-2 py-4">
                  <Image
                    src={image}
                    alt="explore image"
                    className="object-cover w-full h-[13.75rem] rounded-t-3xl"
                  />
                  <p className="font-varino text-[18px] text-center text-white">
                    {title}
                  </p>
                  <p className="font-monosans text-[12px] text-center text-white ">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreTechnologies;
