'use client'
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HeadingMenu from '@/components/MenuComponents/headingMenu/HeadingMenu'
import GalleryGrid from '@/components/MenuComponents/galleryGrid/GalleryGrid'

function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='pt-10' >
        <HeadingMenu heading={"Our Gallery"}/>
        <p className='mt-2 sm:mt-4 font-monosans text-[14px] sm:text-[16px] xl:text-[18px] text-center text-white sm:px-20 lg:px-32 xl:px-40' data-aos="fade-up">Step into our office gallery and immerse yourself in a world of creativity and innovation. From sleek modern designs to vibrant collaborative spaces, our gallery showcases the heart and soul of our workspace. Capturing moments of inspiration, teamwork, and accomplishment, each image tells a story of passion and dedication. </p>
        <GalleryGrid />
    </div>
  )
}

export default Gallery
