import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { BsPlusLg } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";


export default function Addresses() {
    const [open, setopen] = useState(false)
    const [address, setaddress] = useState()
    const [refresh, setrefresh] = useState()
    var userAdd = [];
    if (localStorage.getItem("address")!=null){
        userAdd = JSON.parse(localStorage.getItem("address"));
    }
    useEffect(()=>{
    },[refresh])
  return (
    <>
    <div className='lg:col-span-8 col-span-12 mainText pb-5  '>

        <h2 className='mt-12 text-3xl font-bold lg:text-left  text-center'>
       Your Addresses

        </h2>
<div className='w-full flex lg:flex-row flex-wrap justify-center lg:justify-start '>
    {
        userAdd.map((values , index)=>{

           return <div  className='bg-white lg:w-[20%] w-auto p-4 order-shadow  lg:mx-4 mx-2  mt-4 rounded-[5px]  '>
    <div className='flex justify-between items-center'>
    <p
    onClick={()=>{
        userAdd.splice(index, 1)
        localStorage.setItem("address", JSON.stringify(userAdd))
        setrefresh(Math.random())

}}
     className=' pointer inline-flex text-sm font-medium'>Delete</p>
    <MdClose onClick={()=>{
            userAdd.splice(index, 1)
            localStorage.setItem("address", JSON.stringify(userAdd))
            setrefresh(Math.random())

    }} className='inline pointer'/>    
    </div>
    <div className='w-full mt-4'>
        <p className='text-sm font-semibold  ' >
        {values?.userAdd}
        </p>
    </div>
</div>
        })
    }
<div className='bg-white lg:w-[20%] w-auto p-4 order-shadow mx-4   mt-4 rounded-[5px]  flex justify-center items-center '>
<BsPlusLg className='text-5xl pointer ' onClick={()=>{
    setopen(true);
}} />
</div>

</div>
</div>

{

open? <div className='h-screen col-span-12   fixed left-0 top-0  w-full  bg-[#1d1d1d69]   flex justify-center items-center flex-col'>


    
 <textarea onChange={ (e)=> {
                let add = {
                    userAdd: e.target.value 
                }
                setaddress(add);
                
                
    
}   } type="text"  placeholder=' Your addresses' className='bg-white textarea w-[80%] p-2 mt-10 rounded-[5px] focus:outline-none mainText font-bold text-lg placeholder:font-medium '/>
 

<div className='flex mt-2'>

<button onClick={()=>{
                userAdd.push(address);
                localStorage.setItem("address", JSON.stringify(userAdd))
                setopen(false)
           
}}


 className='p-4 lg:px-20 px-4 rounded-[10px] bg-black text-white '>
    Save
</button>

    <button onClick={()=>{
    setopen(false)
}} className=' lg:px-20 px-4 rounded-[10px] mx-2 bg-black text-white '>
    EXIT 
<IoExitOutline className='text-center inline  ml-2' />
</button>
</div>

</div> : ""
}
    
    
    
    
    </>
  )
}
