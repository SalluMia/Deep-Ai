'use client'
import React,{useEffect} from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'

function CardCourse({no, title, des}) {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='w-[150px] sm:w-auto sm:h-auto rounded-[28px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] 
    p-[2px] sm:p-1 text-white' data-aos="fade-up">
       <div className='bg-[#111424] w-full h-full rounded-[26px] py-2 px-4 sm:py-6 sm:px-5 lg:py-8 lg:px-6 flex flex-col sm:gap-2 lg:gap-3' >
       <h1 className='font-medium text-[10px] sm:text-[14px] lg:text-[16px] font-monosans'>
        Module {`${no}: ${title}`}</h1>
       <p className='text-[10px] sm:text-[14px] lg:text-[16px] font-monosans'>{des}</p>
       </div>
    </div>
  )
}

export default CardCourse