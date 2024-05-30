import OpenAi from "../../../public/images/GenAi/OpenAi.png";
import ChatGpt from "../../../public/images/GenAi/ChatGpt.png";
import claude from "../../../public/images/GenAi/CloudAi.png";
import Plam from "../../../public/images/GenAi/PlamAi.png";
import pinecone from "../../../public/images/GenAi/PineCone.png";
import hugging from "../../../public/images/GenAi/hugging.png";
import vision from "../../../public/images/GenAi/visonAi.png";
import genAISubService from "@/public/images/bchain/genAISubService.png";
import NLP from "@/public/images/bchain/NLP.png";
import Chatbot from "@/public/images/bchain/chatbot.png";
import RAG from "@/public/images/bchain/RAG.png";
export const GenAi = [
  {
    id: 1,
    icon: OpenAi,
    title: "Open AI",
  },
  {
    id: 2,
    icon: ChatGpt,
    title: "Chat GPT",
  },
  {
    id: 3,
    icon: claude,
    title: "Cloud 2 AI",
  },
  {
    id: 4,
    icon: Plam,
    title: "PLAM AI",
  },
  {
    id: 5,
    icon: pinecone,
    title: "Pinecone AI",
  },
  {
    id: 6,
    icon: hugging,
    title: "Hagging Face",
  },
  {
    id: 7,
    icon: vision,
    title: "Computer Vision Ai",
  },
];

export const GenAiSubServices = [
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
