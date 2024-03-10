import React, { useContext } from 'react'
import { MdClose } from "react-icons/md";
import { storeContext } from '../Context/Context';

export default function Login() {
   let {logIn , setLogIn , display, setdisplay ,  setSignIn } = useContext(storeContext)
   
   function hideLogin(){
    setLogIn(false)
    setdisplay(false)
   }
   function displaySignIn(){
    hideLogin()
    setSignIn(true)
   }

   

   
  return (
    <>
      {logIn ? (
        <div className="bg-[#1b1b1b7f] h-screen w-full fixed z-[51]  ">
          <div className="bg-white  lg:w-[25%] w-full z-[52] flex flex-col items-center justify-center h-screen fixed  scale-in-hor-right right-0">
            <div className="flex flex-col items-center justify-center w-full ">
              <h2 className="mainText font-bold text-3xl">Login</h2>
              <div className=" inline-flex w-full mt-8 flex-col logIn justify-center items-center">
                <input
                  type="text"
                  name="Email"
                  id="eMail"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="passwordx"
                  id="pAssword"
                  className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mt-4"
                  placeholder="Password"
                />

                <div className="w-[80%] mt-4 flex items-center justify-between">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      id="Remember"
                      className="bg-[#E1E1E1] myCheckBox rounded-[4px] w-10"
                    />
                    <label
                      htmlFor="Remember"
                      className="font-normal cursor-pointer text-[12px] mainText ml-[-8px]"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="mb-1 mr-2">
                    <button className="underline text-[#909090] text-[12px] ">
                      Forget password
                    </button>
                  </div>
                </div>

                <div>
                  <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] my-6 ">
                    log in
                  </button>
                </div>
              </div>

              <p className="absolute bottom-[5%] text-sm  mainText">
                Don't have account ?{" "}
                <span
                  className="underline pointer"
                  onClick={() => displaySignIn()}
                >
                  {" "}
                  sign up{" "}
                </span>
              </p>

              <MdClose
                onClick={() => hideLogin()}
                className="absolute top-[5%] cursor-pointer text-2xl mainText left-[10%] "
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            display
              ? "hidden"
              : "bg-white  lg:w-[25%] w-full  z-[52] flex flex-col items-center justify-center h-screen fixed  slide-out-right  right-0 "
          }
        >
          <div className="flex flex-col items-center justify-center w-full ">
            <h2 className="mainText font-bold text-3xl">Login</h2>
            <div className=" inline-flex w-full mt-8 flex-col logIn justify-center items-center">
              <input
                type="text"
                name="logInEmail"
                id="logIn_Email"
                className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto"
                placeholder="Email"
              />
              <input
                type="password"
                name="logInPass"
                id="logIn_Password"
                className="bg-[#EEEEEE] focus:outline-none rounded-[5px] px-5 py-2 w-[80%] mx-auto mt-4"
                placeholder="Password"
              />

              <div className="w-[80%] mt-4 flex items-center justify-between">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    id="Remember"
                    className="bg-[#E1E1E1] myCheckBox rounded-[4px] w-10"
                  />
                  <label
                    htmlFor="Remember"
                    className="font-normal cursor-pointer text-[12px] mainText ml-[-8px]"
                  >
                    Remember me
                  </label>
                </div>

                <div className="mb-1 mr-2">
                  <button className="underline text-[#909090] text-[12px] ">
                    Forget password
                  </button>
                </div>
              </div>

              <div>
                <button className="bg-[#0a0a0a] w-[175px] h-[48px] rounded-[5px] text-white text-[12px] my-6 ">
                  log in
                </button>
              </div>
            </div>

            <p className="absolute bottom-[5%] text-sm  mainText">
              Don't have account ? <span className="underline"> sign up </span>
            </p>

            <MdClose
              onClick={() => hideLogin()}
              className="absolute top-[5%] cursor-pointer text-2xl mainText left-[10%] "
            />
          </div>
        </div>
      )}
    </>
  );
}
