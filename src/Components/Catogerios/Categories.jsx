import React, { useEffect } from 'react'
import { VscDash } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiX } from "react-icons/fi";
import image1 from "../../Assets/images/product1.png";
import image2 from "../../Assets/images/product3 high.png";
import image3 from "../../Assets/images/product2 high.png";
import heart from "../../Assets/images/heart.png";
import { Link, useLocation } from 'react-router-dom';



export default function Categories() {
  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
      <section className=" bg-white  pt-28 pb-16   ">
        <div className="md:w-[80%] w-[92%] mx-auto">
          <h2 className="mainText lg:text-left lg:text-4xl text-3xl text-center font-bold mb-5  ">
            Category name
          </h2>
          <div className="grid lg:grid-cols-12 md:mt-0  ">
            
            <div className="lg:col-span-3  col-span-12  md:flex  justify-left items-start  flex-col    ">
              <div className=" left-Box-Hero w-full lg:w-auto   pr-5 pl-2 rounded-md py-2  mainText  ">
                <div className='flex justify-between  '>
                  <p className="font-bold text-sm p-3 pr-24  inline  ">
                  Filter by{" "}
                </p>
                <VscDash className="inline mainText rounded-[5px] text-[18px] ml-10  bg-[#F2F2F2]" />
                </div>
                
                <p className="font-bold text-sm  pl-8 pr-16 mt-2  ">
                  Price range{" "}
                </p>
                <div className="my-1 flex flex-col border-b-2 pb-4 ">
                  <div className="pl-8 pr-16 flex justify-between ">
                    <label
                      for="number-input"
                      className="  text-[12px] font-normal  inline"
                    >
                      From
                    </label>
                    <label
                      for="number-inputEnd"
                      className="   text-[12px] font-normal mr-3 "
                    >
                      to
                    </label>
                  </div>
                  <div className='flex justify-between mt-1'>
                    <input
                      type="number"
                      defaultValue="20"
                      name=""
                      id="number-input"
                      className="font-normal pl-1 text-[12px] py-1 inline w-16 ml-8 focus:outline-0 bg-[#F2F2F2] rounded-[5px]"
                    />
                    <input
                      type="number"
                      defaultValue="500"
                      id="number-inputEnd"
                      className="font-normal pl-1 mr-6  text-[12px] inline w-16 ml-10 py-1 focus:outline-0 bg-[#F2F2F2] rounded-[5px]"
                    />
                  </div>
                  <input
                    type="range"
                    defaultValue="20"
                    className="font-light px-8    "
                  />
                  <div className="flex justify-end mr-8 mt-1">
                    <button className="text-[11px]  bg-[#0A0A0A] text-white px-3 py-1 rounded-[5px] inline">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="py-3 border-b-2">
                  <div className="pl-4 pr-16 flex justify-start  ">
                    <input
                      type="checkbox"
                      id="sale"
                      className="bg-[#E1E1E1] myCheckBox rounded-[4px]"
                    />
                    <label for="sale" className="font-bold ml-2 text-sm">
                      On sale
                    </label>
                  </div>
                </div>

                <div className="py-3 border-b-2">
                  <div className="pl-8 pr-3 flex justify-between w-full  ">
                    <p className="font-medium ml-2 text-sm  cursor-pointer">
                      Color
                    </p>
                    <IoIosArrowForward className="cursor-pointer" />
                  </div>
                </div>

                <div className="py-3 ">
                  <div className="pl-8 pr-3   ">
                    <div className="flex justify-between">
                      <p className="font-bold ml-2 text-sm  cursor-pointer">
                        Gender
                      </p>
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>

                    <div>
                      <div className="pl-2 pr-16 flex justify-start mt-3 ">
                        <input
                          type="checkbox"
                          id="Men"
                          className="bg-[#E1E1E1] myCheckBox rounded-[4px]"
                        />
                        <label for="Men" className="font-normal ml-2 text-sm">
                          Men
                        </label>
                      </div>
                      <div className="pl-2 pr-16 flex justify-start mt-3 ">
                        <input
                          type="checkbox"
                          id="Women"
                          className="bg-[#E1E1E1] myCheckBox rounded-[4px]"
                        />
                        <label for="Women" className="font-normal ml-2 text-sm">
                          Women
                        </label>
                      </div>
                      <div className="pl-2 pr-16 flex justify-start mt-3 ">
                        <input
                          type="checkbox"
                          id="Unisex"
                          className="bg-[#E1E1E1] myCheckBox rounded-[4px]"
                        />
                        <label
                          for="Unisex"
                          className="font-normal ml-2 text-sm"
                        >
                          Unisex
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div className="lg:col-span-9 col-span-12 grid grid-cols-12 gap-4 lg:gap-0 mt-4 lg:mt-0  w-full  ">
            <div className='col-span-12 mb-2 flex justify-between '>
              <p className='inline bg-[#F2F2F2] px-3 py-1 cursor-pointer rounded-[5px] text-sm mainText ml-2'> Men <FiX  className='inline ml-2'/> </p>
              <div className=' lg:mr-11'>
              <p className='inline bg-inherit px-2 py-1 cursor-pointer rounded-[5px] text-sm mainText  border border-[#CBCBCB] '> Reset </p>
              <p className='inline  px-3 py-1 cursor-pointer rounded-[5px] text-sm mainText font-bold'> Sort by  <IoIosArrowDown className="cursor-pointer inline font-bold" /> </p>

              </div>
            </div>
            <div className="  col-span-4 flex  justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image1}
                  alt=""
                  className="  size-[200px]"
                />
                <p className=" md:text-lg text-left text-[11px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline text-[#D83C3C]">
                    {" "}
                    EGP 3,495
                  </p>
                  <span className="line-through md:text-[10px] text-[7px] inline-block ml-2 font-light">
                    EGP 5,495
                  </span>
                </div>
                <div className="absolute top-0 md:right-2 right-0">
                  <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[11px] text-[10px] text-white">
                    sale 20%
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>


            <div className="  col-span-4 flex  justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image2}
                  alt=""
                  className=" size-[200px]"
                />
                <p className=" md:text-lg text-left text-[10px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline mainText">
                    {" "}
                    EGP 3,495
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>

            <div className="  col-span-4 flex  justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image3}
                  alt=""
                  className="size-[200px]"
                />
                <p className=" md:text-lg text-left text-[10px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline mainText">
                    {" "}
                    EGP 3,495
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>

            <div className="  col-span-4 flex mt-4 justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image1}
                  alt=""
                  className=" size-[200px]"
                />
                <p className=" md:text-lg text-left text-[11px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline text-[#D83C3C]">
                    {" "}
                    EGP 3,495
                  </p>
                  <span className="line-through md:text-[10px] text-[7px] inline-block ml-2 font-light">
                    EGP 5,495
                  </span>
                </div>
                <div className="absolute top-0 md:right-2 right-0">
                  <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[10px] text-[10px] text-white">
                    sale 20%
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>


            <div className="  col-span-4 flex mt-4  justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image2}
                  alt=""
                  className=" size-[200px]"
                />
                <p className=" md:text-lg text-left text-[11px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline mainText">
                    {" "}
                    EGP 3,495
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>

            <div className="  col-span-4 flex mt-4  justify-start ">
            <Link to='/homeproduct'>

              <div className="flex flex-col items-left relative ">
                <img
                  src={image3}
                  alt=""
                  className="size-[200px]"
                />
                <p className=" md:text-lg text-left text-[10px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[9px] font-bold ml-2 inline mainText">
                    {" "}
                    EGP 3,495
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
              </Link>

            </div>

            <div className='col-span-12 my-5   '>
              <button
              className='bg-[#F2F2F2] mainText w-full py-2 font-medium rounded-[5px]'
              >
                Load more
              </button>
            </div>

            



            
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
