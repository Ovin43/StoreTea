import Product from "../model/product.model.js";
import EXP from "../model/exp.model.js";

export const prodload = async(req,res)=>{
    const{prodName,quantity,cost}= req.body;
    try{
        if(!prodName||!quantity||!cost){
            return res.status(400).json({message:"All fields are to be filled"});
        }
        const pro= await Product.findOne({prodName});

        if(pro){
            return res.status(400).json({message:"The product name cannot be same"});
        }

        const newProduct=new Product({
            prodName,
            quantity,
            cost
        });
        if(newProduct){
            await newProduct.save();

            res.status(201).json({
                _id:newProduct._id,
                prodName:newProduct.prodName,
                quantity:newProduct.quantity,
                cost:newProduct.cost,
            });
        }else{
            res.status(400).json({message:"Invalid user data"});
        }
    }catch(error){
        console.log("Error in Prodload controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const productDtails= async(req,res)=>{
    const {prodName}=req.body;
    try{
        const prod=await Product.findOne({prodName});
        if(prod){
            res.status(200).json({
            _id: prod._id,
            prodName: prod.prodName,
            quantity: prod.quantity,
            cost: prod.cost
            })
        }else{
            res.status(400).json({message:"Invalid product name"});
        }
    }catch(error){
        console.log("Error in the fetching ",error.message);
        res.status(500).json({message:"Ineternal server error"});
    }

};

export const costDetails =async(req,res)=>{
    const {prodName}= req.body;
};