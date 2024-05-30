"use client";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export const List = [
  {
    jobType: "Full Time",
    jobTitle: "UI/UX Designer",
    location: "Rawalpindi",
    pay: "Rs 50000 a month",
    hiringType: "Urgent Hiring",
    description:
      "Join our team as a UI/UX Designer to create intuitive and engaging user interfaces for our digital products. You'll collaborate with developers and product managers to enhance user experience.",
    responsibilities:
      "Design and prototype user interfaces for web and mobile applications. Conduct user research and usability testing. Collaborate with cross-functional teams to deliver high-quality products.",
    requirements:
      "Proven experience as a UI/UX Designer with a strong portfolio. Proficiency in design tools like Adobe XD, Sketch, or Figma. Excellent communication and teamwork skills.",
  },
  {
    jobType: "Full Time",
    jobTitle: "UI/UX Designer",
    location: "Rawalpindi",
    pay: "Rs 50000 a month",
    hiringType: "Urgent Hiring",
    description:
      "We are looking for a creative UI/UX Designer to join our team. You will design user interfaces and user experiences for our innovative products.",
    responsibilities:
      "Develop wireframes, prototypes, and visual designs. Conduct user testing and gather feedback. Work closely with developers to ensure design feasibility.",
    requirements:
      "Experience in UI/UX design with a solid portfolio. Skilled in design software like Adobe Creative Suite, Sketch, or Figma. Strong understanding of user-centered design principles.",
  },
  {
    jobType: "Full Time",
    jobTitle: "UI/UX Designer",
    location: "Rawalpindi",
    pay: "Rs 50000 a month",
    hiringType: "Urgent Hiring",
    description:
      "Exciting opportunity for a UI/UX Designer to join our dynamic team. You will be responsible for crafting visually appealing and user-friendly interfaces.",
    responsibilities:
      "Create and implement innovative design solutions. Conduct user research and usability studies. Collaborate with product managers and developers to refine user experiences.",
    requirements:
      "Demonstrated experience in UI/UX design with a robust portfolio. Proficiency in tools like Sketch, Adobe XD, or Figma. Excellent problem-solving and communication skills.",
  },
];

function JobDescription() {
  useEffect(() => {
    Aos.init();
  }, []);

  const route = useRouter();
  const handleApply = () => {
    route.push("/career/job/jobapplication");
  };

  return (
    <div className="mb-20  ">
      <h1
        data-aos="fade-up"
        className="font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center px-10 py-5 sm:py-8 lg:py-10 sm:px-0"
        style={{
          background: "linear-gradient(to bottom, white, gray)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Job Description
      </h1>
      <div>
        {List.map((value, index) => {
          return (
            <section
              key={index}
              className="text-white px-5 sm:px-12 lg:px-20 text-[12px] sm:text-[14px] xl:text-[18px] font-monosans"
            >
              <div>
                <p
                  className="flex flex-col gap-1 sm:gap-2 my-2"
                  data-aos="fade-up"
                >
                  <span>{value.jobType}</span>
                  <span>{value.jobTitle}</span>
                  <span>{value.location}</span>
                  <span>{value.pay}</span>
                  <span>{value.hiringType}</span>
                </p>
              </div>
              <div
                className="my-5 flex flex-col gap-4 sm:gap-3 lg:gap-5"
                data-aos="fade-up"
              >
                <p>{value.description}</p>
                <div>
                  <h1 className="font-bold" data-aos="fade-up">
                    Responsibilities
                  </h1>
                  <p>{value.responsibilities}</p>
                </div>
                <div>
                  <h1 className="font-bold" data-aos="fade-up">
                    {" "}
                    Requirements
                  </h1>
                  <p>{value.requirements}</p>
                </div>
              </div>
              <div
                className="flex justify-center my-14 sm:my-16 lg:my-20"
                data-aos="fade-up"
              >
                <button
                  className=" text-center text-white text-[16px] lg:text-lg font-medium font-monosans capitalize  w-full sm:w-[250px] h-[62px] px-6 py-4 bg-sky-500 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer"
                  onClick={handleApply}
                >
                  Apply Now
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default JobDescription;
