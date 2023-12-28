import express from 'express'
import mongodb from 'mongodb'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import { userModel } from "./models/users.js";
dotenv.config()
const port=3100;
const app=express()
const mongourl=process.env.mongoUrl;
app.use(cors())
app.use(express.json())
mongoose.connect(mongourl)
.then(()=>{
    console.log("Connected to DB")
    app.listen(port,()=>{
        console.log("Listening")
    })
    try {
        userModel.createCollection()
        .then(
            console.log("Collection Created")
        )
        .catch()(
            console.log("Error")
        )
    } catch (error) {
        console.log(error)
    }
    
})
.catch((err)=>{
    console.log(err)
})

