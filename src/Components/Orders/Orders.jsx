import React, { useEffect, useState } from "react";
import man from "../../Assets/images/persoal 1.jpg";
import { RxExit } from "react-icons/rx";
import MyOrders from "./Myorders/MyOrders";
import Addresses from "./Addresses/Addresses";
import ContactUser from "./Contacts/ContactUser";
import ChangePass from "./ChangePa/ChangePass";
import WishList from "./Addresses/WisListUser/WishList";
import { useLocation } from "react-router-dom";

export default function Orders() {
  const [myOrder, setmyOrder] = useState(true);
  const [adresses, setadresses] = useState(false);
  const [Contact, setContact] = useState(false);
  const [changeName, setchangeName] = useState(false);
  const [wishlist, setwishlist] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="">
        <div className="w-[80%] mx-auto pt-[70px]">
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-4 lg:pb-20 col-span-12  text-white">
              <div className="lg:mx-14 md:mx-48 sm:mx-16 mx-8   bg-whit e order-shadow flex flex-col rounded-b-[5px]">
                <div className="lg:mt-10 mt-5 mainText flex items-center flex-col">
                  <img
                    src={man}
                    alt=""
                    className="w-20 h-20 rounded-full mb-2"
                  />
                  <p>User name</p>
                  <p className="mt-[-2px]">exmple@email.com</p>
                </div>
                <div className="lg:mt-10 mt-2  flex flex-col mx-12 mainText items-center lg:items-start ">
                  <p
                    onClick={() => {
                      setmyOrder(true);
                      setadresses(false);
                      setContact(false);
                      setchangeName(false);
                      setwishlist(false);
                    }}
                    className={
                      myOrder
                        ? "mainText text-sm font-bold text-left mb-2 pointer px-2"
                        : "font-light mb-2 text-sm pointer "
                    }
                  >
                    My orders
                  </p>
                  <p
                    onClick={() => {
                      setmyOrder(false);
                      setadresses(true);
                      setContact(false);
                      setchangeName(false);
                      setwishlist(false);
                    }}
                    className={
                      adresses
                        ? "mainText text-sm font-bold text-left mb-2 pointer "
                        : "font-light mb-2 text-sm pointer"
                    }
                  >
                    Addresses
                  </p>
                  <p
                    onClick={() => {
                      setmyOrder(false);
                      setadresses(false);
                      setContact(true);
                      setchangeName(false);
                      setwishlist(false);
                    }}
                    className={
                      Contact
                        ? "mainText text-sm font-bold text-left mb-2 pointer "
                        : "font-light mb-2 text-sm pointer"
                    }
                  >
                    Contact details
                  </p>
                  <p
                    onClick={() => {
                      setmyOrder(false);
                      setadresses(false);
                      setContact(false);
                      setchangeName(true);
                      setwishlist(false);
                    }}
                    className={
                      changeName
                        ? "mainText text-[13px] font-bold text-left mb-2 pointer "
                        : "font-light mb-2 text-[13px] pointer"
                    }
                  >
                    Change password
                  </p>
                  <p
                    onClick={() => {
                      setmyOrder(false);
                      setadresses(false);
                      setContact(false);
                      setchangeName(false);
                      setwishlist(true);
                    }}
                    className={
                      wishlist
                        ? "mainText text-sm font-bold text-left mb-2 pointer "
                        : "font-light mb-2 text-sm pointer"
                    }
                  >
                    Wish list
                  </p>
                </div>

                <div className={Contact? "lg:mt-32 mt-8 mainText flex justify-end pb-5 " : "mt-8 mainText flex justify-end pb-5 "}>
                  <p className="font-semibold text-right inline mr-8 pointer">
                    Logout <RxExit className="inline text-right" />
                  </p>
                </div>
              </div>
            </div>
            {myOrder ? <MyOrders /> : null}
            {adresses ? <Addresses /> : null}
            {Contact ? <ContactUser /> : null}
            {changeName ? <ChangePass /> : null}
            {wishlist ? <WishList /> : null}
          </div>
        </div>
      </section>
    </>
  );
}
