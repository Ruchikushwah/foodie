import mongoose from "mongoose"
import recipeModel from "./recipeModel"

const OrderSchema = mongoose.Schema({
    recipeId:{
        type:mongoose.Schema.Types.ObjectId,required:true,ref:recipeModel
    },
    qty:{
        type:Number,default:1
    }
},{timestamp:true

})
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);