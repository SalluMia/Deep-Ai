"use client";
import React from "react";
import MobileApp from "../../../../public/images/detailpagesimages/mobileapp.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import mobileAppWF from "/public/images/mobileAppWF.png";
import {
  MobileAppServices,
  mobileSubServices,
} from "@/components/ourservices/Utils/MobileApp";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";

function GenerativeAI() {
  let data = {
    heading: "Mobile App development",
    description:
      "In today's lightning-fast digital world, a powerful mobile app is very essential. Here at Deep Ai, we know how important it is to provide your audience with attractive mobile experiences that drive company growth.No matter what you're looking for—iPhone or Android native apps, cross-platform solutions, or jaw-dropping user experience designs—our team of professionals can make it happen. We make sure your mobile app is beautiful to look at, but also functional, by putting an emphasis on quantifiable metrics and ongoing optimization. This will lead to increased engagement, retention, and revenue for your company.",
    img: MobileApp,
    serviceDesc:
      "Our mobile app services provide end-to-end development for iOS and Android platforms. We create user-friendly, high-performance apps tailored to meet your business needs and drive customer engagement.",
    SubServices: mobileSubServices,
    workflowImg: mobileAppWF,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: MobileAppServices,
    solDescription:
      "Our mobile app solutions offer cutting-edge development for iOS and Android platforms, ensuring intuitive user experiences and seamless functionality to drive engagement and growth for businesses across industries.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default GenerativeAI;
