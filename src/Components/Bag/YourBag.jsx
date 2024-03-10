import React, { useState } from "react";
import shoes from "../../Assets/images/Shoes.png";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function YourBag() {
  const [counterOne, setcounterOne] = useState(1);
  const [counterTwo, setcounterTwo] = useState(1);
  const [counterThree, setcounterThree] = useState(1);
  return (
    <>
      <section>
        <div className="sm:w-[80%]   mx-auto ">
          <div className="grid md:grid-cols-12 ">
            <div className="lg:col-span-8 col-span-12 pt-24 pb-8">
              <div className="text-center lg:text-left">
                <h2 className="mainText text-3xl font-bold ml-4">Your bag</h2>
                <p className="text-sm ml-4 mt-1">
                  Total (<span>2 item </span>){" "}
                  <span className="font-bold">EGP 1,907</span>
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row bg-white order-shadow lg:mx-5 mx-20 rounded-[5px]  relative mt-4 ">
                <div className="flex flex-col lg:flex-row items-center mt-2 ">
                  <img
                    src={shoes}
                    alt=""
                    className="lg:w-[25%] w-[60%] md:w-[40%] lg:m-4  mt-4 rounded-2xl"
                  />
                  <div className="mb-4">
                    <p className="mainText   mt-2 font-extrabold lg:text-2xl text-xl">
                      Nike Air Max 270
                    </p>
                    <p className="text-[12px] lg:text-left text-center ">
                      Size : XL
                    </p>
                    <p className="text-[12px] lg:text-left text-center">
                      Color : Red
                    </p>

                    <FaRegPenToSquare  className="mt-8 text-[#7B7B7B] lg:block hidden "/>
                  </div>
                </div>
                <div className="mt-8 flex lg:flex-col justify-between lg:items-center pb-3 lg:pb-0 ">
                  <div className="flex lg:block  lg:mb-0  lg:flex-col item-center lg:mr-4 mx-4 lg:mx-0">
                    <p className="text-[#CF0000]  font-bold  lg:text-lg lg:block inline-flex ">
                      EGP <span>3,495 </span>
                    </p>
                    <p className="line-through lg:text-[13px] inline-flex text-center text-[10px] ml-2 mt-1 lg:ml-4  ">
                      EGP 5,495
                    </p>
                  </div>
                  <div className="  lg:mb-5 ">
                    <div className="flex items-center rounded-[5px] p-1  border   border-[#0a0a0a] mr-2">
                      {
                        counterOne <= 1 ?  <RiDeleteBin2Fill className=" text-[#7B7B7B] font-bold text-[12px] pointer"/> :
                      <FiMinus
                            onClick={() => {
                            setcounterOne(counterOne - 1);
                        if(counterOne <= 1){
                            setcounterOne(1)
                        }
                            }}
                            className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                        />
                        
                      }

                      <p className=" text-[#7B7B7B]  md:text-sm text-[10px] ">
                        |{" "}
                        <span className="text-[#7B7B7B] font-bold mx-1 ">
                          {counterOne}{" "}
                        </span>
                        |
                      </p>
                      <FaPlus
                        onClick={() => {
                          setcounterOne(counterOne + 1);
                        }}
                        className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                      />

                    </div>
                  </div>
                        <MdClose className="absolute lg:top-2 lg:right-2 top-3 right-3 text-[#7B7B7B]   lg:text-[15px] text-[25px] font-bold pointer"/>
                </div>
              </div>


              <div className="flex justify-between flex-col lg:flex-row bg-white order-shadow lg:mx-5 mx-20 rounded-[5px]  relative mt-4 ">
                <div className="flex flex-col lg:flex-row items-center mt-2 ">
                  <img
                    src={shoes}
                    alt=""
                    className="lg:w-[25%] w-[60%] md:w-[40%] lg:m-4  mt-4 rounded-2xl"
                  />
                  <div className="mb-4">
                    <p className="mainText   mt-2 font-extrabold lg:text-2xl text-xl">
                      Nike Air Max 270
                    </p>
                    <p className="text-[12px] lg:text-left text-center ">
                      Size : XL
                    </p>
                    <p className="text-[12px] lg:text-left text-center">
                      Color : Red
                    </p>

                    <FaRegPenToSquare  className="mt-8 text-[#7B7B7B] lg:block hidden "/>
                  </div>
                </div>
                <div className="mt-8 flex lg:flex-col justify-between lg:items-center pb-3 lg:pb-0 ">
                  <div className="flex lg:block  lg:mb-0  lg:flex-col item-center lg:mr-4 mx-4 lg:mx-0">
                    <p className="text-[#CF0000]  font-bold  lg:text-lg lg:block inline-flex ">
                      EGP <span>3,495 </span>
                    </p>
                    <p className="line-through lg:text-[13px] inline-flex text-center text-[10px] ml-2 mt-1 lg:ml-4  ">
                      EGP 5,495
                    </p>
                  </div>
                  <div className="  lg:mb-5 ">
                    <div className="flex items-center rounded-[5px] p-1  border   border-[#0a0a0a] mr-2">
                      {
                        counterTwo <= 1 ?  <RiDeleteBin2Fill className=" text-[#7B7B7B] font-bold text-[12px] pointer"/> :
                      <FiMinus
                            onClick={() => {
                            setcounterTwo(counterTwo - 1);
                        if(counterTwo <= 1){
                            setcounterTwo(1)
                        }
                            }}
                            className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                        />
                        
                      }

                      <p className=" text-[#7B7B7B]  md:text-sm text-[10px] ">
                        |{" "}
                        <span className="text-[#7B7B7B] font-bold mx-1 ">
                          {counterTwo}{" "}
                        </span>
                        |
                      </p>
                      <FaPlus
                        onClick={() => {
                          setcounterTwo(counterTwo + 1);
                        }}
                        className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                      />

                    </div>
                  </div>
                        <MdClose className="absolute lg:top-2 lg:right-2 top-3 right-3 text-[#7B7B7B]   lg:text-[15px] text-[25px] font-bold pointer"/>
                </div>
              </div>


              <div className="flex justify-between flex-col lg:flex-row bg-white order-shadow lg:mx-5 mx-20 rounded-[5px]  relative mt-4 ">
                <div className="flex flex-col lg:flex-row items-center mt-2 ">
                  <img
                    src={shoes}
                    alt=""
                    className="lg:w-[25%] w-[60%] md:w-[40%] lg:m-4  mt-4 rounded-2xl"
                  />
                  <div className="mb-4">
                    <p className="mainText   mt-2 font-extrabold lg:text-2xl text-xl">
                      Nike Air Max 270
                    </p>
                    <p className="text-[12px] lg:text-left text-center ">
                      Size : XL
                    </p>
                    <p className="text-[12px] lg:text-left text-center">
                      Color : Red
                    </p>

                    <FaRegPenToSquare  className="mt-8 text-[#7B7B7B] lg:block hidden "/>
                  </div>
                </div>
                <div className="mt-8 flex lg:flex-col justify-between lg:items-center pb-3 lg:pb-0 ">
                  <div className="flex lg:block  lg:mb-0  lg:flex-col item-center lg:mr-4 mx-4 lg:mx-0">
                    <p className="text-[#CF0000]  font-bold  lg:text-lg lg:block inline-flex ">
                      EGP <span>3,495 </span>
                    </p>
                    <p className="line-through lg:text-[13px] inline-flex text-center text-[10px] ml-2 mt-1 lg:ml-4  ">
                      EGP 5,495
                    </p>
                  </div>
                  <div className="  lg:mb-5 ">
                    <div className="flex items-center rounded-[5px] p-1  border   border-[#0a0a0a] mr-2">
                      {
                        counterThree <= 1 ?  <RiDeleteBin2Fill className=" text-[#7B7B7B] font-bold text-[12px] pointer"/> :
                      <FiMinus
                            onClick={() => {
                            setcounterThree(counterThree - 1);
                        if(counterThree <= 1){
                            setcounterThree(1)
                        }
                            }}
                            className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                        />
                        
                      }

                      <p className=" text-[#7B7B7B]  md:text-sm text-[10px] ">
                        |{" "}
                        <span className="text-[#7B7B7B] font-bold mx-1 ">
                          {counterThree}{" "}
                        </span>
                        |
                      </p>
                      <FaPlus
                        onClick={() => {
                          setcounterThree(counterTwo + 1);
                        }}
                        className=" text-[#7B7B7B] font-bold text-[12px] pointer"
                      />

                    </div>
                  </div>
                        <MdClose className="absolute lg:top-2 lg:right-2 top-3 right-3 text-[#7B7B7B]   lg:text-[15px] text-[25px] font-bold pointer"/>
                </div>
              </div>




              
            </div>

            <div className="lg:col-span-4 lg:pt-16 lg:pb-20 col-span-12  mb-5 text-white">
              <div className="lg:mx-6 md:mx-36 sm:mx-16 mx-8  lg:h-screen pb-5  order-shadow flex flex-col rounded-b-[5px]  ">

                <div className="lg:mt-28 mt-8 flex flex-col items-center relative w-[80%] mx-auto mb-4 rounded-[5px] bg-[#F3F3F3]">
                    <input type="text" placeholder="Promo code"  className=" mainText px-2 placeholder:text-[#A0A0A0] mx-auto bg-[#F3F3F3] py-2 focus:outline-none "/>
                    <button className="bg-[#0a0a0a] px-3 py-2 absolute top-0 right-0 rounded-[5px]">
                        Apply
                    </button>

                </div>
                <p className="mainText text-left ml-8 font-bold text-xl mt-4 ">
                ORDER SUMMARY
                </p>
                <div className="flex justify-between mx-8 mainText mt-3 ">
                 <p className="text-sm">
                 2 ITEM
                 </p>
                 <p className="text-sm">
                 EGP 2,948.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 border-b-2 ">
                 <p className="text-sm">
                 SHIPPING
                 </p>
                 <p className="text-sm mr-4">
                 EGP 0.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 border-b-2 ">
                 <p className="text-sm">
                 SUB-TOTAL
                 </p>
                 <p className="text-sm ">
                 EGP 2,948.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 font-bold ">
                 <p className="text-sm">
                 TOTAL
                 </p>
                 <p className="text-sm ">
                 EGP 2,948.00
                 </p>
                </div>

                <div className="flex justify-center mt-8">
                    <button 
                     className="px-12 py-2 bg-black rounded-[5px]">
                        <Link to='/checkOut'>

                    Check out
                        </Link>
                    </button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
