import React from 'react'
import CardBG from '../../public/svgs/cardBG.svg'
import Image from 'next/image'

const OffersCard = ({ image, title, description , className }) => {
    return (
            <div className={`rounded-3xl bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 ${className}`}>
                <div className=' bg-[#111424] h-full w-full back rounded-3xl'>
                    <div className='relative flex flex-col  items-center justify-center px-[32px] py-[16px] space-y-3 z-20'>
                        <Image
                            src={image}
                            alt={title}
                        />
                        <p className='font-varino text-[18px] text-center text-white'>{title}</p>
                        <p className='font-monosans text-[12px] text-center text-white'>
                            {description}
                        </p>

                        <Image
                            className='absolute -top-3 rounded-3xl -z-10 w-full h-[315px] '
                            alt='cardBG'
                            src={CardBG}
                        />
                    </div>
                </div>

            </div>
    )
}

export default OffersCard
