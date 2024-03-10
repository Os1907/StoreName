import React from 'react'
import Logo from '../../Assets/logg/Group 3927.svg'

export default function About() {
  return (
    <>
    <section className='h-[80vh] flex justify-center items-center'>
    <div className='mx-auto w-[80%] flex justify-center items-center  flex-col lg:flex-row'>

                    <img src={Logo} alt="" className='lg:w-[350px] lg:h-[350px] lg:ml-28 w-[250px] h-[250px] '/>
                    <div className=' lg:ml-16  flex flex-col justify-center mt-[-55px] lg:mt-0'>
                        <h2 className='lg:text-5xl text-2xl font-bold mainText lg:mb-4'>
                            About us
                        </h2>
                        <p className='xl:mr-24 text-[10px] md:text-base '>
                        Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. 
                        Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy 
                         voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.
                        </p>
                    </div>
                    </div>
            
        
        


    </section>
    </>
  )
}
