'use client'
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const List=["Our Company","Company Anniversary","Events","Games","Our Teams"]

function GalleryGrid() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' w-full h-auto grid gap-5 sm:gap-4 lg:gap-6 xl:gap-8 grid-cols-1 sm:grid-cols-2 px-4 sm:px-12 lg:px-20 xl:px-24
     text-white py-8 sm:py-10' >
        {List.map((value,index)=>{
            return(
                <div key={index} className=' sm:first:col-span-2 h-[320px] sm:h-[350px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 rounded-[30px]' data-aos="fade-up">
            <section className='bg-[#111424] w-full h-full rounded-[28px] flex justify-center items-center'>
                <div className='bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-[3px] h-[60px] w-auto  
                rounded-[28px]'>
                    <div className='bg-[#111424] h-full rounded-[26px] flex justify-center items-center
                      px-5 w-[160px] sm:w-[200px] lg:w-[220px]'>
                        <h1  className="text-center text-[12px] sm:text-[15px] lg:text-[16px] font-medium font-monosans cursor-pointer">{value}</h1>
                    </div>
                </div>
            </section>
        </div>
            )
        })}
    </div>
  )
}

export default GalleryGrid