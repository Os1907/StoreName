import React from 'react'
import facebook from '../../Assets/Icon/Facebook.png'
import twitter from '../../Assets/Icon/Twitter.png'
import istagram from '../../Assets/Icon/instagrm.png'
export default function Footer() {
  return (
    <>

<footer className="  bg-[#E8E8E8] ">
    <div className=" grid md:grid-cols-12 justify-center items-center sm:w-[80%] md:w-full mx-auto  p-10 text-base-content">

  <nav className='  mx-5 lg:col-span-3 my-4 col-span-12  sm:col-span-6 flex justify-center md:justify-start  ' >
  <svg xmlns="http://www.w3.org/2000/svg" width="140.765" height="36" viewBox="0 0 140.765 36" className=''>
  <g id="Group_3927" data-name="Group 3927" transform="translate(-1493.235 96)">
    <g id="Group_3927-2" data-name="Group 3927" transform="translate(1493.235 -94)">
      <g id="Group_1516" data-name="Group 1516" transform="translate(0 0)">
        <path id="Path_1181" data-name="Path 1181" d="M3.714,4.621,0,10.335v5.83a5.253,5.253,0,0,0,3.53,4.969V35.97H.612v1.188H37.428V35.97H34.5V21.134a5.253,5.253,0,0,0,3.53-4.969V10.334L34.271,4.622H3.714ZM4.36,5.809H33.63L36.44,10.08H1.584Zm18.7,30.16H14.967V26.344h8.094V35.97Zm10.249,0H24.25V25.156H13.779V35.97H4.718V21.392c.159.015.318.024.481.024A5.2,5.2,0,0,0,9.8,18.594a5.168,5.168,0,0,0,9.21,0,5.168,5.168,0,0,0,9.21,0,5.2,5.2,0,0,0,4.605,2.822c.162,0,.323-.01.481-.024Zm-.481-15.741a4.042,4.042,0,0,1-4.011-4.063H27.63a4.011,4.011,0,1,1-8.022,0H18.42a4.011,4.011,0,1,1-8.022,0H9.21A4.042,4.042,0,0,1,5.2,20.228a4.042,4.042,0,0,1-4.011-4.063v-4.9H36.84v4.9A4.042,4.042,0,0,1,32.829,20.228Z" transform="translate(0 -4.621)" fill="#1a1b36"/>
      </g>
    </g>
    <g id="Group_3928" data-name="Group 3928" transform="translate(-37 2)">
      <text id="Store_Logo" data-name="Store Logo" transform="translate(1574 -81)" fill="#11152a" font-size="16" font-family="Poppins-Bold, Poppins" font-weight="700"><tspan x="0" y="0">Store Logo</tspan></text>
      <text id="This_is_a_dummy_logo" data-name="This is a dummy logo" transform="translate(1575 -65)" fill="#11152a" font-size="9" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">This is a dummy logo</tspan></text>
    </g>
  </g>
</svg>
  </nav > 
  <nav className='text-[#0A0A0A] text-sm font-medium flex items-center lg:col-span-3 col-span-8 sm:col-span-6  my-4 mx-5  justify-center  '>
    <div className='flex flex-col'>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">Terms & Conditions</a>
    </div>
    <div className='mx-8 lg:mx-2'>

    <div className='flex items-center '>
    <img src={facebook} alt="" className='w-[10px] h-[14px] ml-[20px] mr-5' /> 
    <a className="link link-hover ml-1"> Facebook</a>
    </div>
    <div className='flex items-center  '>
    <img src={twitter} alt="" className='w-[14px] h-[14px] mx-5' /> 
    <a className="link link-hover">Twitter</a>
    </div>
    <div className='flex items-center '>
    <img src={istagram} alt="" className='w-[14px] h-[14px] mx-5' /> 
    <a className="link link-hover">Instagram</a>
    </div>
    </div>
  </nav> 
  <nav className='text-[#0A0A0A]   text-sm font-medium  my-4  flex justify-center lg:col-span-4 sm:col-span-6 col-span-12 '>
  <form >
    <fieldset className="form-control ">
      <label className="label text-[#0A0A0A] font-medium">
        <span className="label-text">Subscribe to our newsletter</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="Email Address" className=" input-bordered join-item p-2" /> 
        <button className=" hover:bg-[#0A0A0A] bg-[#0A0A0A] text-sm px-3 text-white join-item">Ok</button>
      </div>
    </fieldset>
  </form>
  </nav> 
  <nav className='text-[#0A0A0A]  text-sm font-medium   my-4 lg:col-span-2 sm:col-span-6 col-span-8  flex item-center flex-col  text-center'>
    <p className="link link-hover ">497 Evergreen Rd. Roseville, CA 95673 </p>
    <p className="link link-hover">+44 345 678 903</p>
    <p className="link link-hover"> adobexd@mail.com</p>
  </nav>
    </div>
</footer>










    
    
    
    
    </>
  )
}
