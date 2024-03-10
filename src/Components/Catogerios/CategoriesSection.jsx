import React from 'react'
import Carousel from './Cursol/Carousel'

export default function CategoriesSection() {
    
  return (
    <>
    <section className='bg-[#FAFAFA]'>
        <div>
      <div className='w-[80%] mx-auto'>

        <h2 className='darkFont py-6 md:text-left text-center '>Categories</h2>
      </div>
      <div className='w-[100%] mx-auto'>
        <Carousel/>

      </div>
        </div>
    </section>

    </>
  )
}
