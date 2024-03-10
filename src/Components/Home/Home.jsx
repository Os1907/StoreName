import React, { useEffect } from "react";
import ThirdSection from "./ThirdSectionHome/ThirdSection";
import TopSelling from "./Topselling/TopSelling";
import CategoriesSection from "../Catogerios/CategoriesSection";
import { Link, useLocation } from 'react-router-dom'


export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <main className="  bg-white  lg:pt-2    lg:h-screen pt-20  flex justify-center items-center  ">
        <section className="md:w-[80%]   mx-auto  py-4 ">
          <div className="grid md:grid-cols-12  md:gap-x-5 lg:gap-0 ">
            <div className="md:col-span-2 hidden md:flex  justify-center w-full   items-center  ">
              <div >
                <div className="left-Box-Hero md:px-5    rounded-md py-2 ">

              <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3  lg:pr-8 p-2  border-b-2 line">
                  Coffee <span className="font-normal ">corner</span>
                </p>
              </Link>


              <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2   border-b-2">
                  Storage <span className="font-normal">units</span>
                </p>
                </Link>


                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2  border-b-2">
                  Baby <span className="font-normal">products</span>
                </p>
                </Link>
                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2  border-b-2">
                  Cooking <span className="font-normal">tools</span>
                </p>
                </Link>
                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2  border-b-2">Lighting </p>
                </Link>


                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2  border-b-2">
                  Cleaning <span className="font-normal">tools</span>
                </p>
                </Link>
                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2  border-b-2">
                  Home <span className="font-normal">décor</span>
                </p>
                </Link>
                <Link to='/categories'>

                <p className="font-bold lg:text-sm text-[10px] lg:p-3 p-2 ">Accessories </p>
                </Link>

              </div>
            </div>
            </div>
            <div className="md:col-span-10  col-span-12  md:mx-5 w-full ">
              <div className="bg-Hero flex items-center mt-4 md:mt-0 h-96 bg-contain ">
                <div className="text flex justify-center ml-10 flex-col text-white">
                  <h1 className=" text-4xl font-bold">Deals of the day</h1>
                  <p className="mt-4 text-[17px] font-light line-clamp-1 lg:line-clamp-3 ">
                    Famous of looking clean, the new Stan Smith  are now
                  </p>
                   <p className="mb-4 text-[17px] font-light ">
                   made clean – featuring a Primegreen upper.
                    </p> 
                  <button className="heroBtn max-md:text-[9px] text-[11px]  ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CategoriesSection />
      <ThirdSection />
      <TopSelling />
    </>
  );
}
