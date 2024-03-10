import React, { useEffect } from "react";
import Slider from "react-slick";
import image1 from "../../../../Assets/images/product1 high.png";
import image2 from "../../../../Assets/images/product3 high.png";
import image3 from "../../../../Assets/images/product2 high.png";
import image4 from "../../../../Assets/images/product4 high.png";
import heart from "../../../../Assets/images/heart.png";
import { Link, useLocation } from "react-router-dom";
export default function CarousolTop() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="slider-container  pb-2  ">
      <Slider {...settings}>

        <div className=" p-3 md:px-0 ">
          <div>
            <div className="  flex  justify-start  ">
      <Link to='/homeproduct'>
              <div className="flex flex-col items-left relative pointer">
                <img
                  src={image1}
                  alt=""
                  className=" md:size-[260px] size-[180px] "
                />
                <p className=" md:text-lg text-left text-[11px] font-medium ml-2">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm  text-[11px] font-bold ml-2 inline text-[#D83C3C]">
                    {" "}
                    EGP 3,495
                  </p>
                  <span className="line-through md:text-[11px] text-[10px] inline-block ml-2 font-light">
                    EGP 5,495
                  </span>
                </div>
                <div className="absolute top-0 md:right-2 right-0">
                  <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[11px] text-[10px] text-white">
                    sale 20%
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute " />
              </div>
        </Link>
            </div>
          </div>
        </div>


        <div className=" p-3 md:px-0 ">
          <div>
            <div className="  flex justify-start   ">
        <Link to='/homeproduct'>
              <div className="flex flex-col items-left pointer relative">
                <img
                  src={image2}
                  alt=""
                  className=" md:size-[260px] size-[180px]"
                />
                <p className="md:text-lg text-left text-[11px] font-medium ml-2">
                  Product name
                </p>
                <p className="md:text-sm  text-[11px] font-bold ml-2 inline text-[#0A0A0A]">
                  {" "}
                  EGP 3,495
                </p>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
        </Link>
            </div>
          </div>
        </div>


        <div className="p-3 md:px-0 ">
          <div>
            <div className="   flex justify-start relative  ">
        <Link to='/homeproduct'>
              <div className="flex flex-col items-left pointer ">
                <img
                  src={image3}
                  alt=""
                  className=" md:size-[260px] size-[180px]"
                />
                <p className="md:text-lg text-left text-[11px]  font-medium ml-2">
                  Product name
                </p>
                <p className="md:text-sm  text-[11px] font-bold ml-2 inline text-[#0A0A0A]">
                  {" "}
                  EGP 3,495
                </p>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
        </Link>
            </div>
          </div>
        </div>


        <div className=" p-3 md:px-0  ">
          <div>
            <div className="  flex justify-start   ">
        <Link to='/homeproduct'>
              <div className="flex flex-col items-left relative pointer  ">
                <img
                  src={image4}
                  alt=""
                  className="md:size-[260px] size-[180px]"
                />
                <p className=" md:text-lg text-left text-[11px] font-medium ml-2 ">
                  Product name
                </p>
                <div className="flex  items-center ">
                  <p className="md:text-sm text-[11px] font-bold ml-2 inline text-[#D83C3C]">
                    {" "}
                    EGP 3,495
                  </p>
                  <span className="line-through md:text-[11px] text-[10px] inline-block ml-4 font-light">
                    EGP 5,495
                  </span>
                </div>
                <div className="absolute top-[-5px]  right-0">
                  <p className=" bg-[#D83C3C] inline px-2 p-1 rounded-[5px] md:text-[11px] text-[10px] text-white">
                    sale 20%
                  </p>
                </div>
                <img src={heart} alt="" className="top-5 left-5 absolute" />
              </div>
        </Link>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
}
