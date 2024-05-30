import contracts from "../../../public/images/bchain/contracts.png";
import daaps from "../../../public/images/bchain/daaps.png";
import defi from "../../../public/images/bchain/defi.png";
import dex from "../../../public/images/bchain/dex.png";
import ether from "../../../public/images/bchain/ether.png";
import ethereum from "../../../public/images/bchain/ethereum.png";
import hardhat from "../../../public/images/bchain/hardhat.png";
import genAISubService from "@/public/images/bchain/genAISubService.png";
import NLP from "@/public/images/bchain/NLP.png";
import Chatbot from "@/public/images/bchain/chatbot.png";
import RAG from "@/public/images/bchain/RAG.png";
export const BlockChainService = [
  {
    id: 1,
    icon: contracts,
    title: "Smart Contracts",
  },
  {
    id: 2,
    icon: daaps,
    title: "DAPPS",
  },
  {
    id: 3,
    icon: defi,
    title: "DeFi",
  },
  {
    id: 4,
    icon: dex,
    title: "DEX",
  },
  {
    id: 5,
    icon: ether,
    title: "ether.js",
  },
  {
    id: 6,
    icon: ethereum,
    title: "Ethereum",
  },
  {
    id: 7,
    icon: hardhat,
    title: "Hardhat",
  },
];
export const blockchainSubServices = [
  {
    id: 1,
    title: "Generative AI Development",
    description:
      "Our blockchain subservices offer secure, transparent transactions with cutting-edge solutions, enhancing trust and efficiency in your operations.",
    image: genAISubService,
    click: "/generativeai",
  },
  {
    id: 2,
    title: "Natural language processing (NLP)",
    description:
      "Our NLP subservices enhance text analysis and understanding, providing advanced solutions for efficient language processing and communication.",
    image: NLP,
    click: "/fullstackdevelopment",
  },
  {
    id: 3,
    title: "AI chatbot Development",
    description:
      "Our AI chatbot development services create intelligent, responsive chatbots, enhancing customer engagement and streamlining interactions.",
    image: Chatbot,
    click: "/blockchain",
  },
  {
    id: 4,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Our RAG subservices combine retrieval and generation, delivering precise, context-aware responses for enhanced information processing.",
    image: RAG,
    click: "/mobileappdevelopment",
  },
];
