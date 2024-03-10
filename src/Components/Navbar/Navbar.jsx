import React, { useContext } from 'react'
import Login from '../LogIn/Login'
import { storeContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import SignUp from '../LogIn/SignIn/SignUp'

export default function Navbar() {
  let {setFinshorder , setLogIn , setshappingMethod , setpayment} = useContext(storeContext)
   
   function displayLogin(){
    setLogIn(true)
   }
  return (
    <>
<div className="navbar fixed  h-[70px] z-50 ">
  <div className="navbar-start lg:w-[15%] w-[50]% ">
    <div className="dropdown  ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] mainText p-2 shadow bg-base-100 rounded-box w-80">
      <Link to="home" className='hover:bg-zinc-200 rounded-[15px] focus:bg-black focus:text-white'><li className='mx-4 my-3 font-semibold '>Home</li></Link>
      
      <li className=' my-3 font-semibold focus:bg-black focus:text-white'>
        <details className='focus:bg-black focus:text-white'>
          <summary className='focus:bg-black focus:text-white'>Product</summary>
          <ul className="px-5 flex flex-col items-center">
           <Link to="categories"> <li className='my-3 focus:bg-black focus:text-white'> <p>Coffe Corner</p> </li> </Link>
           <Link to="categories"><li className='my-3 focus:bg-black focus:text-white'> <p>Storage units</p> </li></Link>
           <Link to="categories"> <li className='my-3 focus:bg-black focus:text-white'> <p>Coffe Corner</p> </li></Link>
          </ul>
        </details>
      </li>
     
      <Link to="about" className='hover:bg-zinc-200 rounded-[15px] focus:bg-black focus:text-white'><li className='mx-4 my-3 font-semibold' >About us</li></Link>
      <Link to="contact" className='hover:bg-zinc-200 rounded-[15px] focus:bg-black focus:text-white'><li className='mx-4 my-3 font-semibold'>Contact us</li></Link>
      </ul>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="140.765" height="36" viewBox="0 0 140.765 36" className='ml-11  my-[17px]'>
  <g id="Group_3927" data-name="Group 3927" transform="translate(-1493.235 96)">
    <g id="Group_3927-2" data-name="Group 3927" transform="translate(1493.235 -94)">
      <g id="Group_1516" data-name="Group 1516" transform="translate(0 0)">
        <path id="Path_1181" data-name="Path 1181" d="M3.714,4.621,0,10.335v5.83a5.253,5.253,0,0,0,3.53,4.969V35.97H.612v1.188H37.428V35.97H34.5V21.134a5.253,5.253,0,0,0,3.53-4.969V10.334L34.271,4.622H3.714ZM4.36,5.809H33.63L36.44,10.08H1.584Zm18.7,30.16H14.967V26.344h8.094V35.97Zm10.249,0H24.25V25.156H13.779V35.97H4.718V21.392c.159.015.318.024.481.024A5.2,5.2,0,0,0,9.8,18.594a5.168,5.168,0,0,0,9.21,0,5.168,5.168,0,0,0,9.21,0,5.2,5.2,0,0,0,4.605,2.822c.162,0,.323-.01.481-.024Zm-.481-15.741a4.042,4.042,0,0,1-4.011-4.063H27.63a4.011,4.011,0,1,1-8.022,0H18.42a4.011,4.011,0,1,1-8.022,0H9.21A4.042,4.042,0,0,1,5.2,20.228a4.042,4.042,0,0,1-4.011-4.063v-4.9H36.84v4.9A4.042,4.042,0,0,1,32.829,20.228Z" transform="translate(0 -4.621)" fill="#1a1b36"/>
      </g>
    </g>
    <g id="Group_3928" data-name="Group 3928" transform="translate(-37 2)">
      <text id="Store_Logo" data-name="Store Logo" transform="translate(1574 -81)" fill="#11152a" fontSize="16" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="0">Store Logo</tspan></text>
      <text id="This_is_a_dummy_logo" data-name="This is a dummy logo" transform="translate(1575 -65)" fill="#11152a" fontSize="9" fontFamily="Poppins-Regular, Poppins"><tspan x="0" y="0">This is a dummy logo</tspan></text>
    </g>
  </g>
</svg>
  </div>
  <div className="navbar-center hidden  lg:flex  mr-auto  ">
    <ul className="menu menu-horizontal px-1 text-[#0A0A0A] font-semibold">
      <li className='mx-4 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'><Link to="home" className='focus:bg-black focus:text-white'>Home</Link></li>
      <li className='mx-4 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'>
        <details className='hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white '>
          <summary className='focus:bg-black focus:text-white'>Product</summary>
          <ul className="flex  flex-col items-center">
            <li className='my-2 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white' > <p>Coffe Corner</p> </li>
            <li className='my-2 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'> <p>Storage units</p> </li>
            <li className='my-2 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'> <p>Coffe Corner</p> </li>
          </ul>
        </details>
      </li>
      <li className='mx-4 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'><Link to="about" className='focus:bg-black focus:text-white'>About us</Link></li>
      <li className='mx-4 hover:bg-zinc-200 rounded-[8px] focus:bg-black focus:text-white'><Link to="contact" className='focus:bg-black focus:text-white'>Contact us</Link></li>
    </ul>
  </div>
  <div className=" w-[40%]    flex sm:justify-center justify-end md:mr-[45px] ">
    <label className=" md:flex hidden  navBar-input    items-center gap-2 mr-5">
  <input type="text"  className="bg-[#F2F2F2] pl-4 focus:outline-none grow  " placeholder="Search " />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 mr-2 bg-grayColor opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<div className="icons-Button flex ">
<Link 
onClick={()=>{
  setshappingMethod(true)
  setpayment(false)
  setFinshorder(false)
}}
 to="checkout">

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 23.818 22.826" className='ml-5'>
  <g id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" transform="translate(1 1)">
    <path id="Path_198" data-name="Path 198" d="M13.983,30.992A.992.992,0,1,1,12.992,30,.992.992,0,0,1,13.983,30.992Z" transform="translate(-5.058 -11.157)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path id="Path_199" data-name="Path 199" d="M30.483,30.992A.992.992,0,1,1,29.492,30,.992.992,0,0,1,30.483,30.992Z" transform="translate(-10.649 -11.157)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path id="Path_200" data-name="Path 200" d="M1.5,1.5H5.467L8.125,14.779a1.983,1.983,0,0,0,1.983,1.6h9.639a1.983,1.983,0,0,0,1.983-1.6l1.587-8.32H6.459" transform="translate(-1.5 -1.5)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </g>
</svg>
</Link>


<Link to="orders">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18.089 18.088" className='mx-6 '>
  <path id="Icon_material-language" data-name="Icon material-language" d="M12.035,3a9.044,9.044,0,1,0,9.053,9.044A9.04,9.04,0,0,0,12.035,3ZM18.3,8.427H15.635a14.153,14.153,0,0,0-1.248-3.22A7.262,7.262,0,0,1,18.3,8.427ZM12.044,4.845a12.74,12.74,0,0,1,1.727,3.582H10.317A12.74,12.74,0,0,1,12.044,4.845Zm-7,9.008a7.075,7.075,0,0,1,0-3.618H8.1a14.937,14.937,0,0,0-.127,1.809A14.937,14.937,0,0,0,8.1,13.853Zm.742,1.809H8.454A14.153,14.153,0,0,0,9.7,18.882,7.223,7.223,0,0,1,5.786,15.662ZM8.454,8.427H5.786A7.223,7.223,0,0,1,9.7,5.207,14.153,14.153,0,0,0,8.454,8.427Zm3.591,10.817a12.74,12.74,0,0,1-1.727-3.582h3.455A12.74,12.74,0,0,1,12.044,19.243Zm2.116-5.39H9.928a13.307,13.307,0,0,1-.145-1.809,13.191,13.191,0,0,1,.145-1.809h4.233a13.191,13.191,0,0,1,.145,1.809A13.306,13.306,0,0,1,14.161,13.853Zm.226,5.029a14.153,14.153,0,0,0,1.248-3.22H18.3a7.262,7.262,0,0,1-3.916,3.22Zm1.6-5.029a14.937,14.937,0,0,0,.127-1.809,14.937,14.937,0,0,0-.127-1.809h3.057a7.075,7.075,0,0,1,0,3.618Z" transform="translate(-3 -3)" fill="#0a0a0a"/>
</svg>
</Link>
<svg  className='pointer'
 onClick={()=> displayLogin() }
xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19.851 19.851" >
  <g id="Icon_feather-log-in" data-name="Icon feather-log-in" transform="translate(1 1)">
    <path id="Path_203" data-name="Path 203" d="M22.5,4.5h3.967A1.983,1.983,0,0,1,28.45,6.483V20.367a1.983,1.983,0,0,1-1.983,1.983H22.5" transform="translate(-10.599 -4.5)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path id="Path_204" data-name="Path 204" d="M15,20.417l4.959-4.959L15,10.5" transform="translate(-8.058 -6.533)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path id="Path_205" data-name="Path 205" d="M16.4,18H4.5" transform="translate(-4.5 -9.074)" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </g>
</svg>
</div>
  </div>
</div>

    <Login/>
    <SignUp/>
    
    
    </>
  )
}
