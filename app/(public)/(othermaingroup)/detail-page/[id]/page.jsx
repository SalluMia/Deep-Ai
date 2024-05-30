"use client";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Gradient2 from "../../../../../public/svgs/gradient2.svg";
import Gradient1 from "../../../../../public/svgs/gradient1.svg";
import purpleGradient from "../../../../../public/svgs/purpleGradient.svg";
import eden from "../../../../../public/images/eden.png";
import steps from "../../../../../public/images/Steps.png";
import Image from "next/image";

const DetailPage = async ({ params }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <--------------------  Main Section -------------------> */}
      <div className="absolute left-0">
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>
      <div className="absolute right-0 top-0 -z-10">
        <Image className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      <section className=" px-5 lg:px-32 py-16">
        <p
          className="text-white text-[1.5rem] font-monosans font-[300]"
          data-aos="fade-up"
        >
          Blockchain
        </p>
        <div className="relative flex flex-col justify-center items-center gap-5">
          <h1
            data-aos="fade-up"
            className="font-varino text-[2rem] xl:text-[4rem] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            NFT Market Place Website
          </h1>
          <div className="relative">
            <Image
              src={eden}
              alt="project pic"
              objectFit="cover"
              className="lg:w-[42rem] lg:h-[26rem] rounded-2xl"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
      {/* <------------------------------------------------------> */}

      {/* <--------------------  About Section -------------------> */}

      <section>
        <div className="grid lg:grid-cols-2">
          <div className=" flex justify-center items-center p-5 lg:p-28 order-2 lg:order-1">
            <div
              className="border-4 border-pink-400 p-10 lg:p-16 rounded-3xl"
              data-aos="fade-up"
            >
              {/* <---- Gradient -----> */}
              <div className="absolute ">
                <Image
                  className="xl:w-full -z-10 "
                  alt="gradient1"
                  src={purpleGradient}
                />
              </div>
              <Image
                src={eden}
                alt="project pic"
                objectFit="cover"
                className=" rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:order-2 p-5 lg:p-20">
            <div
              data-aos="fade-up"
              className="p-5  flex flex-col gap-5  justify-start items-start  border border-white rounded-3xl "
            >
              <h2
                data-aos="fade-up"
                className="font-varino text-[1.5rem] xl:text-[2.5rem] "
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                About
              </h2>
              <p
                className=" text-white font-monosans font-[300] "
                data-aos="fade-up"
              >
                Welcome to our NFT Marketplace: a hub for creators, collectors,
                and investors. Explore unique digital assets authenticated by
                blockchain. Join a vibrant community shaping the future of
                digital ownership. Welcome to the next evolution in NFT culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------> */}
      {/* <--------------------  The Challenge Section -------------------> */}

      <section className=" lg:px-28 p-5">
        <div className=" flex flex-col justify-center items-center gap-7">
          <h1
            data-aos="fade-up"
            className="font-varino text-[2rem] xl:text-[4rem] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            The Challenge
          </h1>
          <p
            data-aos="fade-up"
            className=" text-white font-monosans font-[300]  text-justify"
          >
            Innovation thrives in the face of challenges. At our NFT
            Marketplace, we understand the obstacles that creators, collectors,
            and investors encounter in the digital landscape. From navigating
            complex technologies to ensuring trust and security in transactions,
            the journey towards digital ownership can be daunting.
          </p>

          <div className=" flex justify-center items-center  order-2 lg:order-1 lg:w-[39rem] lg:h-[30rem]">
            <div
              className="border-4 border-pink-400 p-10 lg:p-16 rounded-3xl"
              data-aos="fade-up"
            >
              {/* <---- Gradient -----> */}
              <div className="absolute ">
                <Image
                  className="xl:w-full -z-10 "
                  alt="gradient1"
                  src={purpleGradient}
                />
              </div>
              <Image
                src={eden}
                alt="project pic"
                objectFit="cover"
                className=" rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------> */}
      {/* <--------------------  The Solution Section -------------------> */}

      <section className=" p-5 lg:px-28 py-10">
        <div className=" flex flex-col justify-center items-center gap-7">
          <h1
            data-aos="fade-up"
            className="font-varino text-[2rem] xl:text-[4rem] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            The Solution
          </h1>
          <p
            data-aos="fade-up"
            className=" text-white font-monosans font-[300]  text-justify"
          >
            Empowering our users is at the core of our mission. That's why we've
            developed a comprehensive suite of solutions to address the
            challenges of the digital age. Through intuitive user interfaces,
            robust security measures, and transparent transaction processes, we
            provide a seamless experience for creators, collectors, and
            investors alike. Welcome to a world where challenges become
            opportunities, and together, we shape the future of digital
            ownership.
          </p>
        </div>
      </section>
      {/* <------------------------------------------------------> */}
      {/* <--------------------  Discovery Section -------------------> */}

      <section>
        <div className="grid lg:grid-cols-2">
          <div className=" p-5 lg:p-20 ">
            <div className="p-5  flex flex-col gap-5  justify-start items-start  border border-white rounded-3xl ">
              <h2
                data-aos="fade-up"
                className="font-varino text-[1.5rem] xl:text-[2.5rem] "
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Discovery
              </h2>
              <p
                data-aos="fade-up"
                className=" text-white font-monosans font-[300] text-justify "
              >
                Embark on a journey of exploration and revelation in our
                Discovery section. Here, you'll uncover a treasure trove of
                digital art, music, collectibles, and more, each waiting to be
                discovered and cherished. Dive deep into a diverse collection
                curated by our passionate community of creators and collectors.
                Whether you're seeking inspiration, searching for the next
                addition to your collection, or simply exploring the boundless
                possibilities of the digital world, our Discovery section is
                your gateway to endless discovery and delight. Start your
                journey today and uncover the wonders that await in our vibrant
                marketplace
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center p-5 lg:p-28 ">
            <div
              className="border-4 border-pink-400 p-10 lg:p-16 rounded-3xl"
              data-aos="fade-up"
            >
              {/* <---- Gradient -----> */}
              <div className="absolute ">
                <Image
                  className="xl:w-full -z-10 "
                  alt="gradient1"
                  src={purpleGradient}
                />
              </div>
              <Image
                src={eden}
                alt="project pic"
                objectFit="cover"
                className=" rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------> */}

      <section
        className=" flex justify-center items-center my-10"
        data-aos="fade-up"
      >
        <Image src={steps} alt="development steps" />
      </section>
    </>
  );
};

export default DetailPage;
