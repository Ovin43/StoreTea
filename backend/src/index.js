import express from "express";
import dotenv from "dotenv";


import { connectDB } from "./lib/db.js";


import authRoutes from "./route/auth.route.js"
import productRoutes from "./route/product.route.js"



dotenv.config();
const PORT = process.env.PORT;
const app= express();

app.use(express.json());

app.use("/api/product",productRoutes);
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("Server is running on Port"+PORT)
    connectDB();
});