const express=require("express");
const mongodb=require("mongodb");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
const cors=require("cors");
const port=3100;
const app=express()
const mongourl="";
app.use(cors())
app.use(express.json())
mongoose.connect(mongourl)
.then(()=>{
    console.log("Connected to DB")
    app.listen(port,()=>{
        console.log("Listening")
    })
})
.catch((err)=>{
    console.log(err)
})

