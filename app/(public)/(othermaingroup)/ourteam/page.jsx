'use client'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import HeadingMenu from '@/components/MenuComponents/headingMenu/HeadingMenu'
import Tagline from '@/components/MenuComponents/ParagraphTagLine/Tagline'
import TeamCards from '@/components/MenuComponents/teamCards/TeamCards'
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import TeamMembers from './teamMembers/TeamMembers';
import { SubHeading } from '@/components/MenuComponents/headingMenu/HeadingMenu';


function OurTeam() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='mt-14'>
      <HeadingMenu heading={"Meet Our Team"}/>
      <Tagline tagline={"Get to know the driving force behind our success by meeting our dedicated team. Comprised of diverse talents and backgrounds, our team members bring a wealth of expertise and passion to everything we do. From visionary leaders to meticulous developers, each individual plays a vital role in shaping our companys journey. "}/>
      <SubHeading subheading={"Flutter Team"}/>
      <TeamCards/>     
      <div className='mt-20 mx-36 h-[600px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 rounded-[30px] relative'>
        <div className='bg-[#111424] rounded-[28px] h-full w-full'/>
        <div className='w-10 h-10 border-2 rounded-full flex justify-center items-center absolute top-[50%] -right-16 cursor-pointer'>
          <GrFormNextLink className='text-white text-3xl'/>
        </div>
        <div className='w-10 h-10 border-2 rounded-full flex justify-center items-center absolute top-[50%] -left-16 cursor-pointer'>
          <IoMdArrowBack className='text-white text-2xl'/>
        </div>
      </div> 
      <SubHeading subheading={"Team Members"}/>
      <TeamMembers/>     
    </div>
  )
}

export default OurTeam
