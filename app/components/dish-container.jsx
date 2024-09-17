import React from 'react'
import DishCard from './dish-card'


const DishContainer = ({callingDish}) => {

 
  return (
    <div className='overflow-y-scroll max-h-[300px] p-5'>
      <div className='grid grid-cols-3 gap-5'>
        {
          callingDish.map((dish, i) => <DishCard
                          key={i}
                         id={dish._id}
                        label={dish.dishName}
                         price={dish.price}
                          category={dish.dishCategory?.catName}
                          image={dish.image} />
          )
        }

      </div>
    </div>
  )
}

export default DishContainer