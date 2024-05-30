'use client'
import React, { useState,useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import globe from "../../public/images/globe.png";
import purpleGradient from "../../public/svgs/purpleGradient.svg";
import Gradient1 from "../../public/svgs/gradient1.svg";
import RightGradient from "../../public/svgs/right.svg";
import { BASEURL } from "@/utils/BASEURL";
import { Toaster } from "react-hot-toast";


const ContactUs = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  // Initialize state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleContact = async (e) => {
    e.preventDefault();

    // Create a request payload with form data
    const reqPacket = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Make a POST request to the backend API
      const response = await axios.post(`${BASEURL}/api/contact-us`, reqPacket);

      // Check if the request was successful (status code 201)
      if (response.status === 201) {
        console.log(response);
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Try again. Failed to send email.");
    }
  };

  return (
    <>
      {/* Gradient */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <Image className="xl:w-full -z-20" alt="gradient1" src={Gradient1} />
      </div>

      {/* Contact Us Section */}
      <section className="relative snap-center flex flex-col space-y-4 items-center mt-16 sm:mt-20 lg:mt-24">
        {/* Right Gradient */}
        <div className="absolute right-0 bottom-0">
          <Image
            className="xl:w-full -z-20"
            alt="gradient1"
            src={RightGradient}
          />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col justify-center items-center">
          <h1
            data-aos="fade-up"
            className="font-varino text-[24px] sm:text-[30px] xl:text-[55px] text-center capitalize"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            CONTACT US
          </h1>
          <p
            data-aos="fade-up" 
            className="mt-1 sm:mt-2 text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-[60%] xl:w-[65%]">
            Connect with us for personalized solutions. Your gateway to
            innovation inquiries, collaborations, and support. Let&apos;s create
            together. Reach out and succeed.
          </p>
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 lg:py-10 px-5 gap-8 sm:gap-20 lg:gap-28 xl:gap-40">
          {/* Image Section */}
          <div className="flex justify-start items-center px-12 mt-6 sm:mt-10 lg:mt-0" data-aos="fade-up">
            <Image className="w-[27.5rem]" src={globe} alt="globe" />
          </div>

          {/* Form Section */}
          <div className="bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-3xl p-1" data-aos="fade-up">
            <div className="relative flex flex-col gap-20 py-10 px-5 rounded-3xl bg-[#111424]">
              {/* Purple Gradient */}
              <div className="absolute ">
                <Image
                  className="xl:w-full  animate-pulse -z-10"
                  alt="gradient1"
                  src={purpleGradient}
                />
              </div>

              {/* Form */}
              <form onSubmit={handleContact} data-aos="fade-up">
                <div className="flex flex-col gap-5 z-20">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1 justify-start items-start z-20">
                    <label
                      htmlFor="name"
                      className="text-center py-2 text-white text-base sm:text-lg font-normal font-varino capitalize leading-normal"
                      style={{
                        background: "linear-gradient(to bottom, white, gray)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="rounded-3xl border border-white justify-start items-center px-6 py-3 w-full bg-transparent text-white focus:border-white focus:outline-none
                       font-monosans text-[14px] sm:text-[16px] lg:text-[18px] "
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1 justify-start items-start z-20">
                    <label
                      htmlFor="email"
                      className="text-center py-2 text-white text-base sm:text-lg font-normal font-varino capitalize leading-normal  "
                      style={{
                        background: "linear-gradient(to bottom, white, gray)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="rounded-3xl border border-white justify-start items-center px-6 py-3 w-full bg-transparent focus:border-white focus:outline-none text-white  font-monosans text-[14px] sm:text-[16px] lg:text-[18px] "
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1 justify-start items-start z-20">
                    <label
                      htmlFor="message"
                      className="text-center py-2 text-white text-base sm:text-lg font-normal font-varino capitalize leading-normal"
                      style={{
                        background: "linear-gradient(to bottom, white, gray)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Type Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      rows={5}
                      className="rounded-3xl border border-white justify-start items-center px-4 py-3 w-full bg-transparent focus:border-white focus:outline-none text-white font-monosans text-[14px] sm:text-[16px] lg:text-[18px] "
                      placeholder="Message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="text-center text-white text-[16px] lg:text-lg font-medium font-monosans capitalize px-6 py-3 bg-sky-500 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer z-20"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
