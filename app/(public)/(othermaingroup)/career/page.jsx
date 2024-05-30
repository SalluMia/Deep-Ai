"use client";
import React, { useEffect } from "react";
import Tagline from "@/components/MenuComponents/ParagraphTagLine/Tagline";
import CareerCards from "@/components/MenuComponents/careercards/CareerCards";
import Boxes from "@/components/boxes/boxes";
import frameOne from "@/public/images/blog/blogs-images/frame1.png";
import { Testimonials } from "@/components/home/sections";
import CourseSection from "@/components/Coursesection/CourseSection";

import Aos from "aos";
import "aos/dist/aos.css";

export const Data = [
  {
    key: 1,
    title: "NFT Market Website",
    text: "Check out our state-of-the-art decentralized application (dApp), which is changing the game for NFT management by combining blockchain technology with artificial intelligence.",
    img: `${frameOne}`,
    link: "nftmarketwebsite",
    route: "blogs",
  },
  {
    key: 2,
    title: "7 Min Win App",
    text: "The 7 Min Win App empowers users to maximize productivity in just seven minutes. Its intuitive interface and effective features help manage tasks, set goals, and track progress efficiently. Whether tackling daily to-dos or long-term objectives.",
    link: "7minwinapp",
    img: `${frameOne}`,
    route: "blogs",
  },
  {
    key: 3,
    title: "Mungtum Admin Panel",
    text: "The Mungtum Admin Panel streamlines management tasks with its intuitive interface and robust features. Designed to enhance efficiency, it simplifies user management, data analysis, and content moderation. Whether overseeing user accounts or analyzing data trends.",
    link: "mungtumadminpanel",
    img: `${frameOne}`,
    route: "blogs",
  },
  {
    key: 4,
    title: "Think AI Admin panel",
    text: "The Think AI Admin Panel streamlines tasks with its intuitive design and powerful features. From user management to data analysis, it empowers administrators to efficiently handle responsibilities and make informed decisions.",
    link: "thinkaiadminpanel",
    img: `${frameOne}`,
    route: "blogs",
  },
  {
    key: 5,
    title: "Khushhaal Kisan App",
    text: "The Khushhaal Kisan App revolutionizes farming with its user-friendly interface and comprehensive features. From crop management to market analysis, it empowers farmers to make informed decisions and optimize their agricultural practices for success.",
    link: "khushhakisanapp",
    img: `${frameOne}`,
    route: "blogs",
  },
];

const CareerPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="pt-8 sm:pt-10 sm:pb-4">
      <h1
        className="px-5 sm:px-32 lg:px-40 xl:px-52 font-varino text-[18px] sm:text-[32px] lg:text-[40px] xl:text-[45px] text-center"
        style={{
          background: "linear-gradient(to bottom, white, gray)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        data-aos="fade-up"
      >
        become a part of our team to take your career to new heights
      </h1>
      <Tagline
        tagline={
          "Join our team and embark on a journey towards unparalleled growth and success in your career. We are dedicated to nurturing talent and fostering innovation, providing you with the platform to unleash your full potential."
        }
      />
      <div className="mb-6 sm:mb-10 lg:mb-14 xl:mb-16" data-aos="fade-up">
        <h1
          className="px-10 sm:px-24 lg:px-32 xl:px-60 font-varino text-[18px] sm:text-[32px] lg:text-[40px] xl:text-[45px] pt-10"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Jobs
        </h1>
        <CareerCards />
      </div>
      {/* <h1 className="mt-16 sm:mt-20 lg:mt-24 px-5 sm:px-32 lg:px-40 xl:px-52 font-varino text-[18px] sm:text-[32px] lg:text-[40px] xl:text-[45px] text-center" style={{
                background: "linear-gradient(to bottom, white, gray)",
                 WebkitBackgroundClip: "text",
                color: "transparent", }}>
              become a part of our team to take your career to new heights</h1>
              <Tagline tagline={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam ea laborum recusandae obcaecati fuga dignissimos rerum molestias earum tempora voluptates"}/> */}
      <div>
        <CourseSection />
        <Testimonials />
      </div>
    </div>
  );
};

export default CareerPage;
