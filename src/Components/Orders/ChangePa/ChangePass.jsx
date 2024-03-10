import React from 'react'

export default function ChangePass() {
  return (
    <>
    <div className='lg:col-span-8 col-span-12 mainText pt-26 '>
    <h2 className='mt-12 text-3xl font-bold lg:text-left text-center '>
    Change Password
</h2>
<div className=" inline-flex w-full mt-8 flex-col logIn justify-center lg:items-left items-center">
                <input
                  type="password"
                  name="Password"
                  id="Pass_word"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto mx-auto "
                  placeholder="Old password"
                />
                <input
                  type="password"
                  name="NewPass"
                  id="pas_sword"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto mx-auto my-4"
                  placeholder="New password"
                />
                <input
                  type="password"
                  name="Confirm_password"
                  id="confirm_Pass_wOrD"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[70%] lg:mr-auto mx-auto mb-4"
                  placeholder="Confirm new password"
                />
                <div>
                  <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] mb-6 ">
                  Save changes
                  </button>
                </div>
              </div>
    </div>
    
    
    
    </>
  )
}
