import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { storeContext } from '../../Context/Context'

export default function SignUp() {
 let {SignIn, setSignIn , SignInDisplay, setSignInDisplay , setLogIn} = useContext(storeContext)

 function hideSignIn(){
  setSignIn(false)
  setSignInDisplay(false)
 }

 function showLogIn(){
  hideSignIn()
  setLogIn(true)

 }
  return (
    <>
      {SignIn ? (
        <div className="bg-[#1b1b1b7f] h-screen w-full fixed z-[51]  ">
          <div className="bg-white  lg:w-[25%] w-full z-[52] flex flex-col items-center justify-center h-screen fixed  scale-in-hor-right right-0">
            <div className="flex flex-col items-center justify-center w-full ">
              <h2 className="mainText font-bold text-3xl">Sign Up</h2>
              <div className=" inline-flex w-full mt-8 flex-col logIn justify-center items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto"
                  placeholder="Full name"
                />
                <input
                  type="text"
                  name="signUpMail"
                  id="signUpMail"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto my-4"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="number"
                  id="NumBer"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Phone number"
                />
                <input
                  type="password"
                  name="password"
                  id="passwOrD"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name="password"
                  id="pAssword"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Confirm Password"
                />

                <div>
                  <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] mb-6 ">
                    Sign up
                  </button>
                </div>
              </div>

              <p className="absolute bottom-[5%] text-sm  mainText">
                Already have account?{" "}
                <span className="underline pointer" onClick={() => showLogIn()}>
                  {" "}
                  Login{" "}
                </span>
              </p>

              <MdClose
                onClick={() => hideSignIn()}
                className="absolute top-[5%] cursor-pointer text-2xl mainText left-[10%] "
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            SignInDisplay
              ? "hidden"
              : "bg-white  lg:w-[25%] w-full  z-[52] flex flex-col items-center justify-center h-screen fixed  slide-out-right  right-0 "
          }
        >
          <div className="bg-white  lg:w-[25%] w-full z-[52] flex flex-col items-center justify-center h-screen fixed  scale-in-hor-right right-0">
            <div className="flex flex-col items-center justify-center w-full ">
              <h2 className="mainText font-bold text-3xl">Sign Up</h2>
              <div className=" inline-flex w-full mt-8 flex-col logIn justify-center items-center">
                <input
                  type="text"
                  name="fullName1"
                  id="FulName"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto"
                  placeholder="Full name"
                />
                <input
                  type="text"
                  name="mail"
                  id="Mail"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto my-4"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="number45"
                  id="SignUpNumber"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Phone number"
                />
                <input
                  type="password"
                  name="signXNumber2"
                  id="SignUpNumBer"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name="ConfirmxPassWOrd"
                  id="ConfirmPassWord"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mb-4"
                  placeholder="Confirm Password"
                />

                <div>
                  <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] mb-6 ">
                    Sign up
                  </button>
                </div>
              </div>

              <p className="absolute bottom-[5%] text-sm  mainText">
                Already have account? <span className="underline"> Login </span>
              </p>

              <MdClose
                onClick={() => hideSignIn()}
                className="absolute top-[5%] cursor-pointer text-2xl mainText left-[10%] "
              />
            </div>
          </div>
        </div>
      )}
     
    </>
  );
}
