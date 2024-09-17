import categoryModel from "@/models/categoryModel";
import DbConnect from "@/utils/DbConnect";
import { Hi_Melody } from "next/font/google";
import Link from "next/link"
import {HiGift, HiMapPin, HiMiniStar, HiPause, HiPlay, HiQueueList} from "react-icons/hi2";




const CategoryItem = ({Icon, label,id}) => {
    return(
        <Link href={id?`/${id}`: "/"}  className="flex  items-center justify-center  hover:bg-orange-600  border  mt-2 border-red-700 hover:text-white flex-1 p-2 ">
           {/*<Icon className="w-5 h-5 text-orange-600"/>*/}
            <h5 className="text-xl">{label}</h5>
        </Link>
    )
}

const CategoriesNavbar = async () => {

    DbConnect();
    const categories = await categoryModel.find({})
  return (
    <div className="flex  capitalize border-orange-600  border-b-4  ">
        {
        categories.map((cat, i)  => <CategoryItem  key={i} label={cat.catName} id={cat._id}/>)
        }
        <CategoryItem label="All" />
    </div>
   
  )
}

export default CategoriesNavbar