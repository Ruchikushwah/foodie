import categoryModel from '@/models/categoryModel'
import recipeModel from '@/models/recipeModel'
import DbConnect from '@/utils/DbConnect'

import React from 'react'
import {join} from "path"
import { writeFile } from 'fs/promises'
import { redirect } from 'next/navigation'

const RecipeForm = async () => {

    const categories = await categoryModel.find({});

    const handleinsertrecipe = async(formData) =>{
        "use server"



        let image =formData.get("image");
        let bytes = await image.arrayBuffer();
        let buffer =Buffer.from(bytes);
        let path = join("./public", "dish_image",image.name);
        await writeFile(path,buffer);






        let data={
            dishName:formData.get("dishName"),
            dishCategory:formData.get("dishCategory"),
            
            price:formData.get("price"),
            label:formData.get("label"),
            image:image.name,

        }
        DbConnect();
        let create = await recipeModel.create(data);
        redirect("/");
    }
  return (
    <div className='border shadow-lg p-10'>
        <form action={handleinsertrecipe} method='post'>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="dishName"> Dish Name</label>
                <input type="text"  name='dishName' className='rounded border px-3 py-2'/>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="dishCategory"> Dish category</label>
                <select name='dishCategory' className='rounded border px-3 py-2'>
                        <option value="">Select Categories</option>
                        {
                            categories.map((cat, i) => <option key={i} value={cat._id}>{cat.catName}</option>)
                        }
                    </select>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="image"> image</label>
                <input type="file"  name='image' className='rounded border px-3 py-2 w-full'/>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="price"> price</label>
                <input type="text"  name='price' className='rounded border px-3 py-2 w-full'/>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="label"> label</label>
                <select type="text"  name='label' className='rounded border px-3 py-2 w-full'>
                    <option value="" selected disabled> Select label</option>
                    <option value="">Best seller</option>
                    <option value="">New arrived</option>
                    </select>
            </div>
       <button type='submit' className='bg-teal-700 hover:bg-teal-900 text-white px-3 py-2 rounded-md'> add new dish</button>
        </form>
    </div>
  )
}

export default RecipeForm