import React, { useEffect, useState } from "react";
import img1 from "../../Assets/images/Group 384@2x.png";
import img2 from "../../Assets/images/Group 4163@2x.png";
import img3 from "../../Assets/images/Video@2x.png";
import pettern from "../../Assets/images/70913925-paper-texture-cardboard-background-for-design-with-copy-space-text-or-image-recyclable-material-that@2x.png";
import pettern2 from "../../Assets/images/Group 413@2x.png";
import pettern3 from "../../Assets/images/Group 412@2x.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function HomeProduct() {
    const [One, setOne] = useState(true)
    const [Two, setTwo] = useState(false)
    const [Three, setThree] = useState(false)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="pt-20  bg-[#FAFAFA] mainText ">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-2 col-span-12 -order-1 lg:-order-3  lg:bg-inherit  ">
            <div className=" xl:mx-16 mx-12 lg:mb-11 flex lg:block justify-center">
              <img 
              onClick={()=>{
                setOne(false)
                setTwo(false)
                setThree(true)

              }}
                src={img1}
                alt=""
                className="mt-4 rounded-[5px] w-[15%] mx-2 lg:mx-0 lg:w-auto pointer"
              />

              <img
              onClick={()=>{
                setOne(true)
                setTwo(false)
                setThree(false)

              }}
                src={img3}
                alt=""
                className="mt-4 rounded-[5px] mx-2 lg:mx-0 w-[15%] lg:w-auto pointer"
              />
              <img
              onClick={()=>{
                setOne(false)
                setTwo(true)
                setThree(false)

              }}
                src={img2}
                alt=""
                className="mt-4 rounded-[5px] mx-2 lg:mx-0 w-[15%] lg:w-auto pointer"
              />
              <img
              onClick={()=>{
                setOne(false)
                setTwo(false)
                setThree(true)

              }}
                src={img1}
                alt=""
                className="mt-4 rounded-[5px] w-[15%] mx-2 lg:mx-0 lg:w-auto pointer"
              />
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 -order-2  ">
            <div className="lg:mx-6 mx-4 sm:mx-24 lg:mt-4 flex justify-center ">
                {
                    One? <img src={img3} alt="" className="md:w-[75%] lg:w-auto" /> : ""
                }
                {
                    Two? <img src={img2} alt="" className="md:w-[75%] lg:w-auto" /> : ""
                }
                {
                    Three? <img src={img1} alt="" className="md:w-[75%] lg:w-auto" /> : ""
                }
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12 my-4 lg:mx-0  -order-1 ml-5 ">
            <div className="mt-8 lg:mx-4 sm:mx-28 md:mx-32 md:ml-52  mx-auto mainText">
              <div className="flex justify-between">
                <h2 className="font-bold lg:text-2xl md:text-xl ">
                  Product name
                </h2>
                <div className="flex items-center mr-20">
                  <div className="flex justify-center items-center ">
                    <MdOutlineStar className="text-[#F4BE25] inline mx-1" />
                    <span className="text-[#F4BE25]">4.6</span>
                  </div>
                  <IoIosHeart className="text-[#BDBDBD] ml-2 lg:text-[26px] md:text-lg" />
                </div>
              </div>
              <p className="md:text-[12px]">Lorem Ipsum is simply dummy text</p>
              <div className="flex  items-center  ">
                <p className="xl:text-xl md:text-sm text-[13px] font-bold inline text-[#D83C3C]">
                  {" "}
                  EGP 3,495
                </p>
                <span className="line-through xl:text-[13px]  text-[10px] inline-block ml-4 font-normal">
                  EGP 5,495
                </span>
                <div className="mb-2 ml-5">
                  <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[11px] text-[10px] text-white">
                    sale 20%
                  </p>
                </div>
              </div>
              <p className="text-[10px] md:text-[13px] font-light">
                All prices include VAT{" "}
                <span className="underline"> Details </span>{" "}
              </p>
            </div>
            <div className="flex  ml-1  lg:mb-3 mb-1 sm:mx-28 md:mx-32 lg:mx-4 md:ml-52 mt-4 items-center">
              <p className="font-medium mainText md:text:base text-[12px]">
                Amount :{" "}
              </p>
              <input
                type="number"
                defaultValue="2"
                name="inp_ut"
                id="number-input"
                className="font-normal pl-1 text-[12px] py-1 inline w-16 ml-2 p-3 focus:outline-0 bg-[#F2F2F2] rounded-[5px]"
              />
            </div>

            <div className=" ml-1 sm:mx-28 md:mx-32 lg:mx-4 md:ml-52 lg:mt-4 mt-2 ">
              <p className="font-medium  mainText md:text:base text-[12px]">
                Size :
              </p>
              <div className="mt-2">
                <span className=" bg-[#ffff] word-Shadow px-4lg:px-4 p-1 lg:text-base text-[12px] px-3  rounded-[5px] cursor-pointer ">
                  S
                </span>
                <span className=" bg-[#f2f2f2] mx-2 lg:px-4 p-1 lg:text-base text-[12px] px-3  rounded-[5px] cursor-pointer ">
                  M
                </span>
                <span className=" bg-[#f2f2f2] mx-2 lg:px-4 p-1 lg:text-base text-[12px] px-3  rounded-[5px] cursor-pointer ">
                  L
                </span>
                <span className=" bg-[#f2f2f2] mx-2 lg:px-4 p-1 lg:text-base text-[12px] px-3  rounded-[5px] cursor-pointer ">
                  XL
                </span>
                <span className=" bg-[#f2f2f2] mx-2 lg:px-4 p-1 lg:text-base text-[12px] px-3  rounded-[5px] cursor-pointer ">
                  XXL
                </span>
              </div>
            </div>

            <div className=" ml-1  lg:mt-8 mt-3 sm:mx-28 md:mx-32 lg:mx-4 md:ml-52  ">
              <p className="font-medium mainText md:text:base text-[12px]">
                Color :
              </p>
              <div className="mt-2 flex">
                <div className=" bg-[#F54545] lg:h-8 h-5 lg:w-8 w-5 rounded-full lg:mx-2 mx-1 "></div>
                <div className=" bg-[#2639E4] lg:h-8 h-5 lg:w-8 w-5 rounded-full lg:mx-2 mx-1"></div>
                <div className=" bg-[#2DD55F] lg:h-8 h-5 lg:w-8 w-5 rounded-full lg:mx-2 mx-1"></div>
                <div className=" bg-[#E49630] lg:h-8 h-5 lg:w-8 w-5 rounded-full lg:mx-2 mx-1 border-2 border-[#B36B0E] "></div>
              </div>
            </div>

            <div className=" ml-1  lg:mt-8 mt-3 sm:mx-28 md:mx-32 lg:mx-4 md:ml-52  ">
              <p className="font-medium mainText md:text:base text-[12px]">
                Image :
              </p>
              <div className="md:mt-2 flex">
                <div className=" h-14  w-14 rounded-full  pointer">
                  <img src={pettern} alt="" />
                </div>
                <div className=" mt-2 h-8 w-8 rounded-full lg:mx-3 mx-1 pointer">
                  <img src={pettern2} alt="" />
                </div>
                <div className=" mt-2 h-8 w-8 rounded-full lg:mx-3 mx-1 pointer">
                  <img src={pettern3} alt="" />
                </div>
              </div>
              <p className="text-[#CF0000] font-medium md:text-[13px] text-[10px]">
                Only 1 left in stock!
              </p>
            </div>

            <div className="flex  ml-1 mt-8 sm:mx-28 md:mx-32 lg:mx-4 md:ml-52">
              <button className="inline bg-[#0a0a0a] px-9 py-2 rounded-[5px] text-[12px] text-white">
                Add to cart{" "}
                <MdOutlineAddShoppingCart className="inline ml-2 text-xl" />
              </button>
            </div>
          </div>

          {/* half side */}
          <div className="col-span-12 bg-white mt-4">
            <div className="md:w-[80%] mx-auto">
              <div className="   mt-5 grid grid-cols-12">
                <div className="col-span-12 border-b-2 mt-3 border-[#EFEFEF] mainText flex justify-center lg:mx-0 mx-14">
                  <button className="bg-[#F2F2F2]  lg:py-3 py-2  lg:px-4 px-2 text-sm lg:text-base font-bold rounded-t-[5px]">
                    DESCRIPTION
                  </button>

                  <button className="  lg:py-3 py-2  lg:px-4 px-2 text-sm lg:text-base mx-4 rounded-t-[5px]">
                    SPECIFICATIONS
                  </button>

                  <button className="  lg:py-3 py-2  lg:px-4 px-2 text-sm lg:text-base  rounded-t-[5px]">
                    CUSTOMER REVIEWS
                  </button>
                </div>

                <div className="col-span-12 grid grid-cols-12 mt-10">
                  <div className="lg:col-span-6 col-span-12  lg:mx-2 sm:mx-32 mx-4  lg:ml-0 flex flex-col  justify-center   ">
                    <h3 className="font-bold md:text-xl text-base lg:my-4 my-2">
                      Big Title
                    </h3>
                    <p className="lg:text-base text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisifwcing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      roipi magna aliqua. Ut enim ad minim veeniam, quis
                      nostruklad exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in tufpoy voluptate velit esse cillum dolore
                      eu fugiat nulla parieratur. Excepteur sint.
                    </p>
                  </div>

                  <div className=" lg:col-span-6 col-span-12 mt-4 lg:mt-0  flex justify-center">
                    <img src={img1} alt="" className="lg:w-[70%] w-[50%] " />
                  </div>
                </div>

                <div className="col-span-12 grid grid-cols-12 mt-10 pb-12  border-b-4  border-[#EFEFEF] ">
                  <div className=" lg:col-span-6 col-span-12 mt-4 lg:mt-0 flex justify-center -order-1 lg:order-1">
                    <img src={img2} alt="" className="lg:w-[70%] w-[50%]" />
                  </div>

                  <div className="lg:col-span-6 col-span-12  lg:mx-2 sm:mx-32 mx-4  lg:ml-0 flex flex-col  justify-center  -order-2 lg:order-2 ">
                    <h3 className="font-bold md:text-xl text-base lg:my-4 my-2">
                      Big Title
                    </h3>
                    <p className="lg:text-base text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisifwcing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      roipi magna aliqua. Ut enim ad minim veeniam, quis
                      nostruklad exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in tufpoy voluptate velit esse cillum dolore
                      eu fugiat nulla parieratur. Excepteur sint.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 mt-10 pb-12 border-b-4 lg:mx-2 sm:mx-32 mx-4  border-[#EFEFEF] ">
                  <h3 className="font-bold md:text-xl text-base lg:my-4 my-2">
                    SPECIFICATIONS
                  </h3>
                  <p className="lg:text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisifwcing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore roipi
                    magna aliqua. Ut enim ad minim veeniam, quis nostruklad
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in tufpoy
                    voluptate velit esse cillum dolore eu fugiat nulla
                    parieratur. Excepteur sint.Lorem ipsum dolor sit amet,
                    consectetur adipisifwcing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore roipi magna aliqua. Ut enim
                    ad minim veeniam, quis nostruklad exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in tufpoy voluptate velit esse
                    cillum dolore eu fugiat nulla parieratur. Excepteur
                    sint.Lorem ipsum dolor sit amet, consectetur adipisifwcing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    roipi magna aliqua. Ut enim ad minim veeniam, quis
                    nostruklad exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in tufpoy voluptate velit esse cillum dolore eu fugiat nulla
                    parieratur. Excepteur sint.
                  </p>
                </div>

                <div className="col-span-12 mt-10 pb-12 lg:mx-2 sm:mx-32 mx-4  ">
                  <h3 className="font-bold md:text-xl text-base mainText lg:my-4 my-2">
                    CUSTOMER REVIEWS
                  </h3>
                  <div className="w-full word-Shadow rounded-[15px]">
                    <div className="mx-4 p-4">
                      <div className="flex justify-between">
                        <h4 className="font-bold   md:text-xl text-base ">
                          name
                        </h4>
                        <div className="flex items-center mr-6">
                          <div className="flex justify-center items-center ">
                            <span className="text-[#F4BE25]">4.6</span>
                            <div className="flex text-[#F4BE25] ml-2">
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStarHalf />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="md:text-sm text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut ero labore et
                        dolore Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        ero labore et dolore
                      </p>
                    </div>
                  </div>

                  <div className="w-full word-Shadow rounded-[15px] mt-10">
                    <div className="mx-4 p-4">
                      <div className="flex justify-between">
                        <h4 className="font-bold   md:text-xl text-base ">
                          name
                        </h4>
                        <div className="flex items-center mr-6">
                          <div className="flex justify-center items-center ">
                            <span className="text-[#F4BE25]">4.6</span>
                            <div className="flex text-[#F4BE25] ml-2">
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStar />
                              <MdOutlineStarHalf />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="md:text-sm text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut ero labore et
                        dolore Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        ero labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
