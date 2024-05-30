'use client'
import React,{useEffect} from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'

function Tagline({tagline}) {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
        <p className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] text-center text-white py-2 sm:py-3 lg:py-4 px-5 sm:px-20 lg:px-32 xl:px-40' data-aos="fade-up">{tagline}</p>
    </>
  )
}

export default Tagline