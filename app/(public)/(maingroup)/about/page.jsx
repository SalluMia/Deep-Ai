import Banner from "@/components/about/Banner";
import Experts from "@/components/about/Experts";
import HelpingGrow from "@/components/about/HelpingGrow";
import MissionAndVision from "@/components/about/MissionAndVision";

import OurNumbers from "@/components/about/OurNumbers";
import TeamLeads from "@/components/about/TeamLeads";
import Whyus from "@/components/about/Whyus";
// import ContactUs from "@/components/core/ContactUs";

import React from "react";

const AboutPage = () => {

  return (
    <div>
      <Banner />

      <HelpingGrow />
      <MissionAndVision />
      <OurNumbers />
      <Experts />
      <TeamLeads />
      <Whyus />
    </div>
  );
};

export default AboutPage;
