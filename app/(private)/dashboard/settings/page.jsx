import React from 'react'
import MainHeading from '@/components/privateNavBar/headings/MainHeading'

function Settings() {
  return (
    <div className='text-white'>
       <div className='flex'>
          <MainHeading link={'dashboard'} title={"Dashboard"} flag={false}/>
          <MainHeading link={'dashboard/settings'} title={"/Settings"} flag={true}/>
       </div>
       <section className='flex w-full justify-between h-auto'>
          <section className='flex flex-col gap-3 w-[30%]  py-3'>
             <div className='border-2 w-full h-[60px] rounded-[12px] flex items-center'>
                <h1 className='px-5 font-monosans text-[14px] sm:text-[16px] xl:text-[18px]'>
                  Profile
                </h1>
             </div>
             <div className='border-2 w-full h-[60px] rounded-[12px] flex items-center'>
               <h1 className='px-5 font-monosans text-[14px] sm:text-[16px] xl:text-[18px]'>
                  Security
               </h1>
             </div>
          </section>
          <section className='w-[65%] h-full px-6 py-10 border rounded-[30px]'>
            <div className='w-full h-full  rounded-[15px]'>
              <section className='flex flex-col items-center gap-2'>
              <h1 className='font-varino text-lg'>
               Profile
               </h1>
               <p className='font-monosans text-[14px] sm:text-[16px] xl:text-[18px]'>
               Your profile settings will be available for peoples to sea.
               </p>  
              <div class="flex items-center justify-center font-monosans text-[14px] sm:text-[16px] 
              xl:text-[18px] py-3">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 rounded-lg cursor-pointer px-5 py-16">
                    <div class="flex flex-col items-center justify-center">
                    <p class="mb-2 text-sm ">Profile Image</p>
                        <svg class="w-8 h-8" aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0
                             0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 

              </section>
              <section className='h-auto w-full flex flex-col gap-4'>
                <div className='w-full flex justify-between'>
                  <div className='flex flex-col w-[48%] gap-2'>
                     <label htmlFor="" className='font-varino text-lg px-4'>Name</label>
                     <input type="text" placeholder='Name' className='font-monosans text-[10px] sm:text-[12px] xl:text-[15px] border-2 border-white rounded-[32px] px-4 py-4 bg-transparent'/>
                  </div>
                  <div className='flex flex-col w-[48%] gap-2'>
                     <label htmlFor="" className='font-varino text-lg px-4'>Email</label>
                     <input type="text" placeholder='Email' className='border-2 border-white rounded-[32px] px-4 py-4 bg-transparent font-monosans text-[10px] sm:text-[12px] xl:text-[15px]'/>
                  </div>
                </div>
                <div className=' w-full flex justify-between'>
                <div className='flex flex-col w-[48%] gap-2'>
                     <label htmlFor="" className='font-varino text-lg px-4'>Password</label>
                     <input type="text" placeholder='Password' className='border-2 border-white rounded-[32px] px-4 py-4 bg-transparent font-monosans text-[10px] sm:text-[12px] xl:text-[15px]'/>
                  </div>
                  <div className='flex flex-col w-[48%] gap-2'>
                     <label htmlFor="" className='font-varino text-lg px-4'>Gender</label>
                     <input type="text" placeholder='Gender' className='border-2 border-white rounded-[32px] px-4 py-4 bg-transparent font-monosans text-[10px] sm:text-[12px] xl:text-[15px]'/>
                  </div>
                </div>
                <div className=' w-full'>
                <div className='flex flex-col w-full gap-2'>
                     <label htmlFor="" className='font-varino text-lg px-4'>Description</label>
                     <input type="text" placeholder='Description' className='border-2 border-white rounded-[32px] px-4 bg-transparent h-[120px] font-monosans text-[10px] sm:text-[12px] xl:text-[15px]'/>
                  </div>
                </div>
              </section>
              <div className='pt-10'>
                <button className='font-monosans text-[12px] sm:text-[14px] xl:text-[16px] w-full bg-[#00A7E1] h-[50px] rounded-[30px]'>
                  Save
                </button>
              </div>
            </div>
          </section>
          <div>

          </div>
       </section>
    </div>
  )
}

export default Settings
