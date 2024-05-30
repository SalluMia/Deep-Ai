'use client'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function HeadingMenu({heading}) {
   useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
         <h1
          className="font-varino text-[26px] sm:text-[38px] lg:[60px] xl:text-[65px] text-center"
          style={{
                background: "linear-gradient(to bottom, white, gray)",
                 WebkitBackgroundClip: "text",
                color: "transparent", }} data-aos="fade-up">
                  {heading}</h1>
    </>
  )
}

export default HeadingMenu


export function SubHeading({subheading}){
  useEffect(()=>{
    Aos.init();
  },[])
  return(
    <>
     <h1
          className="mt-10 font-varino text-[20px] sm:text-[28px] lg:[35px] xl:text-[40px] text-center"
          style={{
                background: "linear-gradient(to bottom, white, gray)",
                 WebkitBackgroundClip: "text",
                color: "transparent", }} data-aos="fade-up">
                 {subheading} </h1>
    </>
  )
}

export function HeadingDetail({heading}) {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
         <h1
          className="font-varino text-[26px] sm:text-[38px] lg:[60px] xl:text-[65px] text-center lg:px-40 xl:px-52"
          style={{
                background: "linear-gradient(to bottom, white, gray)",
                 WebkitBackgroundClip: "text",
                color: "transparent", }} data-aos="fade-up">
                  {heading}</h1>
    </>
  )
}

