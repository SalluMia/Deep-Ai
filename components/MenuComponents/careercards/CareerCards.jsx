'use client'
import React from 'react'
import { List } from '@/app/(public)/(othermaingroup)/career/job/page';
import { useRouter } from 'next/navigation'

function CareerCards() {

    const router=useRouter();
    const handleJob=()=>{
      router.push("/career/job")
    }

  return (
    <div className='w-full h-auto mt-2 lg:mt-6 px-6 sm:px-20 lg:px-24 xl:px-56 text-white' >
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
         {List.map((value, index)=>{
           return(
            <div key={index} className='h-[320px] sm:h-[340px] xl:h-[365px] rounded-[30px] px-6 py-7 flex flex-col justify-between border-2'>
              <p className='flex flex-col gap-3 text-[14px] sm:text-[16px] xl:text-[18px] font-monosans'>
                <span className=''>{value.jobType}</span>
                <span className='font-bold'>{value.jobTitle}</span>
                <span className=''>{value.location}</span>
                <span className=''>{value.pay}</span>
                <span className=''>{value.hiringType}</span>
                posted 1 day ago
              </p>
              <div className='flex justify-center items-center'>
              <button  className="text-center text-[12px] sm:text-[15px] lg:text-[16px] font-medium font-monosans capitalize w-auto h-[50px] px-16 py-4 bg-sky-500 rounded-[90px] cursor-pointer" onClick={handleJob}>View Job</button>
              </div>
            </div>)})}
      </div>
    </div>
  )
}

export default CareerCards