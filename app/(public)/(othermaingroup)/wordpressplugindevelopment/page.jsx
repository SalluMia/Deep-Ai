"use client";
import React from "react";
import Wordpress from "@/public/images/detailpagesimages/wordpressimage.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import uiuxWF from "@/public/images/uiux/UIUXWF.png";
import { UIUXServices } from "@/components/ourservices/Utils/UIUXItems";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
import { mobileSubServices } from "@/components/ourservices/Utils/MobileApp";
function WordpressDevelopment() {
  let data = {
    heading: "UI/UX design",
    description:
      "Creating THE design that shares, operates, and converts is at the core of any digital product, and we at Alright Tech know this better than anyone. From the smoothness of a website to the tactile quality of an app button, our method guarantees that every piece looks great and works well.At Alright Tech, our design team goes beyond creating interfaces. We masterfully create user experiences that combine practicality with emotional appeal. In order to establish credibility and create an emotional connection between your product and its consumers, we use captivating visual storytelling. With every project, our goal is to convert ordinary interactions into unforgettable experiences that people will enjoy and want to come back for more of. Allow us to enhance your product by creating a design that reflects your company objectives and captivates your target market, making routine interactions into exceptional ones.",
    img: Wordpress,
    serviceDesc:
      "Our mobile app services provide end-to-end development for iOS and Android platforms. We create user-friendly, high-performance apps tailored to meet your business needs and drive customer engagement.",
    SubServices: mobileSubServices,
    workflowImg: uiuxWF,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: UIUXServices,
    solDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default WordpressDevelopment;
