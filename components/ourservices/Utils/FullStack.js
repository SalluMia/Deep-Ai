import laravel from "../../../public/images/fullStack/laravel.png";
import mysql from "../../../public/images/fullStack/mysql.png";
import mern from "../../../public/images/fullStack/mern.png";
import expressJs from "../../../public/images/fullStack/js.png";
import mongodb from "../../../public/images/fullStack/mongodb.png";
import php from "../../../public/images/fullStack/php.png";
import nodejs from "../../../public/images/fullStack/nodejs.png";
import reactJs from "../../../public/images/fullStack/reactjs.png";
import postman from "../../../public/images/fullStack/postman.png";
import frontendSubService from "@/public/images/fullStack/frontendSubService.png";
import backendSubService from "@/public/images/fullStack/backendSubService.png";
import SaasSubService from "@/public/images/fullStack/SaasSubService.png";
export const FullStackServices = [
  {
    id: 1,
    icon: laravel,
    title: "Laravel",
  },
  {
    id: 2,
    icon: mysql,
    title: "MYSQL",
  },
  {
    id: 3,
    icon: mern,
    title: "MERN",
  },
  {
    id: 4,
    icon: expressJs,
    title: "Express JS",
  },
  {
    id: 5,
    icon: mongodb,
    title: "Mongo DB",
  },
  {
    id: 6,
    icon: php,
    title: "PHP",
  },
  {
    id: 7,
    icon: nodejs,
    title: "Node js",
  },
  {
    id: 8,
    icon: reactJs,
    title: "React js",
  },
  {
    id: 9,
    icon: postman,
    title: "Postman js",
  },
];
export const FullStackSubServices = [
  {
    id: 1,
    title: "Front-end Development",
    description:
      "Our front-end development services create intuitive, responsive user interfaces. Elevate user experiences with sleek, dynamic designs.",
    image: frontendSubService,
    click: "/generativeai",
  },
  {
    id: 2,
    title: "Back-end Development",
    description:
      "Our back-end development services build robust, scalable server-side solutions. Ensure seamless functionality and data management for your applications.",
    image: backendSubService,
    click: "/fullstackdevelopment",
  },
  {
    id: 3,
    title: "Modern SaaS Applications",
    description:
      "Our modern SaaS applications deliver scalable, efficient solutions for diverse business needs. Embrace innovation with flexible, cloud-based software.",
    image: SaasSubService,
    click: "/blockchain",
  },
];
