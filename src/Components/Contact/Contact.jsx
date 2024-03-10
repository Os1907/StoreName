import React from 'react'
import Iframe from 'react-iframe';
import facebook from '../../Assets/Icon/Facebook.png'
import twitter from '../../Assets/Icon/Twitter.png'
import istagram from '../../Assets/Icon/instagrm.png'

export default function Contact() {
  return (
    <>
      <section className=" flex justify-center items-center lg:pb-28 lg:pt-36 h-screen lg:h-auto ">
        <div className="mx-auto w-[80%] flex justify-center items-center  flex-col lg:flex-row">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31037.324025172053!2d34.47779325060427!3d31.50330783041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2z2LrYstip!5e0!3m2!1sar!2seg!4v1709586591267!5m2!1sar!2seg"
            className="lg:w-[258px] lg:h-[296px] lg:ml-28 w-[250px] h-[250px] rounded-[5px] mt-20 lg:mt-0 "
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>

          <div className=" lg:ml-16  flex flex-col justify-center  lg:mt-0 mt-10">
            <h2 className="lg:text-5xl text-2xl font-bold mainText  mb-0 ">
              Contact us
            </h2>
            <div className="xl:mr-24 text-[10px] md:text-base  ">
              <nav className="text-[#0A0A0A]  text-[17px] font-medium   lg:my-4 lg:col-span-2 sm:col-span-6 col-span-8  flex item-center flex-col  text-left">
                <p className="link link-hover ">
                  497 Evergreen Rd. Roseville, CA 95673{" "}
                </p>
                <p className="link link-hover my-2">+44 345 678 903</p>
                <p className="link link-hover"> adobexd@mail.com</p>
              </nav>
              <div className=' ml-[-20px]'>
                <div className="flex items-center ">
                  <img
                    src={facebook}
                    alt=""
                    className="w-[9px] h-[16px] ml-[22px] mr-5"
                  />
                  <a className="link link-hover ml-1"> Facbook</a>
                </div>
                <div className="flex items-center  ">
                  <img
                    src={twitter}
                    alt=""
                    className="w-[15px] h-[14px] mx-5"
                  />
                  <a className="link link-hover">Twitter</a>
                </div>
                <div className="flex items-center ">
                  <img
                    src={istagram}
                    alt=""
                    className="w-[15px] h-[14px] mx-5"
                  />
                  <a className="link link-hover">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
