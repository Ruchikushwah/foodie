import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    catName:{ type:String,required:true},
    catDescription:{type:String,required:true}

})

//delete mongoose.models.category

export default mongoose.models.category || mongoose.model("category",categorySchema);
