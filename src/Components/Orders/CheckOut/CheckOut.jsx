import React, { useContext } from 'react'
import YourShopping from './Shopping/YourShopping'
import { storeContext } from '../../Context/Context'
import Payment from './Payment/Payment'
import FinshOrder from './FinshOrder/FinshOrder'

export default function CheckOut() {

let { shappingMethod,  payment , Finshorder} = useContext(storeContext)

  return (
    <>

<section>
        <div className="sm:w-[80%]   mx-auto ">
          <div className="grid md:grid-cols-12  ">
            {
              shappingMethod?  <YourShopping/> : ""
            }
            {
              payment?  <Payment/> : ""
            }
            {
              Finshorder? <FinshOrder/> : ""
            }
            
          
            
            <div className="lg:col-span-4 lg:pt-16 lg:pb-20 col-span-12 relative  mb-5 text-white ">
              <div className="lg:mx-6 md:mx-36 sm:mx-16 mx-8  lg:h-screen pb-5  order-shadow flex flex-col rounded-b-[5px]  ">
                <p className="mainText text-left ml-8 font-bold text-xl lg:mt-28 mt-8 ">
                ORDER SUMMARY
                </p>
                <div className="flex justify-between mx-8 mainText mt-3 ">
                 <p className="text-sm">
                 2 ITEM
                 </p>
                 <p className="text-sm">
                 EGP 2,948.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 border-b-2 ">
                 <p className="text-sm">
                 SHIPPING
                 </p>
                 <p className="text-sm mr-4">
                 EGP 0.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 border-b-2 ">
                 <p className="text-sm">
                 SUB-TOTAL
                 </p>
                 <p className="text-sm ">
                 EGP 2,948.00
                 </p>
                </div>
                <div className="flex justify-between mx-8 mainText mt-3 pb-4 font-bold ">
                 <p className="text-sm">
                 TOTAL
                 </p>
                 <p className="text-sm ">
                 EGP 2,948.00
                 </p>
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      </section>


    

    
    
    </>
  )
}
