import categoryModel from '@/models/categoryModel';
import DbConnect from '@/utils/DbConnect';
import { redirect } from 'next/navigation';
import React from 'react'

const CategoryForm= () => {


    const handleinsertcategory =  async(formData) => {
        "use server";
        let data={
            catName:formData.get('categoryName'),
            catDescription:formData.get("categoryDescription")

         }
        DbConnect();
         let create =  await categoryModel.create(data);
         redirect("/insert-category");

    }
  return (
    <div className='px-10 mt-10 w-full'>
        <form action={handleinsertcategory} method='post'>
            <div className='mb-3 flex flex-col '>
                <label htmlFor="categoryName" className='form-label'>category Name</label>
                <input type="text"  className='border w-full px-3 py-2 rounded' id="categoryName" name="categoryName"/>
            </div>
            <div className='mb-3 flex flex-col '>
                <label htmlFor="categoryDescription" className='form-label'>category Discription</label>
                <textarea type="text"  className='border w-full px-3 py-2 rounded' id="categoryDiscription" name="categoryDescription"></textarea>
            </div>
            <button type='submit' className='bg-teal-500 hover:bg-teal-600 rounded px-3 py-2 text-white font-semibold'>
                add category
            </button>
        </form>
    </div>
  )
}

export default CategoryForm