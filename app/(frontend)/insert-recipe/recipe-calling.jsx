import recipeModel from '@/models/recipeModel';
import DbConnect from '@/utils/DbConnect'
import React from 'react'

const RecipeCalling =  async() => {
    DbConnect();
    const recipe= await recipeModel.find().populate("dishCategory")

    return (
        <div className=''>
            <table className='border bg-slate-100'>
            <thead>
                <tr>
                <th className='border p-3'>Id</th>      
                    <th className='border p-3'>dish name</th>                    
                    <th className='border p-3'>dish category</th>
                    <th className='border p-3'>image</th>
                    <th className='border p-3'>price</th>
                    <th className='border p-3'>label</th>
                    <th className='border p-3'>action</th>

                </tr>
            </thead>
            <tbody>
                {
                    recipe.map((rec,i) => (
                    <tr key={i}>
                    <td className='border p-3'>{i+1}</td>
                        <td className='border p-3'>{rec.dishName}</td>
                        <td className='border p-3'>{rec.dishCategory.catName}</td>
                        <td className='border p-3'>
                            <img src="dish_image{rec.image}" alt="" width="100px" height="100px" /></td>
                        <td className='border p-3'>{rec.price}</td>
                        <td className='border p-3'>{rec.label}</td>
                    </tr>


                    ))
                }

            </tbody>
        </table></div>
    )
}

export default RecipeCalling