import wordpress from "../../../public/images/cms/wordpress.png";
import shopify from "../../../public/images/cms/shopify.png";
import nextjs from "../../../public/images/cms/nextjs.png";
import wordpressSubService from "@/public/images/cms/wordpressSubService.png";
import shopifySubService from "@/public/images/cms/shopifySubService.png";
import ecommerceSubService from "@/public/images/cms/ecommerceSubService.png";
import QASubService from "@/public/images/cms/QASubService.png";
export const CMSServices = [
  {
    id: 1,
    icon: wordpress,
    title: "Wordpress",
  },
  {
    id: 2,
    icon: shopify,
    title: "Shopify",
  },
  {
    id: 3,
    icon: nextjs,
    title: "Next.js",
  },
];
export const cmsSubServices = [
  {
    id: 1,
    title: "WordPress Development",
    description:
      "Our WordPress development services create customized, responsive websites. Enhance your online presence with scalable, robust solutions.",
    image: wordpressSubService,
    click: "/generativeai",
  },
  {
    id: 2,
    title: "Shopify Development",
    description:
      "Our Shopify development services build customized, responsive e-commerce stores. Boost your online sales with scalable, robust solutions.",
    image: shopifySubService,
    click: "/fullstackdevelopment",
  },
  {
    id: 3,
    title: "Ecommerce Web Development",
    description:
      "Our ecommerce web development services create customized, responsive online stores. Enhance your business with scalable, robust solutions.",
    image: ecommerceSubService,
    click: "/blockchain",
  },
  {
    id: 4,
    title: "QA/Testing Services",
    description:
      "Our QA/Testing services ensure your software's quality and reliability through rigorous testing, identifying and fixing issues efficiently.",
    image: QASubService,
    click: "/mobileappdevelopment",
  },
];
