import mongoose from "mongoose";
const DbConnect = function(){
    try{
        mongoose.connect(process.env.MONGODB_URI)
    }
    catch(erroe){
        console.error("Datanabe connection failed:",error);
        process.exit(1);
    }
}
export default DbConnect;