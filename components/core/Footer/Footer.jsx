"use client";
import Image from "next/image";
import React from "react";

import { FaWhatsapp } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Pointingup from "../../../public/images/pointingup.png";
import phone from "../../../public/svgs/phone.svg";
import clock from "../../../public/svgs/clock.svg";
import email from "../../../public/svgs/email.svg";
import Logo from "../../../public/images/deep-ai.png";
import linkedIn from "../../../public/svgs/linkedin.svg";
import facebook from "../../../public/svgs/facebook.svg";
import whatsapp from "../../../public/svgs/whatsapp.svg";
import instagram from "../../../public/svgs/insta.svg";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import RightGradient from "../../../public/svgs/right.svg";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
    console.log("working");
  };

  const List = [
    {
      key: 1,
      name: "Privacy Policy",
      page: "/privacypolicy",
    },
    {
      key: 2,
      name: "Terms and Conditions",
      page: "/termsandconditions",
    },
  ];
  const services = [
    "GENERATIVE AI",
    "BLOCKCHAIN",
    "MOBILE APP DEVELOPEMENT",
    "WEB 3.0 AND METAVERSE",
    "MODERN SAAS APPLICATIONS",
    "UIUX DESIGN",
    "WORDPRESS PLUGIN DEVELOPEMENT",
  ];
  return (
    <div className="mt-12">
      {/* <---- Gradient -----> */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image
          className="w-[400px] lg:w-[300px] xl:w-full "
          alt="gradient1"
          src={Gradient1}
        />
      </div>
      {/* <---- Gradient -----> */}
      <div className="absolute  right-0 ">
        <Image
          className="w-[400px] lg:w-[300px] xl:w-full "
          alt="gradient1"
          src={RightGradient}
        />
      </div>
      {/* <!-- Footer container --> */}
      <footer className="">
        {/* upper main div in which i hae 3 divs  */}
        <div className=" grid lg:grid-cols-3  lg:gap-5 justify-between">
          {/* <!-- Footer div 1 --> */}
          <div className="flex flex-col items-center lg:items-start gap-8 px-7 z-10">
            <div className="flex gap-2 items-center ">
              <Image
                src={Pointingup}
                alt="Pointingup icon "
                className="h-auto w-12"
              />
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[300] capitilize text-white font-monosans">
                Contact us today!
              </p>
            </div>
            <h1
              className="font-varino text-[26px] sm:text-[35px]  font-[400] text-center lg:text-start"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Have questions? Get in touch!
            </h1>
            <Link
              href={"/contact"}
              className=" text-center text-white text-[16px] lg:text-lg font-medium cursor-pointer font-monosans capitalize  w-full sm:w-[250px] h-[62px] px-6 py-4 bg-sky-500 rounded-[90px] justify-center items-center gap-2.5 inline-flex z-10"
            >
              Contact Us Today
            </Link>
          </div>
          {/* <!-- Footer div 2 --> */}
          <div className="flex flex-wrap justify-center items-center mt-7">
            <div className="w-auto h-auto flex-col justify-start lg:items-start items-center gap-[15px] sm:gap-[15px] inline-flex">
              <div className="justify-start items-center gap-5 inline-flex mb-5">
                <div className="text-white text-md font-medium font-varino capitalize">
                  Services
                </div>
              </div>
              {services?.map((item, index) => (
                <div
                  key={index}
                  className="justify-start items-center inline-flex"
                >
                  <div className="text-white text-md font-medium font-monosans capitalize">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- Footer div 3--> */}
          <div className="flex justify-center items-start mt-12">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-[268px] h-auto flex-col justify-start lg:items-start items-center gap-[15px] sm:gap-[30px] inline-flex">
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-[130px] h-[50px] xl:w-[161.461px] xl:h-[72.95px] lg:w-[140px] lg:h-[72.95px] md:w-[161.461px] md:h-[72.95px]"
                />
                <div className=" flex flex-col justify-start items-center gap-5 ">
                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <div className="w-[30px] h-[30px] relative">
                      <Image src={phone} alt="phone" />
                    </div>
                    <div className="text-white text-md font-medium font-monosans">
                      +92 346 3164772
                    </div>
                  </div>

                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <div className="w-[30px] h-[30px] relative">
                      <Image src={clock} alt="clock" />
                    </div>
                    <div className="text-white text-md font-medium font-monosans">
                      Mon-Sat : 9am - 5pm
                    </div>
                  </div>
                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <div className="w-[30px] h-[30px] relative">
                      <div className="w-[30px] h-[30px] relative">
                        <Image src={email} alt="clock" />
                      </div>
                    </div>
                    <div className="text-white text-md font-medium font-monosans lowercase">
                      info@AlrightTech.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer div */}
        <div className=" p-6 my-3">
          <div className="flex flex-col justify-center gap-3 sm:flex-row h-10 sm:justify-between items-center">
            <div className="text-white text-md font-medium font-monosans lowercase hidden sm:block">
              hr.alrighttech@gmail.com
            </div>
            <div className="h-[19px] justify-center items-start lg:gap-5 xl:gap-8 flex">
              {/* <div className=" flex flex-wrap justify-center items-center gap-5 ">
                <Link
                  href="/"
                  className="text-center text-white text-md font-normal font-monosans  capitalize"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-center text-white text-md font-normal font-monosans  capitalize"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-center text-white text-md font-normal font-monosans  capitalize"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-center text-white text-md font-normal font-monosans  capitalize"
                >
                  Contact
                </Link>
              </div> */}
              {/* <Links /> */}
              <FooterLinks />
            </div>
            <div className="justify-start items-start gap-3 sm:gap-2 lg:gap-3 xl:gap-5 flex">
              <Link
                href="https://www.linkedin.com/company/alright-tech"
                target="blank"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={linkedIn} alt="linkedin" />
              </Link>
              <Link
                href="https://www.facebook.com/AlrightTech"
                target="blank"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=923495209847"
                target="blank"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={whatsapp} alt="whatsapp" />
              </Link>
              <Link
                href="https://www.instagram.com/alrighttech"
                target="blank"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white py-6 px-5 sm:py-8 sm:px-6 mt-8 sm:mt-4 flex flex-col gap-3 items-center  sm:flex-row sm:items-center sm:gap-7 lg:gap-8 xl:gap-10 ">
          <p
            className="text-white text-[10px] sm:text-[12px] xl:text-[14px] font-monosans
          group-hover:text-gray-300 transition-colors duration-300 text-center"
          >
            Copyright © 2024 Tess Payments. All rights reserved
          </p>
          <div className="flex gap-4 sm:gap-6 lg:gap-7 xl:gap-9">
            {List.map((value) => {
              return (
                <Link
                  key={value.key}
                  href={value.page}
                  className="text-white text-[10px] sm:text-[12px]
               xl:text-[14px] font-monosans group-hover:text-gray-300 transition-colors duration-300 text-center"
                >
                  {value.name}
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
      <Link
        href="https://api.whatsapp.com/send?phone=923495209847"
        className="bottom-20 right-10 sm:bottom-14 sm:right-12 fixed bg-[#49E670] rounded-full animate-spin-stop-infinite"
      >
        <FaWhatsapp className="text-5xl text-white p-2" />
      </Link>
    </div>
  );
};

export default Footer;
