"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioMain from "@/public/images/portfolio/portfolioHome.png";

import frameOne from "@/public/images/blog/blogs-images/frame1.png";
import Boxes from "@/components/boxes/boxes";
import ImageMenu from "@/components/MenuComponents/ImageMenu/ImageMenu";
import HeadingMenu from "@/components/MenuComponents/headingMenu/HeadingMenu";

import Gradient1 from "@/public/svgs/gradient1.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Data = [
  {
    key: 1,
    title: "NFT Market Website",
    text: "Check out our state-of-the-art decentralized application (dApp), which is changing the game for NFT management by combining blockchain technology with artificial intelligence.",
    img: `${frameOne}`,
    link: "nftmarketwebsite",
    route: "portfolio",
  },
  {
    key: 2,
    title: "7 Min Win App",
    text: "The 7 Min Win App empowers users to maximize productivity in just seven minutes. Its intuitive interface and effective features help manage tasks, set goals, and track progress efficiently. Whether tackling daily to-dos or long-term objectives.",
    link: "7minwinapp",
    img: `${frameOne}`,
    route: "portfolio",
  },
  {
    key: 3,
    title: "Mungtum Admin Panel",
    text: "The Mungtum Admin Panel streamlines management tasks with its intuitive interface and robust features. Designed to enhance efficiency, it simplifies user management, data analysis, and content moderation. Whether overseeing user accounts or analyzing data trends.",
    link: "mungtumadminpanel",
    img: `${frameOne}`,
    route: "portfolio",
  },
  {
    key: 4,
    title: "Think AI Admin panel",
    text: "The Think AI Admin Panel streamlines tasks with its intuitive design and powerful features. From user management to data analysis, it empowers administrators to efficiently handle responsibilities and make informed decisions.",
    link: "thinkaiadminpanel",
    img: `${frameOne}`,
    route: "portfolio",
  },
  {
    key: 5,
    title: "Khushhaal Kisan App",
    text: "The Khushhaal Kisan App revolutionizes farming with its user-friendly interface and comprehensive features. From crop management to market analysis, it empowers farmers to make informed decisions and optimize their agricultural practices for success.",
    link: "khushhakisanapp",
    img: `${frameOne}`,
    route: "portfolio",
  },
  {
    key: 5,
    title: "The top ChatGPT",
    text: "The top ChatGPT harnesses advanced AI to deliver unparalleled conversational experiences. With its cutting-edge technology and intuitive interface, it facilitates seamless communication and problem-solving across various domains.",
    link: "khushhakisanapp",
    img: `${frameOne}`,
    route: "portfolio",
  },
];

const List = [
  {
    key: 1,
    tech: "Frontend",
  },
  {
    key: 2,
    tech: "Laravel",
  },
  {
    key: 3,
    tech: "Flutter",
  },
  {
    key: 4,
    tech: "MERN Stack",
  },
  {
    key: 5,
    tech: "Python/AI",
  },
  {
    key: 6,
    tech: "WordPress",
  },
];
function Portfolio() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredItems = Data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image className="xl:w-full " alt="gradient1" src={Gradient1} />
      </div>
      <div className="pt-10 ">
        <div
          className="flex flex-col items-center gap-7 sm:gap-10 lg:gap-12 px-8 sm:px-10 lg:px-12 xl:px-20"
          data-aos="fade-up"
        >
          <HeadingMenu heading={"Explore Our Successful Projects"} />
          <ImageMenu image={PortfolioMain} />
        </div>
        <div
          className="w-full h-auto mt-10 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between px-5 lg:px-8 xl:px-14"
          data-aos="fade-up"
        >
          <input
            type="search"
            placeholder="Search"
            className="sm:w-[70%] sm:h-[60px] text-[14px] sm:text-[16px] lg:text-[18px] px-4 sm:px-6 lg:px-8 rounded-[30px] border-2 border-white/70 bg-transparent
             text-white font-monosans"
            onChange={handleSearchChange}
          />

          <select
            name="Technology"
            id="Technology"
            className="sm:w-[28%] sm:h-[60px] px-4 text-[14px] sm:text-[16px] lg:text-[18px] sm:px-6 lg:px-8 text-white/50 
        rounded-[30px] border-2 border-white/70 bg-transparent font-monosans"
          >
            {filteredItems.map((value) => (
              <option key={value.key} value={value.tech}>
                {value.tech}
              </option>
            ))}
          </select>
        </div>

        <Boxes data={filteredItems} />
      </div>
    </>
  );
}

export default Portfolio;
