import React from "react";
import WorkFlowImage from "../../public/images/workflowImages/WorkflowImage.png";
import Heading from "../core/Heading";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <>
      <section className=" relative flex flex-col items-center space-y-3 mt-[30px] lg:mt-[60px] mx-auto my-6">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col space-y-4 items-center ">
            <Heading>OUR WORKFLOW</Heading>
            <p className="text-[16px] xl:text-[18px] lg:text-[18px] text-center font-monosans text-white font-light w-10/12 md:w-[80%] xl:w-[100%]">
              Our Professional Workflow, Certifications, Awards and Numbers will
              prove the quality we offer.
            </p>
          </div>

          <Image
            className="w-[360px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1000px] object-contain  select-none no_drag"
            alt="WorkflowImage"
            src={WorkFlowImage}
          />
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
