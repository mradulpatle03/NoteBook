import express from "express"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {connectDB} from "./db.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import habitRouter from "./routes/habit.route.js";

console.log("Environment Variable:", process.env.PORT);
const PORT = process.env.PORT || 8001
connectDB()
const app=express();

app.use(cors({
    origin:[
        "http://localhost:5173",
    ],
    credentials:true,
}));

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/habits",habitRouter);


app.use("/", (req,res)=>{
    res.send("Welcome to Habit Tracker App Server")
})

app.listen(PORT,()=>{
    console.log("App is listening at Port",PORT)
})