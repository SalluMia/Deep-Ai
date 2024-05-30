import React from 'react'
import NewsLetterImage from '../../../public/images/newsletterImages/newsletter.png'
import Image from 'next/image'
import Heading from '@/components/core/Heading'
import inputBG from '../../../public/images/newsletterImages/inputBG.png'
import purpleGradient from "../../../public/svgs/purpleGradient.svg"
const NewsLetterSection = () => {

    return (
        <section className='mb-32 relative flex flex-col space-y-12 mt-20 items-center  xl:mx-32'>
             <Image
          className="absolute  top-28 rounded-3xl -z-10 w-full h-full "
          alt="cardBG"
          src={purpleGradient}
        />
            <div className='flex flex-col items-center justify-center space-y-1'>
                <Heading>newsletter</Heading>
                <p className='text-[16px] xl:text-[18px] text-center font-monosans text-white font-light w-10/12 md:w-6/12 xl:w-8/12'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
            </div>
            <div className='flex md:flex-row xl:space-x-[50px] space-y-[50px]   justify-center items-center flex-col w-full'>
                <Image
                    src={NewsLetterImage}
                    alt="mr-robot"
                    className='w-[297px] h-[296px]'
                />
                <div className='relative rounded-3xl bg-gradient-to-r from-[#EC66B7] to-[#2D5887] p-1 xl:w-7/12 lg:w-7/12 w-10/12 h-[70px] items-center'>
                    <div className='bg-[#111424]  rounded-3xl'>
                        <div className='relative h-full w-full items-center flex justify-between p-1'>
                            <input
                                placeholder='Email address'
                                type="text"
                                className="text-white border-none outline-none bg-transparent rounded-3xl p-4 w-full pr-8 sm:pr-12 xl:pr-16 z-20"
                            />
                            <button className='bg-[#00A7E1] text-white xl:min-w-[180px] min-w-[90px] h-[56px] rounded-3xl'>
                                <p className='xl:text-[18px] text-[12px]'>Subscribe</p>
                            </button>
                            <Image
                                className='absolute w-full h-full z-10'
                                alt='bg-input'
                                src={inputBG}
                            />
                        </div>
                    </div>
                    <p className='absolute xl:text-[24px] text-[18px] xl:-top-10 -top-8 text-white font-light'>
                        subscribe for offer updates
                    </p>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterSection
