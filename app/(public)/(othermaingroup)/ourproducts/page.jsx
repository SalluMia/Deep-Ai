"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProductImage from "@/public/images/product/productMain.png";
import Link from "next/link";
import frameOne from "@/public/images/blog/blogs-images/frame1.png";
import Boxes from "@/components/boxes/boxes";

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

const List = [
  {
    key: 1,
    tech: "Generative AI",
  },
  {
    key: 1,
    tech: "UI/UX Design",
  },
  {
    key: 1,
    tech: "Frontend",
  },
  {
    key: 1,
    tech: "Laravel",
  },
  {
    key: 1,
    tech: "Flutter",
  },
  {
    key: 1,
    tech: "MERN Stack",
  },
  {
    key: 1,
    tech: "Python/AI",
  },
  {
    key: 1,
    tech: "WordPress",
  },
  {
    key: 1,
    tech: "SEO",
  },
  {
    key: 1,
    tech: "Q/A",
  },
  {
    key: 1,
    tech: "Digital Marketing",
  },
  {
    key: 1,
    tech: "Business Development",
  },
];

function OurProducts() {
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
    <div className="pt-10 ">
      <div className="flex flex-col items-center gap-7 sm:gap-10 lg:gap-12 px-8 sm:px-10 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-3" data-aos="fade-up">
          <h1
            className="font-varino text-[26px] sm:text-[40px] lg:text-[55px] xl:text-[64px] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            our products
          </h1>
          <p className="font-monosans text-[14px] sm:text-[16px] xl:text-[18px] text-center text-white sm:px-20 lg:px-32 xl:px-40">
            Discover excellence with our range of products designed to exceed
            your expectations. From innovative gadgets to essential tools, each
            item in our collection is meticulously crafted to deliver
            exceptional performance and unparalleled quality. Whether you are a
            tech enthusiast, a seasoned professional, or a casual user, our
            diverse lineup caters to all your needs.
          </p>
        </div>
        <Image
          src={ProductImage}
          alt="our product image"
          data-aos="fade-up"
          className="w-[360px] sm:w-[420px] lg:w-[485px] h-auto"
          loading="lazy"
        />
      </div>
      <div
        className="w-full h-auto mt-10 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between px-5 lg:px-8 xl:px-14"
        data-aos="fade-up"
      >
        <input
          type="search"
          placeholder="Search"
          className="sm:w-[70%] sm:h-[60px]px-4 text-[14px] sm:text-[16px] lg:text-[18px] px-4 sm:px-6 lg:px-8 rounded-[30px] border-2 border-white/70 bg-transparent
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
            <option key={value.key} value={value.tech} className="text-black">
              {value.tech}
            </option>
          ))}
        </select>
      </div>

      <Boxes data={filteredItems} />
    </div>
  );
}

export default OurProducts;
