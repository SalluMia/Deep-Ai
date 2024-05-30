import React from "react";
import Image from "next/image";


const TestimonialCard = ({ img,review, username, country, index }) => {
  return (
    <div
      className={` overflow-hidden scroll-containers flex-none rounded-[40px] bg-gradient-to-b from-white
       to-gray-600 p-[1.5px] w-[300px] lg:w-[500px] lg:h-[250px]`}
    >
      <div className=" h-full flex flex-col justify-around items-center rounded-[38px] p-5  bg-[#111424]">
        <div className="w-full px-2 sm:px-4 xl:px-5">
          <p className="font-monosans text-center text-[14px] sm:text-[16px] text-white">
            {review.substring(0, 80)}
          </p>
        </div>
        <div className="w-full flex justify-center gap-3 items-center mt-4">
          <div>
            <Image
              className="w-[60px] h-auto sm:w-[55px] sm:h-[55px] lg:w-[65px] lg:h-[65px] rounded-full mr-3"
              src={img}
              alt={`${username}_ profile`}
            />
          </div>

          <div className=" flex flex-col justify-center ">
            <p
              className="font-monosans text-[14px] sm:text-[18px] xl:text-[18px] text-start capitilize font-light "
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {username}
            </p>
            <p
              className="font-monosans text-[14px] sm:text-[18px] xl:text-[18px] text-center capitilize font-light "
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;















 {/* <div className=" bg-[#111424] h-full w-full back rounded-3xl">
        <div className="relative flex flex-col  items-center justify-center  space-y-8 z-20">
          <p className="font-monosans text-[16px] text-center text-white">
            {review.substring(0, 70)}
          </p>

          <div className="space-x-6 flex items-center justify-center">
            <Image
              className="w-[50px] h-[50px] rounded-full"
              src={profile}
              alt={`${username}_profilePicture`}
            />
            <div className="flex flex-col items-center justify-center">
              <h1
                className="font-varino text-[18px] xl:text-[18px] text-center capitilize"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {username}
              </h1>

              <p
                className="font-monosans text-[18px] xl:text-[18px] text-center capitilize font-light "
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {country}
              </p>
            </div>
          </div>
        </div>
      </div> */}
