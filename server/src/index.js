import express from "express"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {connectDB} from "./db.js";

console.log("Environment Variable:", process.env.PORT);
const PORT = process.env.PORT || 8001
connectDB()
const app=express();

app.use(cors());

app.listen(PORT,()=>{
    console.log("App is listening at Port",PORT)
})