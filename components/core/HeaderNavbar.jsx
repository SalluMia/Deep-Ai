"use client";
import { SelectedIcon } from "@/icons";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../public/svgs/Logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Links from "./HeaderLinks";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    id: 1,
    name: "GENERATIVE AI",
    subservice: [
      "Generative AI Development",
      "Natural Language Processing (NLP)",
      "AI Chatbot Development",
      "Retrieval-Augmented Generation (RAG)",
    ],
    link: "/generativeai",
  },
  {
    id: 2,
    name: "WEB DEVELOPMENT",
    subservice: [
      "Front End Development",
      "Backend Development",
      "Modern Saas Applications",
    ],
    link: "/fullstackdevelopment",
  },
  {
    id: 3,
    name: "MOBILE APP DEVELOPMENT",
    subservice: ["Custom App Development", "Flutter App Development"],
    link: "/mobileappdevelopment",
  },
  {
    id: 4,
    name: "BLOCKCHAIN",
    subservice: [
      "Generative AI Development",
      "Natural Language Processing (NLP)",
      "AI Chatbot Development",
      "Retrieval-Augmented Generation (RAG)",
    ],
    link: "/blockchain",
  },
  {
    id: 5,
    name: "WEB 3.0 METAVERSE",
    subservice: [
      "Generative AI Development",
      "Natural Language Processing (NLP)",
      "AI Chatbot Development",
      "Retrieval-Augmented Generation (RAG)",
    ],
    link: "/webandmetaverse",
  },
  {
    id: 6,
    name: "UI/UX DESIGN",
    subservice: [
      "Generative AI Development",
      "Natural Language Processing (NLP)",
      "AI Chatbot Development",
      "Retrieval-Augmented Generation (RAG)",
    ],
    link: "/uiuxdesign",
  },
  {
    id: 7,
    name: "CMS DEVELOPMENT",
    subservice: [
      "Wordpress Development",
      "Shopify Development",
      "Ecommerce Web Development",
      "QA/Testing Services",
    ],
    link: "/cmsdevelopment",
  },
  {
    id: 8,
    name: "DIGITAL MARKETING",
    subservice: [
      "Generative AI Development",
      "Natural Language Processing (NLP)",
      "AI Chatbot Development",
      "Retrieval-Augmented Generation (RAG)",
    ],
    link: "/digitaldevelopment",
  },
  // {
  //   id: 8,
  //   name: "WORDPRESS PLUGIN",
  //   subservice: [
  //     "Generative AI Development",
  //     "Natural Language Processing (NLP)",
  //     "AI Chatbot Development",
  //     "Retrieval-Augmented Generation (RAG)",
  //   ],
  //   link: "/wordpressplugindevelopment",
  // },
];
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const ref = useRef();
  const serviceRef = useRef();

  const [more, setMore] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setMore(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const SettingMenu = () => {
    setMore((prev) => !prev);
  };
  useEffect(() => {
    setSelectedService(services[0]);
  }, []);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="w-[120px] h-[45px] sm:w-[130px] sm:h-[50px] xl:w-[161.461px] xl:h-[72.95px] lg:w-[140px] lg:h-[72.95px] md:w-[161.461px] md:h-[72.95px]"
          />
        </Link>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-10"
          aria-controls="navbar-default"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8 text-gray-400" />
        </button>

        <div
          className={`w-full lg:block lg:w-auto ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="font-monospace font-medium justify-center items-center space-y-4 lg:space-y-0 flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 "
            // onClick={closeDropdown}
          >
            <Links
              SettingMenu={SettingMenu}
              ref={ref}
              more={more}
              closeDropdown={closeDropdown}
            />

            <div className="block lg:hidden cursor-pointer">
              <div className="bg-[#00A7E1] hover:bg-[#00749C] focus:outline-none focus:ring focus:ring-[#00A7E1] transition-colors duration-300 px-[30px] py-[7px] rounded-3xl flex justify-center items-center">
                <p className="text-[20px] font-monosans text-[#fff]">
                  Get A Quote
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/getQuotes" className="lg:block hidden cursor-pointer">
          <div className="bg-[#00A7E1] hover:bg-[#00749C] focus:outline-none focus:ring focus:ring-[#00A7E1] transition-colors duration-300 lg:px-[28px] lg:py-[6px] xl:px-[30px] xl:py-[7px] rounded-3xl flex justify-center items-center">
            <p className="lg:text-[18px] xl:text-[20px] font-monosans text-[#fff]">
              Get A Quote
            </p>
          </div>
        </Link>
      </div>
      {more && (
        <div className="w-full  flex justify-center ">
          <div
            className="bg-white backdrop-blur-lg md:w-3/4 w-11/12 mx-auto  z-10 font-monosans group-hover:text-gray-300 transition-colors duration-300 lg:space-y-3 xl:space-y-3 flex flex-col  border rounded-lg absolute top-24 "
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <div className=" text-white  flex flex-col items-center py-8">
              <div className="container mx-auto p-4 flex flex-col md:flex-row">
                {/* Left side */}
                <div className="md:w-1/3 p-4 mr-6">
                  <h2 className="text-3xl font-bold mb-8 font-varino">
                    SERVICES
                  </h2>
                  <div className=" w-full h-auto bg-cover bg-center rounded-lg mb-4">
                    <img
                      className="object-cover border-2 rounded-lg"
                      src="/images/generativeai/service-image.png"
                      alt="serviceImage"
                    />
                  </div>
                  <p className="text-sm md:mt-8 mt-0 opacity-85">
                    Explore our comprehensive services tailored to your needs.
                    We excel in providing industry-standard solutions in
                    printing and typesetting.
                  </p>
                </div>

                {/* Right side */}
                <div className="md:w-4/5 p-4">
                  <h2 className="text-3xl font-bold mb-6 font-varino">
                    SERVICES
                  </h2>
                  <ul className=" flex flex-col sm:flex-row ">
                    <div className="space-y-4">
                      {services.map((service, index) => (
                        <li
                          key={index}
                          className=" flex md:flex-row flex-col justify-between md:items-center item-start md:gap-0 gap-3  "
                        >
                          <div
                            className="group relative hover:cursor-pointer"
                            ref={serviceRef}
                            onMouseEnter={() => setSelectedService(service)}
                          >
                            <Link onClick={SettingMenu} href={service?.link}>
                              <span className="font-varino inline-block relative opacity-85 text-sm">
                                {service.name}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent  transition-all duration-300"></span>
                              </span>
                            </Link>
                            <div
                              className={`absolute w-full -bottom-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                                selectedService?.id === service.id
                                  ? "opacity-100"
                                  : ""
                              }`}
                            >
                              <SelectedIcon />
                            </div>
                          </div>
                        </li>
                      ))}
                    </div>
                    <div className="flex flex-col justify-start items-start sm:mt-0 mt-5">
                      {selectedService?.subservice?.map((item, index) => {
                        return (
                          <div key={index} className="flex gap-3 items-center">
                            <IoIosArrowRoundForward className="text-3xl opacity-75" />
                            <Link
                              href={selectedService?.link}
                              onClick={SettingMenu}
                              className="font-monosans text-sm opacity-75 text-start"
                            >
                              {item}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
