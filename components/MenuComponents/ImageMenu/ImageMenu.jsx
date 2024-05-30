import React,{useEffect} from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'

function ImageMenu({image}) {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
       <Image src={image} alt='portfolio image' className='w-[360px] sm:w-[420px] lg:w-[485px] h-auto' loading='lazy' />
    </>
  )
}

export default ImageMenu