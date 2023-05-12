import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
   firstName:String,
   lastName:String,
   Avatar:String,
   StudentNumber:String,
})

export default mongoose.model("User", userSchema);