import React, { useContext, useEffect } from 'react'
import { storeContext } from '../../../Context/Context'
import { useLocation } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Addresses from '../../Addresses/Addresses';
import logo from '../../../../Assets/images/express-5-logo-png-transparent.png'


export default function Payment() {
let { setshappingMethod , setpayment , setFinshorder} = useContext(storeContext)


const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <div className="lg:col-span-8 col-span-12 pt-24 pb-8   ">
            <div>
            <div className='lines  flex items-center  pt-5   justify-center flex-col lg:flex-row relative '>
          <div className='flex  items-center  w-full  justify-center lg:mr-[-30px]'>
            <div className='flex  flex-col mt-5 items-center lg:mr-[-23px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm mainText'
                >
                    Cart
                    </p>
        </div>
        <div className="w-[25%] lg:mx-[-22px] ml-[-22px] lg:ml-0 z-20 h-[3px]  bg-[#26D26B]"></div> 
        <div className='flex  flex-col mt-5 items-center mx-[-22px] '>
                <div  className='w-4 h-4  bg-[#26D26B] z-20 rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm mainText'
                >
                    Address
                    </p>
        </div>
        <div className="lg:w-[25%] w-[50%]  ml-[-22px]   h-[3px]  bg-[#26D26B] z-20"></div>

        <div className='flex  flex-col mt-5 items-center ml-[-50px]  '>
                <div  className='w-4 h-4   bg-[#26D26B]  z-20   rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm inline mainText'
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
            Payment
            </h2>

                
                <div className='mt-4 mainText mx-4 lg:mx-0'>
                    <input  id='pickup' type="checkbox"  className='rounded-full rounded-my' />
                    <label for='pickup' className='ml-2'>Payment get ways </label>  
                    <select className="select select-bordered w-full max-w-xs ml-2 h-2 mt-2 lg:mt-0 bg-[#EEEEEE] focus:outline-none border-none">
                        <option disabled selected>Select payment get ways</option>
                        <option>Home</option>
                        <option>Work</option>
                        </select>
                </div>
                <div className='mt-4 mainText mx-4 lg:mx-0 flex items-center border-b-2 border-[#EEEEEE] pb-3'>
                    {/* <input  id='pickup' type="checkbox"  className='rounded-full rounded-my' /> */}
                    <img src={logo} alt="" className='size-28 ' />
                    <div className='ml-3'>
                        <h3 className='font-semibold  text-base my-2'>
                        Company name
                        </h3>
                        <p className='line-clamp-3 text-[14px] mb-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </div>
                    
                </div>

                <div className='mt-5 mainText border-b-2 pb-5 mx-4 lg:mx-0'>
                    <input id='pickup' type="checkbox"  className='rounded-full rounded-my' />
                    <label for='pickup' className='ml-2'>Cash on delivery  </label>
                </div>

                <div className='mt-5 mainText  pb-5 mx-4 lg:mx-0'>
                    <input id='pickup' type="checkbox"  className='rounded-full rounded-my' />
                    <label for='pickup' className='ml-2'>Credit or Debit Cards  </label>
                </div>










                <div className='mx-2'>
                </div>
                <div 
                onClick={()=>{
                  setpayment(false)
                  setFinshorder(true)
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
