import mongoose from "mongoose";


const expSchema = new mongoose.Schema(
    {
        buyerId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true,
        },
        prodCount:{
            type:Number,
            required:true,
        },
        totalCost:{
            type:Number,
            required:true,
        },
    },
    {timestamps:true}
);

const EXP = mongoose.model("EXP",expSchema);
export default EXP;