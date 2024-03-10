import React, { useContext } from 'react'
import Addresses from '../../Addresses/Addresses'
import { IoIosArrowRoundForward } from "react-icons/io";
import { storeContext } from '../../../Context/Context';

export default function YourShopping() {
let { shappingMethod, setshappingMethod ,setpayment} = useContext(storeContext)

  return (
    <>
    <div className="lg:col-span-8 col-span-12 pt-24 pb-8   ">
            <div>
            <div className='lines  flex items-center  pt-5   justify-center flex-col lg:flex-row relative '>
          <div className='flex  items-center  w-full  justify-center lg:mr-[-30px]'>
            <div className='flex  flex-col mt-5 items-center lg:mr-[-23px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    Cart
                    </p>
        </div>
        <div className="w-[25%] lg:mx-[-22px] ml-[-22px] lg:ml-0 z-20 h-[3px]  bg-[#26D26B]"></div> 
        <div className='flex  flex-col mt-5 items-center mx-[-22px] '>
                <div  className='w-4 h-4  bg-[#26D26B] z-20 rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    Address
                    </p>
        </div>
        <div className="lg:w-[25%] w-[50%]  ml-[-22px] dashed  h-[3px]  bg-[#CACACA]"></div>

        <div className='flex  flex-col mt-5 items-center ml-[-50px]  '>
                <div  className='w-4 h-4   bg-[#ffff] border z-20  border-[#CACACA] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm inline text-[#2020206f]'
                >
                    Payment
                    </p>
        </div>
        <div className="w-[25%]  ml-[-50px]  h-[3px] dashed bg-[#CACACA]"></div>
        <div className='flex  flex-col mt-5 items-center ml-[-25px]'>
                <div  className='w-4 h-4  bg-[#ffff] border z-20 border-[#CACACA] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm text-[#2020206f]'
                >
                    Complete
                    </p>
        </div>
        </div>
        
                </div>
            </div>

            <div className='lg:ml-20 mx-2 lg:mx-0'>
            <h2 className="mainText  text-3xl font-bold  mt-10">
            Your shipping method
            </h2>

                <div className='mt-5 mainText border-b-2 pb-5 mx-4 lg:mx-0'>
                    <input id='pickup' type="checkbox"  className='rounded-full rounded-my' />
                    <label for='pickup' className='ml-2'>Pickup From Store <span className='font-bold'> (Free)</span> </label>
                </div>
                <div className='mt-4 mainText mx-4 lg:mx-0'>
                    <input id='pickup' type="checkbox"  className='rounded-full rounded-my' />
                    <label for='pickup' className='ml-2'>Home delivery </label>  
                    <select className="select select-bordered w-full max-w-xs ml-2 h-2 mt-2 lg:mt-0 bg-[#EEEEEE] focus:outline-none border-none">
                        <option disabled selected>Select shipping</option>
                        <option>Home</option>
                        <option>Work</option>
                        </select>
                </div>
                <div className='mx-2'>
                    <Addresses  />
                </div>
                <div 
                onClick={()=>{
                  setshappingMethod(false)
                  setpayment(true)
                }}
                 className='mt-6 pointer  lg:text-end lg:mr-4 text-center  '>
                    <p  className='mainText inline font-semibold'>
                        Next 
                    </p>
                <IoIosArrowRoundForward className='inline mainText' />
                </div>
                

            </div>
          </div>


    </>
  )
}
