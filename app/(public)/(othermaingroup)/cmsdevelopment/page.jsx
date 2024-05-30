"use client";
import React from "react";
import CMS from "@/public/images/cms/cmsLandingImg.png";
import CMSWorkflow from "@/public/images/cms/cmsworkflow.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
import {
  CMSServices,
  cmsSubServices,
} from "@/components/ourservices/Utils/CMS";

function CMSDevelopment() {
  let data = {
    heading: "CMS Development",
    description:
      "When it comes to software development, Deep Ai is the go-to company for both established businesses and leading-edge startups. To ensure that we not only fulfill but also exceed your project needs, our offers include a wide range of full stack services. Modifying current platforms, creating detailed designs, and carrying out complex technological integrations are our forte.With an emphasis on feature-rich interfaces, tight security measures, ideal scalability, and unparalleled speed, our engineers are experts at building strong online and mobile systems. We are well-positioned to handle all of your full stack development requirements thanks to their consistently successful track record. If you want your next project to stand out in today's competitive market, you can rely on Deep Ai to provide accuracy and perfection.",
    img: CMS,
    serviceDesc:
      "Our CMS subservices provide robust content management solutions that streamline content creation, organization, and publication. With user-friendly interfaces and customizable features, we help you manage your digital content efficiently, ensuring seamless collaboration and enhanced workflow.",
    SubServices: cmsSubServices,
    workflowImg: CMSWorkflow,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: CMSServices,
    solDescription:
      "Our CMS solutions empower businesses across industries to manage digital content efficiently, with user-friendly interfaces and customizable features for seamless content creation, organization, and publication.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default CMSDevelopment;
