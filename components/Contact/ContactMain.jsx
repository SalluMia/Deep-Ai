'use client'
import React,{useState,useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import gradient1 from "../../public/svgs/gradient1.svg";
import linkedIn from "../../public/svgs/linkedin.svg";
import facebook from "../../public/svgs/facebook.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";
import instagram from "../../public/svgs/insta.svg";
import map from "../../public/images/map.png";
import purpleGradient from "../../public/svgs/purpleGradient.svg";
import topRight from "../../public/svgs/topRight.svg";
import Link from "next/link";
import { calcLength } from "framer-motion";
import axios from "axios";
import { BASEURL } from "@/utils/BASEURL";
import toast from "react-hot-toast";

const ContactMain = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(()=>{
    Aos.init();
  },[])

  const handleContact = async (e) => {
    e.preventDefault();
    const reqPacket = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const response = await axios.post(`/api/contact-us`, reqPacket);

      if (response.status == 201) {
        console.log(response);
        toast.success("Email sent!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Try Again");
    }
  }

  return (
    <>
      <div>
        <Image
          src={gradient1}
          alt="gradient"
          className=" absolute top-[10rem] animate-pulse"
        />
      </div>
      <div>
        <Image
          src={topRight}
          alt="gradient"
          className=" absolute right-0 top-0 -z-10 animate-pulse "
        />
      </div>
      <section className="  relative  xl:mx-20 mx-auto my-16   lg:my-20">
        <h1
           data-aos="fade-up"
          className="font-varino text-[35px] xl:text-[66px] text-center"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Contact Us
        </h1>

        <div className=" grid lg:grid-cols-2  my-10 ">
          <div className=" flex flex-col  justify-center  p-4  gap-5 ">
            <div>
              <p data-aos="fade-up" className="  text-gray-300   font-monosans capitalize">
                Contact with email
              </p>
              <p data-aos="fade-up" className=" text-white font-[500] text-[1.5rem] font-monosans">
              info@AlrightTech.com
              </p>
            </div>
            <div>
              <p data-aos="fade-up" className=" text-gray-300    font-monosans capitalize">
                Contact on phone/whatsapp
              </p>
              <p data-aos="fade-up" className=" text-white font-[500] text-[1.5rem] font-monosans">
              +92 349 5209847
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-10 justify-center items-center p-3">
            <Image src={map} alt="locator" data-aos="fade-up"/>

            <p data-aos="fade-up" className=" text-white font-[500] text-[1.125rem] font-monosans text-center">
              1st Floor, Alright Tech Private Limited, Sarfraz Business &
              Technology park, near Arid University & Shamsabad Metro Station,
              Shamsabad, Rawalpindi
            </p>

            <div data-aos="fade-up" className="justify-start items-start gap-5 flex">
              <Link
                href="https://www.linkedin.com/company/alright-tech/"
                target="blank"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={linkedIn} alt="linkedin" />
              </Link>
              <Link
                href="https://www.facebook.com/AlrightTech?mibextid=eHce3h"
                target="blank"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=923463164772"
                target="blank"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={whatsapp} alt="whatsapp" />
              </Link>
              <Link
                href="https://www.instagram.com/alrighttech?igsh=ODA1NTc5OTg5Nw=="
                target="blank"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <Image src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>

        {/* get quick quote section  */}

        <div className=" grid lg:grid-cols-2 my-10">
          <div className=" flex justify-center items-center">
            <p data-aos="fade-up"
              className="font-varino text-[2rem]  text-center"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Get a quick <br /> quote!
            </p>
          </div>
          <div className="p-5">
            <div className="relative flex flex-col gap-20 py-10 px-5 rounded-3xl border-4 border-pink-400">
              {/* <---- Gradient -----> */}
              <div className="absolute ">
                <Image data-aos="fade-up"
                  className="xl:w-full -z-10  animate-pulse "
                  alt="gradient1"
                  src={purpleGradient}
                />
              </div>
              {/* <---- Input fields  -----> */}
              <div className="flex flex-col gap-5 z-20">
                {/* Input field for name  */}
                <div className="flex flex-col gap-1 justify-start items-start" data-aos="fade-up">
                  <label
                    htmlFor=""
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className="rounded-3xl border border-white justify-start items-center p-[.7rem] w-full bg-transparent text-white focus:border-white focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                {/* Input field for Email  */}
                <div className="flex flex-col gap-1 justify-start items-start" data-aos="fade-up">
                  <label
                    htmlFor=""
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="rounded-3xl border border-white justify-start items-center p-[.7rem] w-full  bg-transparent focus:border-white focus:outline-none text-white"
                    placeholder="Emial Address"
                  />
                </div>
                {/* Input field for Message  */}
                <div className="flex flex-col gap-1 justify-start items-start" data-aos="fade-up">
                  <label
                    htmlFor=""
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="text"
                    rows={5}
                    className="rounded-3xl border border-white justify-start items-center p-[.7rem] w-full  bg-transparent focus:border-white focus:outline-none text-white"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button
                data-aos="fade-up"
                onClick={handleContact}
                className="text-center text-white text-lg font-medium font-monosans capitalize 
                px-6 py-3 bg-sky-500 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-text">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;