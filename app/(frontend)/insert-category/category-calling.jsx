import categoryModel from '@/models/categoryModel';
import DbConnect from '@/utils/DbConnect'
import React from 'react'

const CategoryCalling = async() => {
    DbConnect();
    const category = await categoryModel.find({})
  return (
    <div className='mt-10'>
        <table className='border w-full bg-white'>
            <thead>
                <tr className='border p-3'><th>ID</th>
                <th className='border p-3'>category name</th>
                <th className='border p-3'>categoryDescription</th>
                <th className='border p-3'>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    category.map((cat,i) => (
                        <tr>
                            <td className='border p-3'>{i+1}</td>
                            <td className='border p-3'>{cat.catName}</td>
                            <td className='border p-3'>{cat.catDescription}</td>
                        </tr>
                    

                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default CategoryCalling