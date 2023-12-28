import mongoose from "mongoose"
const userSchema=mongoose.Schema({
    email:String,
    password:String,
    username:String
})

 export const userModel=mongoose.model("Users",userSchema)