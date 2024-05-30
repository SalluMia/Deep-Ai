'use client'
import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Aos from 'aos';
import 'aos/dist/aos.css'

function Boxes({data}) {

  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center py-5 px-5 lg:px-8 xl:px-14" data-aos="fade-up">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 w-full h-[26rem] ${
              index % 2 === 1 ? "lg:mt-[3rem]" : ""
            } `}
          >
            <div className="flex flex-col justify-center items-center bg-[#111424] h-full w-full back rounded-3xl">
              <div className="relative flex flex-col items-center justify-center px-[12px] py-[16px] space-y-3 z-20">
              <Image src={`/images/blog/blogs-images/frame${item.key}.png`} alt='images'  width={500} height={500} className='w-full h-auto rounded-t-[12px] mt-2' loading='lazy'/>
                <p className="font-varino text-[18px] text-center text-white">
                  {item.title}
                </p>
                <p className="font-monosans text-[12px] text-center text-white">
                  {item.text}
                </p>
                <Link href={`/${item.route}/${item.link}`} className='text-white text-[15px] font-monosans bg-[#2D5887]
                 px-3 py-2 rounded-md'>Read More</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Boxes