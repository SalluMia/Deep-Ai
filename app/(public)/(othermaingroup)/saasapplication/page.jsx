"use client";
import React from "react";
import Saas from "@/public/images/detailpagesimages/saasdevelopment.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import { FullStackServices } from "@/components/ourservices/Utils/FullStack";
import saasWF from "@/public/images/saas/saasWF.png";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
import { mobileSubServices } from "@/components/ourservices/Utils/MobileApp";

function SaasApplication() {
  let data = {
    heading: "Modern SaaS Application",
    description:
      "Businesses rely on SaaS solutions to help them succeed in the digital marketplace by facilitating the development of lightning-fast web and mobile applications, robust application programming interfaces (APIs), and effective data management systems. These solutions are housed on scalable, secure cloud storage, which improves user interface and operations. Tools for market leaders, including advanced data mining and simple integration, are created by our team of experts who also build engines for business success, not only software. Our SaaS development talents enable enterprises to thrive in the digital era by blending imagination with precision, allowing them to attain their maximum potential.",
    img: Saas,
    serviceDesc:
      "Our mobile app services provide end-to-end development for iOS and Android platforms. We create user-friendly, high-performance apps tailored to meet your business needs and drive customer engagement.",
    SubServices: mobileSubServices,
    workflowImg: saasWF,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: FullStackServices,
    solDescription:
      "Our SaaS application solutions provide scalable, cloud-based software tailored to meet diverse business needs, offering flexibility, efficiency, and innovation to drive success in the digital age.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default SaasApplication;
