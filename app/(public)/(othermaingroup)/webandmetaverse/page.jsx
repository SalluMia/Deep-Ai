"use client";
import React from "react";
import Meta from "@/public/images/detailpagesimages/metaverse.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import webWF from "@/public/images/webandmetaverse/webWF.png";
import {
  WebMetaverseServices,
  webMetaSubServices,
} from "@/components/ourservices/Utils/WebAndMetaverse";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
function WebandMetaverse() {
  let data = {
    heading: "Web 3.0 and Metaverse",
    description:
      "To help you maximize the next wave of digital engagement, we provide state-of-the-art Web 3.0 and Metaverse development services. In the ever-changing Metaverse, we assist you in bringing your creative visions to life, whether that's via the development of innovative virtual markets, the creation of ground-breaking games, or the modification of human interaction. Our expert staff provides you with the knowledge, abilities, and modern instruments you need to thrive in today's dynamic digital landscape.Envision yourself in a cosmos where your ideas may manifest. We design deep, frictionless experiences that transcend digital life in order to establish genuine connections and reimagine business models. We invite you to join us in rejoicing in the digital frontier and in expanding the boundaries of augmented and virtual worlds, where each interaction is an opportunity for innovation and progress. Embark on your journey in this innovative world, where you may dream big, start little, and achieve great success.",
    img: Meta,
    serviceDesc:
      "Our web and metaverse services integrate traditional web development with immersive virtual experiences. We create engaging, interactive environments that redefine user interaction and elevate online presence.",
    SubServices: webMetaSubServices,
    workflowImg: webWF,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: WebMetaverseServices,
    solDescription:
      "Our web and metaverse solutions merge traditional web development with immersive experiences, leveraging virtual environments to enhance user engagement and redefine online interactions for the future.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default WebandMetaverse;
