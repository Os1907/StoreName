import React from 'react'
import image1 from '../../../Assets/images/WhatsApp Image 2021-08-31 at 5.57.47 PM@2x.png'


export default function ThirdSection() {
  return (
    <>
    <section>
       <div className='md:w-[80%] w-[90%] mx-auto bg-white py-15'>
            <div className="grid md:grid-cols-12 py-10">
                <div className="col-span-6 flex justify-center items-center md:items-start flex-col xl:h-[399px] xl:w-[530px] ">

                    <h2 className='md:text-[40px] text-3xl font-bold text-[#0A0A0A]'>Deals of the day</h2>
                    <p className='xl:text-xl text-sm text-center md:text-start  font-normal mr-3 my-2 '>Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea .</p>
                    <button className='heroBtn max-md:text-[9px] text-[11px] text-white '>
                        Shop now
                    </button>
                </div>
                <div className="sm:col-span-6 col-span-12 flex items-center   xl:h-[399px] xl:w-[530px]   ">

                 <img src={image1} alt="" className='w-full ' />

                </div>
            </div> 
            </div>
                

               

    </section>
    
    </>
  )
}
