"use client";
import React from "react";
import GenAI from "@/public/images/generativeai/generativeAI.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import AIworkflow from "@/public/images/generativeai/aiworkflow.png";
import {
  GenAi,
  GenAiSubServices,
} from "../../../../components/ourservices/Utils/GenAi";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
function GenerativeAI() {
  let data = {
    heading: "Generative AI",
    description:
      "Experience the future with our pioneering Generative AI technologies, designed to streamline your company operations. Custom artificial intelligence solutions that make use of your one-of-a-kind data to improve productivity and simplify operations are our forte here at Deep Ai. To guarantee increased productivity without the hassle of migration, our team of talented engineers is an expert at smoothly integrating the latest technologies into your company framework. These models include ChatGPT, DALL-E, and MidJourney. Our Generative AI services may change and adapt to meet your changing requirements, whether that's automating complicated processes or improving data-driven initiatives. Take the lead in innovation by empowering your organization with Deep Ai.",
    img: GenAI,
    serviceDesc:
      "Our generative AI services create innovative content across various industries. Harnessing advanced algorithms, we deliver unique solutions for creative challenges and data-driven insights, driving efficiency and innovation.",
    SubServices: GenAiSubServices,
    workflowImg: AIworkflow,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: GenAi,
    solDescription:
      "Our generative AI solutions harness advanced algorithms to create original and diverse content across various domains, driving innovation and efficiency in creative processes and problem-solving.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default GenerativeAI;
