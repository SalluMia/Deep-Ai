"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Heading from "@/components/core/Heading";

import Image1 from "../../../public/images/projects/10 1.png";
import Image2 from "../../../public/images/projects/MacBook Pro 16-inch Space Black Front label (4).png";
import Image3 from "../../../public/images/projects/MacBook Pro 16-inch Space Black Front label.png";

import ProjectsCard from "../ProjectsCard";
import Button from "@/components/core/Button";

const ProjectsAndCaseStudy = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const Projects = [
    {
      id: 1,
      title: "Mungtum Admin Panel",
      desc: "The Mungtum Admin Panel streamlines management tasks with its intuitive interface and robust features. Designed to enhance efficiency, it simplifies user management, data analysis, and content moderation. Whether overseeing user accounts or analyzing data trends.",
      projectImage: Image1,
    },
    {
      id: 2,
      title: "7 min win app",
      desc: "The 7 Min Win App empowers users to maximize productivity in just seven minutes. Its intuitive interface and effective features help manage tasks, set goals, and track progress efficiently. Whether tackling daily to-dos or long-term objectives.",
      projectImage: Image3,
    },
    {
      id: 3,
      title: "NFT Market Place Website",
      desc: "Check out our state-of-the-art decentralized application (dApp), which is changing the game for NFT management by combining blockchain technology with artificial intelligence.",
      projectImage: Image2,
    },
  ];

  return (
    <section className="mb-20 sm:mb-24 lg:mb-32 relative flex flex-col space-y-18 items-center mt-[130px]  xl:mx-32">
      <div className="flex flex-col items-center justify-center space-y-1">
        <Heading>PROJECT & CASE STUDIES</Heading>
        <p
          className="text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-7/12 xl:w-[100%]"
          data-aos="fade-up"
        >
          Explore our project case studies to see actual customer success,
          game-changing solutions, and the harmonious blending of technology,
          design, and business effects. Get a personal look at greatness.
        </p>
      </div>

      <div className="grid grid-cols-1 place-content-center mt-12 gap-y-4 w-full px-6 mb-4">
        {Projects.map(({ title, desc, projectImage, id }, index) => (
          <ProjectsCard
            key={index}
            title={title}
            descripiton={desc}
            image={projectImage}
            index={index}
            id={id}
          />
        ))}
      </div>

      {/* <div className='mt-10'>
            <Button>Learn More</Button>
            </div> */}
    </section>
  );
};

export default ProjectsAndCaseStudy;
