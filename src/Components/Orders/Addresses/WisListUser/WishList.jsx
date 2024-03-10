import React from "react";
import image1 from "../../../../Assets/images/product1 high.png";
import image2 from "../../../../Assets/images/product3 high.png";
import image3 from "../../../../Assets/images/product2 high.png";
import image4 from "../../../../Assets/images/product4 high.png";
import heart from "../../../../Assets/images/heart.png";

export default function WishList() {
  return (
    <>
      <div className="lg:col-span-8 col-span-12 mainText pt-26  ">
        <h2 className="mt-12 text-3xl lg:text-left text-center font-bold">
          WishList
        </h2>
        <div className=" grid grid-cols-12   ">
          <div className="  p-3 md:px-0 md:mx-4 col-span-6   ">
            <div>
              <div className="  flex  justify-start">
                <div className="flex flex-col items-left relative  ">
                  <img
                    src={image1}
                    alt=""
                    className="md:size-80 size-36 "
                  />
                  <p className=" md:text-lg text-left text-[11px] font-medium ml-2">
                    Product name
                  </p>
                  <div className="flex  items-center ">
                    <p className="md:text-sm  text-[9px] font-bold ml-2 inline text-[#D83C3C]">
                      {" "}
                      EGP 3,495
                    </p>
                    <span className="line-through md:text-[11px] text-[7px] inline-block ml-2 font-light">
                      EGP 5,495
                    </span>
                  </div>
                  <div className="absolute top-[-5px] md:right-2 right-0">
                    <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] lg:text-[11px] text-[7px] text-white">
                      sale 20%
                    </p>
                  </div>
                  <img src={heart} alt="" className="top-3 left-3 absolute size-4  " />
                </div>
              </div>
            </div>
          </div>

          <div className="  p-3 md:px-0 md:mx-4  col-span-6 ">
            <div>
              <div className="  flex justify-start  ">
                <div className="flex flex-col items-left relative">
                  <img
                    src={image2}
                    alt=""
                    className=" md:size-80 size-36"
                  />
                  <p className="md:text-lg text-left text-[11px] font-medium ml-2">
                    Product name
                  </p>
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline text-[#0A0A0A]">
                    {" "}
                    EGP 3,495
                  </p>
                  <img src={heart} alt="" className="top-2 left-2 absolute size-4" />
                </div>
              </div>
            </div>
          </div>

          <div className=" p-3 md:px-0 md:mx-4 col-span-6 ">
            <div>
              <div className="   flex justify-start relative  ">
                <div className="flex flex-col items-left ">
                  <img
                    src={image3}
                    alt=""
                    className=" md:size-80 size-36"
                  />
                  <p className="md:text-lg text-left text-[11px]  font-medium ml-2">
                    Product name
                  </p>
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline text-[#0A0A0A]">
                    {" "}
                    EGP 3,495
                  </p>
                  <img src={heart} alt="" className="top-2 left-2 absolute size-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="  p-3 md:px-0 md:mx-4 col-span-6 ">
            <div>
              <div className="  flex justify-start  ">
                <div className="flex flex-col ;g:items-center items-start relative  ">
                  <img
                    src={image4}
                    alt=""
                    className=" md:size-80 size-36"
                  />
                  <p className=" md:text-lg text-left text-[11px] font-medium mr-6  ">
                    Product name
                  </p>
                  <div className="flex  items-center ">
                    <p className="md:text-sm text-[9px] font-bold lg:ml-2 inline text-[#D83C3C] mr-2">
                      {" "}
                      EGP 3,495
                    </p>
                    <span className="line-through md:text-[11px] text-[7px] inline-block ml-4 font-light">
                      EGP 5,495
                    </span>
                  </div>
                  <div className="absolute top-[-10px]  right-0">
                    <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[11px] text-[7px] text-white">
                      sale 20%
                    </p>
                  </div>
                  <img src={heart} alt="" className="top-2 left-2 absolute size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
