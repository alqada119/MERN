import express from 'express';
import mongoose, { set } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { userModel } from "./models/users.js";
import { cryptoModel } from './models/crypto.js';
dotenv.config();
const port=3100;
const app=express();
const mongourl=process.env.mongoUrl;
app.use(cors());
app.use(express.json());
const insertUsers=async ()=>{
    const result=await userModel.insertMany({     
    })
    .then(res=>console.log(res))
} //func to add users to collection
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
app.get("/getCrypto",async (req,res)=>{
    try {
        const projection={name:1}
        const result=await cryptoModel.find({})
        console.log(result)
        result.forEach((i)=>{
            console.log(i.name)
            console.log(i)
        })
        res.status(200).json(result["name"])
    } catch (error) {
    res.status(404).send("Error 404")
    }
    
});