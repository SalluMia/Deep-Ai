
import Whyus from "@/components/about/Whyus";
import { OffersSection } from "@/components/home/sections";
// import DevelopCareer from "@/components/ourservices/DevelopCareer";
import OurSevices from "@/components/ourservices/OurSevices";
import Technologies from "@/components/ourservices/Technologies";
import React from "react";

import GetQuotesComponent from "@/components/ourservices/GetQuotesComponent";
import WhyChooseUs from "@/components/ourservices/WhyChooseUs";

const ServicesPage = () => {
  return (
    <>
      <OurSevices />
      <OffersSection />
      <Technologies />
      <WhyChooseUs />
      <Whyus />
      {/* <DevelopCareer/> */}
      <GetQuotesComponent />
    </>
  );
};

export default ServicesPage;

