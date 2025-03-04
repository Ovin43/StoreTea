import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        prodName: {
            type:String,
            require:true,
            unique:true,
        },
        quantity:{
            type:Number,
            require:true,
        },
        cost:{
            type:Number,
            require:true,
        },
    },
    {timestamps:true}
);

const Product = mongoose.model("Product",productSchema);

export default Product;