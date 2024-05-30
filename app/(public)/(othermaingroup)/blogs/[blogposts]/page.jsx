'use client'
import { Data } from '../page';
import Image from 'next/image';
import Link from 'next/link';
import AlrightVector from '@/public/images/blog/blogs-images/alrightvector.png'



const List=[
  {
    key:1,
    tech:'Generative AI'
  }, {
    key:2,
    tech:'UI/UX Design'
  }, {
    key:3,
    tech:'Frontend'
  }, {
    key:4,
    tech:'Laravel'
  },
  {
    key:5,
    tech:'Flutter'
  }, {
    key:6,
    tech:'MERN Stack'
  }, {
    key:7,
    tech:'Python/AI'
  }, {
    key:8,
    tech:'WordPress'
  }, {
    key:9,
    tech:'SEO'
  }, {
    key:10,
    tech:'Q/A'
  }, {
    key:11,
    tech:'Digital Marketing'
  }, {
    key:12,
    tech:'Business Development'
  }
]

function BlogPosts({ params }) {
    const filteredItem = Data.find(item => item.link.toLowerCase() === params.blogposts.toLowerCase());
    return (
      <div className='flex flex-col gap-2 sm:gap-2 lg:gap-3 mt-5 mb-[80px]  lg:mb-[150px]'> 
              {filteredItem && (
              <div className='flex flex-col items-center gap-6 sm:gap-7 lg:gap-8 '>
                <div className='px-[20px] py-[30px] sm:px-[72px] sm:py-[35px] lg:px-[120px] lg:pt-10 xl:px-[160px] flex flex-col items-center gap-6 sm:gap-7 lg:gap-8'>
                <h1
                  className="font-varino text-[26px] sm:text-[38px] lg:text-[65px] text-center"
                  style={{
                        background: "linear-gradient(to bottom, white, gray)",
                         WebkitBackgroundClip: "text",
                        color: "transparent", }}>
                          {filteredItem.title}</h1>
                 {/* <p className='text-white font-monosans text-wrap'>{filteredItem.text}</p> */}
                <Image src={`/images/blog/blogs-images/frame${filteredItem.key}.png`} alt='blog posts images' height={700} width={700} className='rounded-2xl w-[350px] sm:w-[500px] lg:w-[650px] xl:w-[800px] h-auto'/>
                </div>
              
              <div className='px-6 sm:px-10 lg:px-12 xl:px-14 mt-10'>
                <p className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px] text-white'>
                <h1 className='text-bold'>ChatGPT and Bard:</h1>
 Whats the difference?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Testing ChatGPT and Bard against each other
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
1. Code generation
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
Bards coding attempt
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
Bards coding attempt
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
2. Problem Solving
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
ChatGPTs problem solving
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
3. Refactoring Code
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
4. Debugging assistance
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
5. Third-party plugins & UI extensions
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.
6. Ease of Use
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..
</p>
              </div>

              <div className='flex flex-col gap-10 sm:gap-0 sm:flex-row px-6 sm:px-10 lg:px-12 xl:px-14 mt-4 justify-between items-center'> 
                <Image src={AlrightVector} alt='alright logo vector' width={100} height={100} className='w-[150px] sm:w-[180px] lg:w-[200px] xl:w-[250px] h-auto'/>
                <div className='text-white sm:w-[65%] lg:w-[75%] font-monosans border rounded-2xl p-5 sm:border-none sm:rounded-none sm:p-0'>
                  <h1 className='font-varino text-[18px] sm:text-[20px] lg:text-[24px]  xl:text-[30px] pb-3'>James Jacken</h1>
                  <p className=' text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                </div>
              </div>

              <div className='text-white flex flex-col gap-5 justify-start w-full  px-5 lg:px-8 xl:px-14 mt-10'>
                <h1 className='font-varino text-start text-[18px] sm:text-[20px] lg:text-[24px]  xl:text-[30px] '>
                  Recommeded Articles
                </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <div key={filteredItem.key} className={`rounded-3xl bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 w-full h-[26rem] } `}>
            <div className="flex flex-col justify-center items-center bg-[#111424] h-full w-full back rounded-3xl">
              <div className="relative flex flex-col items-center justify-center px-[12px] py-[16px] space-y-3 z-20">
                <p className="font-varino text-[18px] sm:text-[20px] lg:text-[24px]  xl:text-[30px] text-center text-white">
                  {filteredItem.title}
                </p>
                <p className="font-monosans text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] text-center text-white">
                  {filteredItem.text}
                </p>
                <Link href={`/blogs/${filteredItem.link}`} className='text-white text-[15px] font-monosans bg-[#2D5887] px-3 py-2 rounded-md mt-2'>View More</Link>
              </div>
            </div>
          </div>
        </div>

              </div>
             
          </div>
                  )}
      </div>
  );
}

export default BlogPosts;
