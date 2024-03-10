import React from "react";
import man from "../../../Assets/images/persoal 1.jpg";

export default function ContactUser() {
  return (
    <>
      <div className="lg:col-span-8 col-span-12 mainText pt-26 pb-20 flex flex-col lg:items-start items-center ">
        <h2 className="mt-12 text-3xl font-bold">Contact details</h2>
        <div className="mt-5 mainText flex items-left flex-col">
          <img src={man} alt="" className="w-28 h-28 rounded-full  " />
        </div>
        <div className=" inline-flex w-full mt-4 flex-col logIn justify-center lg:items-start items-center">
                <input
                  type="text"
                  name="TextFullName"
                  id="TextFullName"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto "
                  placeholder="Full name"
                />
                <input
                  type="text"
                  name="mailContact"
                  id="mailContact"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto  my-4"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="UserNumber"
                  id="UserNumber"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto  mb-4"
                  placeholder="Phone number"
                />
                <div>
                  <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] mb-6 ">
                  Save changes
                  </button>
                </div>
              </div>




      </div>
    </>
  );
}
