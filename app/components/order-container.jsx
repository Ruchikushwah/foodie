import React from 'react'
import { IconName } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import OrderCard from './order-card';
import orderModel from '@/models/orderModel';
import { SignOut } from './singout';
import { auth } from '@/auth'

const OrderContainer = async () => {
  let session = await auth();
  const  orderData = await orderModel.find({}).populate('recipeId');
  let totalPrice =0;
  let totalTax= 0;
  
  return (
    <div className='w-3/12 bg-slate-200 first-line:h-screen p-5 h-screen'>
      <div className='flex justify-between items-center gap-2' >
      <h1 className='text-2xl font-semibold '>My Order</h1>
      <div className='flex flex-col gap-2 bg-white p-3 rounded-lg'>
      <h1 className='text-sm'>
      {session.user.name}</h1>
      <span className='text-sm'>{session.user.email}</span>
      <SignOut className='text-xl'/>
      </div>
      </div>
     
      <div className='flex justify-start gap-10 mt-5'>
        <span className='flex items-center gap-2'>
        <FcClock  className='w-6 h-6'/>
          <p>40 min</p>
          
        </span>
        <span className='flex items-center gap-2'>
        <FaLocationDot  className='text-orange-700 w-6 h-6'/>
          <p>5 km</p>
        </span>
      </div>
      <div className='flex flex-col gap-4 mt-5 max-h-[410px] overflow-y-scroll'>
      {
         orderData.map((order , index) =>{

          totalPrice += order.recipeId.price * order.qty;
          totalTax = totalPrice * 0.18;
         return(  <OrderCard key={index} order={order}/>)

})
      }
      </div>

      <div className='flex flex-col mt-5  absolute bottom-0'>
        <hr  className='border-2 border-slate-400 '/>
        <div className='flex  justify-between capitalize mt-3 flex-1 text-slate-700 items-center gap-32'>
          <h2 className='text-xl'>Sub Total</h2>
          <h2 className='text-xl font-bold'>₹{totalPrice}</h2>
        </div>
        <div className='flex justify-between mt-3 flex-1 text-slate-700 items-center gap-32'>
          <h2 className='text-xl'>Tax (GST 18%)</h2>
          <h2 className='text-xl font-bold'>₹ {Math.round(totalTax)}</h2>
        </div>
        <hr  className='border-2 border-slate-400'/>
        <div className='flex justify-between mt-3 flex-1 text-slate-700 items-center '>
          <h2 className='text-xs'>Total</h2>
          <h2 className='text-xl font-bold'> ₹{Math.ceil(totalPrice + totalTax)}</h2>
        </div>
        <a href="" className='bg-orange-700 text-white px-2 py-1 text-center hover:bg-orange-800 font-semibold'>Order Now</a>

      </div>
    </div>
  )
}

export default OrderContainer