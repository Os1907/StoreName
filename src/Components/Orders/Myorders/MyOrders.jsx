import React from 'react'
import shose from '../../../Assets/images/air-max-270-mens-shoe-KkLcGR.png'
import { MdOutlineRefresh } from 'react-icons/md'
import { IoIosArrowRoundForward } from 'react-icons/io'


export default function MyOrders() {
  return (
    <>
    <div className='lg:col-span-8 col-span-12 mainText  '>

<h2 className='mt-12 text-3xl font-bold'>
    My orders
</h2>

<div className='bg-white pb-8 mb-8   order-shadow  lg:mr-32 mt-4 rounded-[5px]  '>
    <div className='lines  flex items-center  pt-5   justify-center flex-col lg:flex-row relative '>
        <div className='flex  items-center  w-full  justify-center lg:mr-[-30px]'>
            <div className='flex  flex-col mt-5 items-center lg:mr-[-25px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    placed
                    </p>
        </div>
        <div className="w-[25%] lg:mx-[-22px] ml-[-22px] lg:ml-0  h-[3px]  bg-[#26D26B]"></div> 
        <div className='flex  flex-col mt-5 items-center mx-[-22px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    confirmed
                    </p>
        </div>
        <div className="lg:w-[25%] w-[50%]  ml-[-22px]  h-[3px]  bg-[#26D26B]"></div>

        <div className='flex  flex-col mt-5 items-center ml-[-50px]  '>
                <div  className='w-4 h-4   bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm inline'
                >
                    Out for delivery
                    </p>
        </div>
        <div className="w-[25%]  ml-[-50px]  h-[3px]  bg-[#26D26B]"></div>
        <div className='flex  flex-col mt-5 items-center ml-[-25px]'>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    Delivered
                    </p>
        </div>
        </div>
        
        <MdOutlineRefresh className=' bg-[#8F8F8F] text-white mr-[12px] text-[25px] rounded-[5px] mb-10 absolute lg:relative right-0 top-[4px]  ' />
    </div>
    <div className='flex justify-between flex-col lg:justify-between items-center lg:flex-row  mx-14 mt-4 '>
            <p className='lg:text-sm text-[12px]  text-[#A0A0A0]'>Order placed on: <span className='font-semibold ml-1'> 18 November 2020</span> </p>
            <p className='lg:text-sm text-[12px] text-[#A0A0A0]'>
            Recipient: <span  className='font-semibold ml-1  '>
                Name
                </span> 
            </p>
    </div>

    <div className='flex justify-between lg:justify-between items-center mx-14 mt-4 flex-col lg:flex-row '>
        <p className='lg:text-sm text-[12px] text-[#A0A0A0] '>

    Address: <span  className=' mx-1 ' >
        Lorem Ipsum is simply 
        </span> 
        </p>
        <p className='lg:text-sm text-[12px] text-[#A0A0A0] m'>
        Payment method: <span  className='font-semibold mx-1'>
                 Bank account
                </span> 
            </p>
    </div>


    <div className='flex lg:justify-between items-center  mx-14 mt-4 flex-col lg:flex-row '>

<p className='lg:text-sm text-[12px] text-[#A0A0A0] '>
    Order ID: 
     <span  className=' mx-1 ml-4 font-semibold'>
        #000000
        </span> 
        </p>


        <p className='lg:text-sm text-[12px] text-[#A0A0A0] '>
        Total: 
     <span  className=' mx-1 ml-4 font-semibold' >
            5,00.00 EGP
        </span> 
        </p>


        </div>


<div className='my-8 bg-white order-shadow mx-8 rounded-[5px]'>
    <div className='flex justify-between flex-col lg:flex-row  '>
        <div className='flex flex-col lg:flex-row items-center ' >
        <img src={shose} alt="" className='lg:w-[25%] w-[60%] md:w-[40%] lg:m-4  mt-4 rounded-2xl' />
        <div className=''>
            <p className='mainText   mt-2 font-bold text-xl'>
            Nike Air Max 270
        </p> 
        <p className='text-[12px] lg:text-left text-center '>Size : XL</p>
        <p className='text-[12px] lg:text-left text-center'>Color : Red</p>
        </div>
        
        </div>
        <div className='mt-8 flex lg:flex-col justify-between items-center'>
            <div className='flex lg:block mb-8 lg:mb-0'>
                <p className='text-[#CF0000]  font-bold inline-flex mx-4 lg:text-base text-[12px]'>
             EGP <span>3,495 </span>    
            </p>
            <p className='line-through inline-flex lg:text-[12px] text-[10px] lg:ml-7 '>
            EGP 5,495
            </p>
            </div>
            <p className='lg:ml-10 mr-5 lg:mr-0 mb-9 lg:text-sm text-[12px]'>
            <span className='text-[#7B7B7B] font-bold'>1</span> Item 
            </p>

        </div>
        
    </div>
    <div className='w-full  '>
            <button className='bg-[#D6D6D6] w-full text-[#919191] text-sm py-1 rounded-b-[5px] '>
            Order products <IoIosArrowRoundForward className='inline text-[#919191]' />
            </button>
        </div>

</div>






</div>

<div className='bg-white pb-8 mb-8   order-shadow  lg:mr-32 mt-4 rounded-[5px]  '>
    <div className='lines  flex items-center  pt-5   justify-center flex-col lg:flex-row relative '>
        <div className='flex  items-center  w-full  justify-center lg:mr-[-30px]'>
            <div className='flex  flex-col mt-5 items-center lg:mr-[-25px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    placed
                    </p>
        </div>
        <div className="w-[25%] lg:mx-[-22px] ml-[-22px] lg:ml-0  h-[3px]  bg-[#26D26B]"></div> 
        <div className='flex  flex-col mt-5 items-center mx-[-22px] '>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    confirmed
                    </p>
        </div>
        <div className="lg:w-[25%] w-[50%]  ml-[-22px]  h-[3px]  bg-[#26D26B]"></div>

        <div className='flex  flex-col mt-5 items-center ml-[-50px]  '>
                <div  className='w-4 h-4   bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm inline'
                >
                    Out for delivery
                    </p>
        </div>
        <div className="w-[25%]  ml-[-50px]  h-[3px]  bg-[#26D26B]"></div>
        <div className='flex  flex-col mt-5 items-center ml-[-25px]'>
                <div  className='w-4 h-4  bg-[#26D26B] rounded-full'></div>
                <p 
                className='text-[8px] mb-1 xl:mb-0 lg:text-sm'
                >
                    Delivered
                    </p>
        </div>
        </div>
        
        <MdOutlineRefresh className=' bg-[#8F8F8F] text-white mr-[12px] text-[25px] rounded-[5px] mb-10 absolute lg:relative right-0 top-[4px]  ' />
    </div>
    <div className='flex justify-between flex-col lg:justify-between items-center lg:flex-row  mx-14 mt-4 '>
            <p className='lg:text-sm text-[12px]  text-[#A0A0A0]'>Order placed on: <span className='font-semibold ml-1'> 18 November 2020</span> </p>
            <p className='lg:text-sm text-[12px] text-[#A0A0A0]'>
            Recipient: <span  className='font-semibold ml-1  '>
                Name
                </span> 
            </p>
    </div>

    <div className='flex justify-between lg:justify-between items-center mx-14 mt-4 flex-col lg:flex-row '>
        <p className='lg:text-sm text-[12px] text-[#A0A0A0] '>

    Address: <span  className=' mx-1 ' >
        Lorem Ipsum is simply 
        </span> 
        </p>
        <p className='lg:text-sm text-[12px] text-[#A0A0A0] m'>
        Payment method: <span  className='font-semibold mx-1'>
                 Bank account
                </span> 
            </p>
    </div>


    <div className='flex lg:justify-between items-center  mx-14 mt-4 flex-col lg:flex-row '>

<p className='lg:text-sm text-[12px] text-[#A0A0A0] '>
    Order ID: 
     <span  className=' mx-1 ml-4 font-semibold'>
        #000000
        </span> 
        </p>


        <p className='lg:text-sm text-[12px] text-[#A0A0A0] '>
        Total: 
     <span  className=' mx-1 ml-4 font-semibold' >
            5,00.00 EGP
        </span> 
        </p>


        </div>


<div className='my-8 bg-white order-shadow mx-8 rounded-[5px]'>
    <div className='flex justify-between flex-col lg:flex-row  '>
        <div className='flex flex-col lg:flex-row items-center ' >
        <img src={shose} alt="" className='lg:w-[25%] w-[60%] md:w-[40%] lg:m-4  mt-4 rounded-2xl' />
        <div className=''>
            <p className='mainText   mt-2 font-bold text-xl'>
            Nike Air Max 270
        </p> 
        <p className='text-[12px] lg:text-left text-center '>Size : XL</p>
        <p className='text-[12px] lg:text-left text-center'>Color : Red</p>
        </div>
        
        </div>
        <div className='mt-8 flex lg:flex-col justify-between items-center'>
            <div className='flex lg:block mb-8 lg:mb-0'>
                <p className='text-[#CF0000]  font-bold inline-flex mx-4 lg:text-base text-[12px]'>
             EGP <span>3,495 </span>    
            </p>
            <p className='line-through inline-flex lg:text-[12px] text-[10px] lg:ml-7 '>
            EGP 5,495
            </p>
            </div>
            <p className='lg:ml-10 mr-5 lg:mr-0 mb-9 lg:text-sm text-[12px]'>
            <span className='text-[#7B7B7B] font-bold'>1</span> Item 
            </p>

        </div>
        
    </div>
    <div className='w-full  '>
            <button className='bg-[#D6D6D6] w-full text-[#919191] text-sm py-1 rounded-b-[5px] '>
            Order products <IoIosArrowRoundForward className='inline text-[#919191]' />
            </button>
        </div>

</div>






</div>






</div>
    
    
    </>
  )
}
