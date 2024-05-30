'use client'
import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Team = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Julia", "Kevin", "Linda", "Michael", "Nancy", "Oliver", "Pamela"];

function TeamMembers() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='w-full h-[500px] my-10 text-white' data-aos="fade-up">
      {Team.map((value, index)=>{
        return(
           <div key={index} className='w-full h-[30px] px-52 py-2 text-wrap flex justify-between' data-aos="fade-up">
             <h1 className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] flex'> <span className='font-varino pr-1'>{index +1}.</span> <span>{value}</span></h1>
             <h1 className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] flex'> <span className='font-varino pr-1'>{index +1}.</span> <span>{value}</span></h1>
             <h1 className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] flex'> <span className='font-varino pr-1'>{index +1}.</span> <span>{value}</span></h1>
             <h1 className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] flex'> <span className='font-varino pr-1'>{index +1}.</span> <span>{value}</span></h1>
           </div>
        )
      })}
    </div>
  )
}

export default TeamMembers