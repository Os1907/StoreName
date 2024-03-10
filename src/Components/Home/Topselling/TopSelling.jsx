import React from 'react'
import CarousolTop from './CarusolTop/CarusolTop'

export default function TopSelling() {
  return (
    <>
    <section className='bg-[#FAFAFA]  py-2'>
        <div className='md:w-[80%] w-[90%] mx-auto  pb-10'>

        <h2 className='darkFont py-6 lg:text-start text-center'>Top Selling</h2>
        <CarousolTop/>
        </div>
    </section>
    
    
    
    </>
  )
}
