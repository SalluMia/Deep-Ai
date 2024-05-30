"use client";
import React from "react";
import Digital from "@/public/images/digitalMarketing/landing.png";
import DigitalWF from "@/public/images/digitalMarketing/workflow.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import { FullStackServices } from "@/components/ourservices/Utils/FullStack";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
import {
  digitalSubServices,
  digitalTechnologies,
} from "@/components/ourservices/Utils/Digital";

function DigitalDevelopment() {
  let data = {
    heading: "Digital Marketing",
    description:
      "When it comes to software development, Deep Ai is the go-to company for both established businesses and leading-edge startups. To ensure that we not only fulfill but also exceed your project needs, our offers include a wide range of full stack services. Modifying current platforms, creating detailed designs, and carrying out complex technological integrations are our forte.With an emphasis on feature-rich interfaces, tight security measures, ideal scalability, and unparalleled speed, our engineers are experts at building strong online and mobile systems. We are well-positioned to handle all of your full stack development requirements thanks to their consistently successful track record. If you want your next project to stand out in today's competitive market, you can rely on Deep Ai to provide accuracy and perfection.",
    img: Digital,
    serviceDesc:
      "Our digital development service crafts innovative solutions, blending creativity and technology to elevate your digital presence and drive growth effectively.",
    SubServices: digitalSubServices,
    workflowImg: DigitalWF,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: digitalTechnologies,
    solDescription:
      "Our digital marketing solutions drive growth across industries, leveraging innovative strategies and cutting-edge technologies to maximize online visibility and audience engagement.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default DigitalDevelopment;
