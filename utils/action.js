import orderModel from "@/models/orderModel";
import DbConnect from "./DbConnect"
import { redirect } from "next/navigation";


export const HandleOrderInsertion = async (formdata) =>{
    "use server"
     const data={
        "recipeId" : formdata.get("recipeId"),
    }
    // insertion

    DbConnect();

    const exist = await orderModel.findOne({recipeId:formdata.get("recipeId")});
    if(exist){
        const updated = await orderModel.findByIdAndUpdate(exist._id, {qty:exist.qty + 1});
    }
    else{
   const  updated = await orderModel.create(data);
    }

    redirect("/");
}
export const HandleOrderminus = async (formdata) =>{
    "use server"
     const data={
        "recipeId" : formdata.get("recipeId"),
    }
    // insertion

    DbConnect();

    const exist = await orderModel.findOne({recipeId:formdata.get("recipeId")});
    if(exist){
        if(exist.qty > 1) await orderModel.findByIdAndUpdate(exist._id, {qty:exist.qty - 1});
        else await orderModel.findByIdAndDelete(exist._id);
    }
   

    redirect("/");
}
export const handleOrderItemDelete= async (formdata)=>{

    "use server"
    const orderId =formdata.get("orderId");
    DbConnect();
     await orderModel.findByIdAndDelete(orderId);
    redirect("/");
}

