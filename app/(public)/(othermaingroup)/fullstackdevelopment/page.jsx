"use client";
import React from "react";
import FullStack from "@/public/images/detailpagesimages/fullstack.png";
import FullStackWorkflow from "@/public/images/fullStack/fullStackWorkflow.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import {
  FullStackServices,
  FullStackSubServices,
} from "@/components/ourservices/Utils/FullStack";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";

function FullStackDevelopment() {
  let data = {
    heading: "Full stack web development",
    description:
      "When it comes to software development, Deep Ai is the go-to company for both established businesses and leading-edge startups. To ensure that we not only fulfill but also exceed your project needs, our offers include a wide range of full stack services. Modifying current platforms, creating detailed designs, and carrying out complex technological integrations are our forte.With an emphasis on feature-rich interfaces, tight security measures, ideal scalability, and unparalleled speed, our engineers are experts at building strong online and mobile systems. We are well-positioned to handle all of your full stack development requirements thanks to their consistently successful track record. If you want your next project to stand out in today's competitive market, you can rely on Deep Ai to provide accuracy and perfection.",
    img: FullStack,
    serviceDesc:
      "Our web development services offer tailored solutions, combining creativity and functionality to deliver engaging websites that drive results effectively.",
    SubServices: FullStackSubServices,
    workflowImg: FullStackWorkflow,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: FullStackServices,
    solDescription:
      "Our full-stack solutions cater to various industries, ensuring comprehensive support across diverse sectors for seamless integration and optimized operations.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default FullStackDevelopment;
