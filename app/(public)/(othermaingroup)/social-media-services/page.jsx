"use client";
import React, { useEffect } from "react";
import socialImage from "../../../../public/images/socialMediaMarketing/social.jpg";

import Aos from "aos";

import Image from "next/image";
import { HeadingDetail } from "@/components/MenuComponents/headingMenu/HeadingMenu";

function SocialMedia() {
  let pricingData = [
    {
      name: "Basic",
      price: "500",
      type: "monthly",
      services: [
        "Social Channels(Facebook, Instagram)",
        "Social Media Audit",
        "Set Up and Optimization Of Business Page/Profile",
        "Page Management",
        "Weekly 3 Posts",
        "Content Calendar",
        "Content Creation",
        "Hashtag Optimization",
        "Advertisment Campaigns ( Ads Payment Not Included ) Upto $50",
        "Monthly Reporting & Goal Evaluation",
      ],
    },
    {
      name: "Standard",
      price: "750",
      type: "monthly",
      services: [
        "Social Channels(Facebook, Instagram, Twitter)",
        "Social Media Audit",
        "Set Up and Optimization Of Business Page/Profile",
        "Page Management",
        "Weekly 4 Posts",
        "Content Calendar",
        "Content Creation",
        "Hashtag Optimization",
        "Image Alt Text",
        "Community Management",
        "Social Media Engagement Campaigns",
        "Advertisment Campaigns ( Ads Payment Not Included ) Upto $100",
        "Monthly Reporting & Goal Evaluation",
      ],
    },
    {
      name: "Premium",
      price: "1000",
      type: "monthly",
      services: [
        "Social Channels (Facebook, Instagram, Twitter,LinkedIn, Pinterest )",
        "Social Media Audit",
        "Set Up and Optimization Of Business Page/Profile",
        "Page Management",
        "Weekly 5 Posts",
        "Content Calendar",
        "Unlimited Content Creation",
        "Hashtag Optimization",
        "Image Alt Text",
        "Community Management",
        "Reputation Management",
        "Social Media Engagement Campaigns",
        "Advertisment Campaigns ( Ads Payment Not Included ) Upto $200",
        "Monthly Reporting & Goal Evaluation",
      ],
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-2  gap-5 lg:my-10 px-4 sm:px-8 lg:px-0">
        <div className=" flex flex-col gap-7 lg:p-10 xl:p-10 order-2 ">
          <div className=" flex flex-col  gap-5">
            <h1
              data-aos="fade-up"
              className=" font-varino text-[1.5rem] lg:text-[2.1rem] text-white font-[400] capitalize"
            >
              Social Media Marketing
            </h1>
            <p
              data-aos="fade-up"
              className=" font-monosans  text-white text-sm font-thin "
            >
              SR Digital is the top social media advertising agency in Pakistan.
              We offer the best affordable social media marketing & management
              packages and pricing in Pakistan, to our client every month. Our
              social media marketing packages are best for small-scale to
              medium-scale businesses that want to create or improve their
              social and digital presence but have a limited budget. If you are
              looking for affordable social media marketing & management
              packages in Karachi, Pakistan, you have come to the right place.
              We understand that a good social presence is essential for your
              business; that’s why we have created our social media packages to
              give you performance-driven results at very affordable pricing. We
              have social media experts in our agency to consult businesses and
              help them to grow in the digital world. We help them to find more
              potential customers, create brand awareness, advertise their
              products and services, manage their brand reputation and community
              in the social world.
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center order-1 lg:order-2 ">
          <div className="lg:w-3/5 md:4/5 ">
            <Image
              data-aos="fade-up"
              src={socialImage}
              alt="helping grow"
              className="rounded-3xl p-1 w-[100%] max-w-[534px] h-auto"
            />
          </div>
        </div>
      </div>
      <section className="mt-12 sm:mt-24 ">
        <div className="mb-10 sm:mb-20 mt-10 sm:mt-20">
          <HeadingDetail heading={"OUR WORKFLOW"} />
        </div>
        <div class="mx-auto  px-4 sm:px-10    ">
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {pricingData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 rounded-2xl"
                >
                  <div class="flex h-full relative bg-[#111424]   flex-col  mx-auto text-center text-gray-900  rounded-2xl ">
                    <h3 class="mb-4 p-4  rounded-t-2xl  font-varino text-[24px] text-white bg-gradient-to-r from-[#EC66B7] to-[#2D5887]">
                      {item?.name}
                    </h3>

                    <div class="flex justify-center items-baseline my-4 sm:my-8">
                      <span class="mr-2 font-varino text-4xl sm:text-5xl  text-white">
                        ${item.price}
                      </span>
                      <span class="text-gray-500 dark:text-gray-400">
                        /{item?.type}
                      </span>
                    </div>
                    <ul
                      role="list"
                      class="mb-14 space-y-4 text-left p-3 xl:px-8"
                    >
                      {item?.services?.map((service, index) => {
                        return (
                          <li key={index} class="flex items-center space-x-3 ">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className="text-white font-monosans ">
                              {service}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="absolute bottom-0 flex items-center justify-center w-full">
                      <button
                        href="#"
                        class="text-white w-full  m-6 bg-gradient-to-b from-[#EC66B7] to-[#2D5887] mb-3 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialMedia;
