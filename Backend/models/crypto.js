
import mongoose from "mongoose"
const cryptoSchema=mongoose.Schema({
    name:String,
    UOM:String,
    conversion:String
})
export const cryptoModel=mongoose.model("Crypto",cryptoSchema)