
import mongoose from "mongoose"
const cryptoSchema=mongoose.Schema({
    name:String,
    UOM:String,
    conversion:String
})
export const bookModel=mongoose.model("Crypto",cryptoSchema)