'use client'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const List=[
    {
        description:'Meet our dynamic Flutter Team, a group of passionate developers dedicated to crafting seamless and captivating mobile experiences. With expertise in Flutter, Google UI toolkit for building natively compiled applications, our team excels in creating cross-platform mobile apps that are beautiful, functional, and performant.'
    }
]

function TeamCards() {
  
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='w-full h-auto px-5 sm:px-16 md:px-24 lg:px-44 text-white'>
       {List.map((value, index)=>{
        return(
            <section key={index} className='flex justify-between items-center my-8'>
            <div className='bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 rounded-[30px] h-[350px] md:h-[400px] w-[30%]'>
              <div className='w-full h-full bg-[#111424] rounded-[28px]'/>
           </div>
           <div className=' h-[400px] w-[65%] flex flex-col justify-center gap-2' data-aos="fade-up">
            <h1 className='font-varino text-[16px] sm:text-[20px] lg:[22px] xl:text-[24px]'>Description</h1>
            <p className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px]'>{value.description}</p>
           </div>
            </section>
        )
       })}
    </div>
  )
}

export default TeamCards
