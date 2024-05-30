"use client";
import React from "react";
import HeadingMenu from "@/components/MenuComponents/headingMenu/HeadingMenu";
import Tagline from "@/components/MenuComponents/ParagraphTagLine/Tagline";
import CoursePhoto from "@/public/images/course/coursesphoto.png";
import ImageMenu from "@/components/MenuComponents/ImageMenu/ImageMenu";
import Bglines from "@/public/images/course/bglines.png";
import Image from "next/image";
import CardCourse from "@/components/MenuComponents/course/cardcourse";

function Courses() {
  return (
    <div>
      <div className="flex flex-col items-center gap-7 sm:gap-10 lg:gap-12 px-8 sm:px-10 lg:px-12 xl:px-20">
        <HeadingMenu heading={"Courses"} />
        <Tagline
          tagline={
            "Explore our wide range of courses designed to help you enhance your skills and achieve your goals. Whether you're a beginner or an experienced professional, we have something for everyone. Join our courses and take the next step towards success."
          }
        />
        <div className="bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 rounded-[18px] sm:rounded-[24px]">
          <ImageMenu image={CoursePhoto} />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col pt-[180px] sm:pt-[250px] lg:pt-[350px] xl:pt-[400px] mb-[200px] lg:mb-[100px] relative">
        <Image
          src={Bglines}
          alt="random"
          width={500}
          height={500}
          className="w-[300px] sm:w-[600px] lg:w-[850px] xl:w-[1050px] h-auto"
        />
        <div className="absolute top-[85px] left-[25px] sm:top-[100px] sm:left-[100px] lg:top-[150px] lg:left-[120px] xl:top-[200px] xl:left-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={1}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute top-[195px] right-[25px] sm:top-[300px] sm:right-[120px] lg:top-[150px] lg:right-[120px] xl:top-[200px] xl:right-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={10}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute top-[295px] left-[25px] sm:top-[520px] sm:left-[100px] lg:top-[480px] lg:left-[120px] xl:top-[600px] xl:left-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={2}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute top-[395px] right-[25px] sm:top-[720px] sm:right-[120px] lg:top-[480px] lg:right-[120px] xl:top-[600px] xl:right-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={3}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute top-[495px] left-[25px] sm:top-[900px] sm:left-[100px] lg:top-[760px] lg:left-[120px] xl:top-[950px] xl:left-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={4}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute top-[600px] right-[25px] sm:top-[1100px] sm:right-[120px] lg:top-[760px] lg:right-[120px] xl:top-[950px] xl:right-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={5}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute bottom-0 left-[25px] hidden lg:block sm:bottom-[100px] sm:left-[60px] lg:bottom-[340px] lg:left-[120px] xl:bottom-[420px] xl:left-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={6}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute bottom-0 right-[25px] hidden lg:block sm:bottom-[100px] sm:right-[60px] lg:bottom-[340px] lg:right-[120px] xl:bottom-[420px] xl:right-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={7}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute bottom-0 left-[5px] hidden lg:block  sm:bottom-[100px] sm:left-[60px] lg:bottom-[60px] lg:left-[120px] xl:bottom-[60px] xl:left-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={8}
            des={"Role of UI/UX in Product Development"}
          />
        </div>

        <div className="absolute bottom-0 right-[5px] hidden lg:block sm:bottom-[100px] sm:right-[60px] lg:bottom-[60px] lg:right-[120px] xl:bottom-[60px] xl:right-[275px]">
          <CardCourse
            title={"Introduction to UI/UX Design"}
            no={1}
            des={"Role of UI/UX in Product Development"}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
