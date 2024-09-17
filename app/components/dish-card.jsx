import { HandleOrderInsertion } from '@/utils/action'
import React from 'react'

const DishCard = ({image, label, price,category,id}) => {
  return (
    <div className='flex flex-col gap-3'>
        <img src={`/dish_image/${image}`} width="100%" className='rounded-lg h-[170px]'/>
        <div className=' flex justify-between'>
            <h2 className='text-xl font-bold'>{label}</h2>
            <h3 className='text-lg font-semibold'>₹ {price}</h3>
        </div>
        <div className='flex items-center justify-between capitalize'>
            <p>{category}</p>

            <form action={HandleOrderInsertion} method='post'>
              <input type="hidden" value={id} name='recipeId'/>
              <input type="submit"  value="Add" className='bg-teal-700 text-white px-3 py-2 rounded-lg'/>
            </form>
        </div>


    </div>
  )
}

export default DishCard