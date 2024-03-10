import React from 'react'
import Slider from "react-slick";
import image1 from "../../../Assets/images/caroline-attwood-m3jtY6EobzM-unsplash.png"
import image2 from "../../../Assets/images/home-coffee-bar-the-edwardian-villa-in-cardiff-dsc-8806-1200x1798-1580766634.png"
import { Link } from 'react-router-dom';

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="slider-container  md:mt-[-25px] w-full  pb-5     ">
    <Slider {...settings}>
    <div className=' md:mt-[-25px] md:ml-24 md:mr-10  flex justify-center' >
      <div>
      <div className='  flex  justify-center   md:mr-20'>
      <Link to='/categories'>

        <div className='flex flex-col items-left md:mr-10 '>
        <img src={image2} alt="" className='lg:size-[580px]'/>
        <p className=' text-sm md:text-lg font-medium  ml-10 md:ml-20    md:mt-[-20px] lg:mt[-40px]'>Coffec Corner</p>
        </div>
        </Link>

        </div>
      </div>
    </div>



    <div className=' md:mt-[-25px] md:ml-24  md:mr-10' >
      <div>
      <Link to='/categories'>
        
      <div className='  flex justify-start  md:mr-20'>
        <div className='flex flex-col md:items-left md:mr-10 '>
        <img src={image1} alt=""  className='lg:size-[580px]'/>
        <p className=' text-sm md:text-lg font-medium  md:ml-20 ml-10     md:mt-[-20px] lg:mt[-40px]'>Cooking tools</p>
        </div>
        </div>
        </Link>

      </div>
    </div>




    <div className=' md:mt-[-25px] md:ml-24 md:mr-10 ' >
      <div>
      <Link to='/categories'>

      <div className='  flex  justify-start   md:mr-20 '>
        <div className='flex flex-col items-left md:mr-10 '>
        <img src={image2} alt="" className='lg:size-[580px]'/>
        <p className=' text-sm md:text-lg font-medium  ml-10 md:ml-20      md:mt-[-20px] lg:mt[-40px]'>Coffec Corner</p>
        </div>
        </div>
        </Link>

      </div>
    </div>



    <div className=' md:mt-[-25px] md:ml-24  md:mr-10' >
      <div>
      <Link to='/categories'>

      <div className='  flex justify-start  md:mr-20'>
        <div className='flex flex-col md:items-left md:mr-10 '>
        <img src={image1} alt="" className='lg:size-[580px]' />
        <p className=' text-sm md:text-lg font-medium  md:ml-20 ml-10   md:mt-[-20px] lg:mt[-40px]'>Cooking tools</p>
        </div>
        </div>
        </Link>

      </div>
    </div>







    
    
    
      
    </Slider>
      </div>
     
     
  );


}
