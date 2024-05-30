"use client";
import React from "react";
import BlockChain from "../../../../public/images/detailpagesimages/blockchain.png";
import DetailComponents from "@/components/detailpages/DetailComponents";
import workflowImg from "@/public/images/workflow.png";
import {
  BlockChainService,
  blockchainSubServices,
} from "@/components/ourservices/Utils/BlockChain";
import {
  solItemDetails,
  solItems,
} from "@/components/ourservices/Utils/SolutionItems";
import { generativeAiFaqData } from "@/components/ourservices/Utils/FAQS";
function Blockchain() {
  let data = {
    heading: "Blockchain",
    description:
      "Keeping up with the latest developments in blockchain technology is essential for long-term success and growth. With the help of our team of blockchain professionals, businesses like yours can confidently and precisely traverse the intricacies of this revolutionary technology.If you're looking to find ways to simplify your processes, increase productivity, and open up new income sources, our universal blockchain consulting services are here to help. In order to ensure smooth integration and maximum effect, we use our extensive technical knowledge and industry-leading techniques to create customized solutions that meet your specific needs. Our advance  strategy ensures that your business has all the resources it needs to succeed in the blockchain ecosystem, from installation to continuous support and maintenance. This will provide you a permanent advantage and help you succeed in the market.",
    img: BlockChain,
    serviceDesc:
      "Our blockchain subservices ensure secure, transparent transactions. We provide cutting-edge solutions for all your blockchain needs, enhancing trust and efficiency.",
    SubServices: blockchainSubServices,
    workflowImg: workflowImg,
    techDesciption:
      "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
    technologies: BlockChainService,
    solDescription:
      "Our blockchain solutions revolutionize industries by ensuring secure, transparent transactions and decentralized data management, enhancing trust, and efficiency across various sectors.",
    solItems: solItems,
    solItemDetails: solItemDetails,
    faqsData: generativeAiFaqData,
  };
  return <DetailComponents data={data} />;
}

export default Blockchain;
