"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { HeadingDetail } from "../MenuComponents/headingMenu/HeadingMenu";
import ImageMenu from "@/components/MenuComponents/ImageMenu/ImageMenu";
import AIworkflow from "@/public/images/generativeai/aiworkflow.png";
import { Testimonials } from "@/components/home/sections";
import Technologies from "@/components/ourservices/Technologies";
import Image from "next/image";
import Card1 from "@/public/images/detailpagesimages/card1.png";
import Card2 from "@/public/images/detailpagesimages/card2.png";
import Card3 from "@/public/images/detailpagesimages/card3.png";
import { GenAi } from "../ourservices/Utils/GenAi";
import OurSolution from "../ourservices/OurSolution";
import { solItems } from "../ourservices/Utils/SolutionItems";
import FAQS from "../ourservices/FAQS";
import SubService from "../ourservices/SubServices";
function DetailComponents({
  data: {
    heading,
    description,
    img,
    serviceDesc,
    SubServices,
    workflowImg,
    techDesciption,
    technologies,
    solDescription,
    solItems,
    solItemDetails,
    faqsData,
  },
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh(); // Refresh AOS to make sure it's aware of all the elements
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-2  gap-5 lg:my-10 px-4 sm:px-8 lg:px-0">
        <div className=" flex flex-col gap-7 lg:p-10 xl:p-10 order-2 ">
          <div className=" flex flex-col  gap-5">
            <h1
              data-aos="fade-up"
              className=" font-varino text-[1.5rem] lg:text-[2.1rem] text-white font-[400] capitalize"
            >
              {heading}
            </h1>
            <p
              data-aos="fade-up"
              className=" font-monosans  text-white text-sm font-thin "
            >
              {description}
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center order-1 lg:order-2 ">
          <div className="lg:w-3/5 md:4/5 ">
            <Image
              data-aos="fade-up"
              src={img}
              alt="helping grow"
              className="rounded-3xl p-1 w-[100%] max-w-[534px] h-auto"
            />
          </div>
        </div>
      </div>
      <SubService data={SubServices} desc={serviceDesc} />
      <div className="mb-10 mt-10 sm:mt-20">
        <HeadingDetail heading={"OUR WORKFLOW"} />
      </div>
      <div className="flex justify-center" data-aos="fade-up">
        <Image
          className="px-4 sm:px-8 lg:px-12 w-[320px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] object-contain  select-none no_drag"
          alt="WorkflowImage"
          width={1000}
          height={1000}
          src={workflowImg}
        />
      </div>

      <div>
        <Technologies data={technologies} techDesciption={techDesciption} />
      </div>
      <div>
        <OurSolution
          solItems={solItems}
          solItemDetails={solItemDetails}
          solDescription={solDescription}
        />
      </div>
      <div>
        {" "}
        <FAQS faqsData={faqsData} />
      </div>
      <div>
        {" "}
        <Testimonials />
      </div>
    </div>
  );
}

export default DetailComponents;
