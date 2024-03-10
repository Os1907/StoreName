import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FinshOrder() {

  return (
    <>
      <div className="lg:col-span-8 col-span-12 pt-24 pb-8   ">
        <div>
          <div className="lines  flex items-center  pt-5   justify-center flex-col lg:flex-row relative ">
            <div className="flex  items-center  w-full  justify-center lg:mr-[-30px]">
              <div className="flex  flex-col mt-5 items-center lg:mr-[-23px] ">
                <div className="w-4 h-4  bg-[#26D26B] rounded-full"></div>
                <p className="text-[8px] mb-1 xl:mb-0 lg:text-sm mainText">
                  Cart
                </p>
              </div>
              <div className="w-[25%] lg:mx-[-22px] ml-[-22px] lg:ml-0 z-20 h-[3px]  bg-[#26D26B]"></div>
              <div className="flex  flex-col mt-5 items-center mx-[-22px] ">
                <div className="w-4 h-4  bg-[#26D26B] z-20 rounded-full"></div>
                <p className="text-[8px] mb-1 xl:mb-0 lg:text-sm mainText">
                  Address
                </p>
              </div>
              <div className="lg:w-[25%] w-[50%]  ml-[-22px]   h-[3px]  bg-[#26D26B] z-20"></div>

              <div className="flex  flex-col mt-5 items-center ml-[-50px]  ">
                <div className="w-4 h-4   bg-[#26D26B]  z-20   rounded-full"></div>
                <p className="text-[8px] mb-1 xl:mb-0 lg:text-sm inline mainText">
                  Payment
                </p>
              </div>
              <div className="w-[25%]  ml-[-50px]  h-[3px]  bg-[#26D26B]"></div>
              <div className="flex  flex-col mt-5 items-center ml-[-30px]">
                <div className="w-4 h-4  bg-[#26D26B]  rounded-full"></div>
                <p className="text-[8px] mb-1 xl:mb-0 lg:text-sm mainText">
                  Complete
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:ml-20 mx-2 lg:mx-0 ">
          <div className="flex justify-center">
            <FaCheckCircle className="text-[#26D26B]  text-7xl font-bold  mt-5" />
          </div>
          <h2 className="mainText  text-2xl font-bold text-center mt-3">
            You order placed successfully
          </h2>

          <div className=" flex justify-center  ">
            <div className="flex justify-between flex-col order-shadow items-start lg:px-16 px-12 sm:px-16   rounded-[5px] py-3    mt-4 ">
              <p className="lg:text-base text-[13px] my-2 text-[#A0A0A0]">
                Order placed on :{" "}
                <span className="font-semibold lg:ml-3"> 18 November 2020</span>{" "}
              </p>
              <p className="md:text-base text-[13px] my-2 text-[#A0A0A0] ">
                Address :{" "}
                <span className=" lg:ml-20">Lorem Ipsum is simply</span>
              </p>
              <p className="md:text-base text-[13px] my-2 text-[#A0A0A0] ">
                Order ID :
                <span className=" lg:ml-20 font-semibold">#000000</span>
              </p>
              <p className="md:text-base text-[13px] my-2 text-[#A0A0A0] ">
                Recipient :
                <span className=" lg:ml-[75px] font-semibold">Name</span>
              </p>
              <p className="md:text-base text-[13px] my-2 text-[#A0A0A0] ">
                Payment method :
                <span className=" lg:ml-3 font-semibold">Bank account</span>
              </p>
              <p className="md:text-base text-[13px] my-2 text-[#A0A0A0] ">
                Total :
                <span className=" lg:ml-28 font-semibold">5,00.00 EGP</span>
              </p>
            </div>
          </div>

            <div className="flex mt-4 justify-center">
              <Link to='/home'>
              
              <button className="py-4 lg:px-10 px-4 rounded-[10px] lg:text-[12px] text-[10px]  bg-black text-white ">
              Back to shopping
              </button>
              </Link>
              <Link to='/orders'>

              <button className="lg:py-3 py-4 mx-2 lg:px-14 px-4 rounded-[10px] lg:text-[12px] text-[10px] bg-white mainText border-black border-2">
              Show you orders
              </button>
              </Link>

              
            </div>
        </div>
      </div>
    </>
  );
}
