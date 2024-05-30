'use client'
import React, { useState,useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Heading = ({children}) => {

    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <h1 data-aos="fade-up" className='px-2 sm:px-0 font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center capitalize' style={{ background: 'linear-gradient(to bottom, white, gray)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            {children}
        </h1>
    )
}

export default Heading