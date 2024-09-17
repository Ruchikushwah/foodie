import { HandleOrderInsertion, handleOrderItemDelete, HandleOrderminus } from '@/utils/action';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const OrderCard = ({order}) => {
  return (
    <div className='flex gap-2 bg-white rounded-2xl border'>
        <div className='p-2'>
            <img src={`/dish_image/${order.recipeId.image}`} alt="" className='rounded-lg w-[100px] h-[100px]' />
        </div>
        <div className='flex-1 flex flex-col gap-2 p-2'>
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-semibold">{order.recipeId.dishName}</h2>
                <h2 className='text-xs'>₹{order.recipeId.price} x {order.qty} ={order.qty* order.recipeId.price}</h2>
            </div>
            <div className='flex'>
          <form action={handleOrderItemDelete} method='post'>
            <input type="hidden"  name="orderId" value={order._id}/>
          <button type='submit'>
          <IoCloseSharp  className='w-6 h-6'/>
          </button>
          </form>
            <span className='flex gap-3 items-center'>
            <form action={HandleOrderminus} method='post'>
                <input type="hidden"  name="recipeId" value={order.recipeId._id}/>
                <input type="submit"  className='bg-red-800 text-xl px-3 py-2 rounded text-white' value="-"/>
              </form>
              <span>{order.qty}</span>
              
              <form action={HandleOrderInsertion} method='post'>
                <input type="hidden"  name="recipeId" value={order.recipeId._id}/>
                <input type="submit"  className='bg-teal-800 text-xl px-3 py-2 rounded text-white' value="+"/>
              </form>
            </span>


                 
            </div>
        </div>
    </div>
  )
}

export default OrderCard