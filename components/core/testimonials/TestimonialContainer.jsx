// TestimonialContainer.jsx
import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./styles.css";
import { testimonialsData } from "@/components/home/sections/testimonials";

const TestimonialContainer = () => {
  return (
    <div className="flex items-center justify-start gap-4 overflow-x-auto w-full mx-auto scrollbar-none">
      {testimonialsData.map((testimonials, index) => (
        <TestimonialCard
          key={index}
          img={testimonials.img}
          review={testimonials.feedback}
          username={testimonials.userName}
          country={testimonials.country}
          index={index}
        />
      ))}
    </div>
  );
};

export default TestimonialContainer;
