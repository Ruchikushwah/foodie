import mongoose from "mongoose";
import categoryModel from "./categoryModel";
const recipeSchema =mongoose.Schema({
    dishName:{type:String,required:true},
    dishCategory:{type:mongoose.Schema.Types.ObjectId,ref:categoryModel},
    image:{type:String},
    price:{type:Number, required:true},
    label:{type:String}

},
{
    timeStamp:true
})

//delete mongoose.models.recipe
export default mongoose.models.recipe || mongoose.model("recipe",recipeSchema);