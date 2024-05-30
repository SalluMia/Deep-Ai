import Anroid from "../../../public/images/mApp/Anroid.png";
import Ios from "../../../public/images/mApp/Ios.png";
import native from "../../../public/images/mApp/native.png";
import customSubService from "@/public/images/mApp/customSubService.png";
import flutterSubService from "@/public/images/mApp/flutterSubService.png";
export const MobileAppServices = [
  {
    id: 1,
    icon: Anroid,
    title: "Android",
  },
  {
    id: 2,
    icon: Ios,
    title: "IOS",
  },
  {
    id: 3,
    icon: native,
    title: "React Native",
  },
];
export const mobileSubServices = [
  {
    id: 1,
    title: "Custom App Development",
    description:
      "Our custom app development crafts tailored solutions, optimizing functionality and user experience for seamless integration and efficient operations.",
    image: customSubService,
    click: "/generativeai",
  },
  {
    id: 2,
    title: "Flutter App Development",
    description:
      "Flutter app development offers cross-platform solutions with high performance and native-like user experiences. Reach wider audiences efficiently with Flutter.",
    image: flutterSubService,
    click: "/fullstackdevelopment",
  },
];
