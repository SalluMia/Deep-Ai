'use client'
import { Data } from '../page';
import Image from 'next/image';
import Link from 'next/link';

function ProductBlogs({ params }) {
    const filteredItem = Data.find(item => item.link.toLowerCase() === params.productblogs.toLowerCase());

    return (
      <div className='px-[20px] py-[30px] sm:px-[72px] sm:py-[35px] lg:px-[120px] lg:pt-10 xl:px-[160px] flex flex-col gap-2 sm:gap-2 lg:gap-3 mt-5  mb-[250px] sm:mb-[80px] lg:mb-[180px]'> 
      {filteredItem && (
      <div className='flex flex-col items-center gap-6 sm:gap-7 lg:gap-8'>
        <h1
          className="font-varino text-[26px] sm:text-[38px] lg:text-[65px] text-center"
          style={{
                background: "linear-gradient(to bottom, white, gray)",
                 WebkitBackgroundClip: "text",
                color: "transparent", }}>
                  {filteredItem.title}</h1>
         {/* <p className='text-white font-monosans text-wrap'>{filteredItem.text}</p> */}
        <Image src={`/images/blog/blogs-images/frame${filteredItem.key}.png`} alt='portfolio posts images' height={700} width={700} className='rounded-2xl w-[350px] sm:w-[500px] lg:w-[650px] xl:w-[800px] h-auto'/>
        <div className='mt-10 w-full h-[500px]'>
          <section className='w-full h-auto border-2 rounded-[30px] py-6 px-5 sm:py-7 sm:px-7 lg:px-8 lg:py-8 flex flex-col gap-4'>
            <div>
            <h1 className='font-varino text-white text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[28px] py-2'>Project</h1>
             <h2 className='text-white font-monosans text-wrap text-[14px] sm:[16px] lg:text-[18px]'>{filteredItem.title}</h2>
            </div>
            <div>
            <h1 className='font-varino text-white text-[18px] sm:text-[22px] lg:text-[24px] 
            xl:text-[28px] py-2'>Launching Date</h1>
            <h2 className='text-white font-monosans text-wrap text-[14px] sm:[16px] lg:text-[18px]'>23 November 2023</h2>
            </div>
            <div>
              <h1 className='font-varino text-white text-[18px] sm:text-[22px] lg:text-[24px] 
            xl:text-[28px] py-2'>URL</h1>
              <p className='text-white font-monosans text-wrap text-[14px] sm:[16px] lg:text-[18px]'>{`http://www.${filteredItem.link}.com/`}</p>
            </div>
            <div>
              <h1 className='font-varino text-white text-[18px] sm:text-[22px] lg:text-[24px] 
            xl:text-[28px] py-2'>Client Testimonal</h1>
              <p className='text-white font-monosans text-wrap text-[14px] sm:[16px] lg:text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy.
              </p>
            </div>
          </section>
        </div>
      </div>
  )}
</div>
    );
}

export default ProductBlogs;
