import { generateToken } from "../lib/utils.js";
import User from "../model/user.model.js";
import bycrypt from"bcryptjs";
import cloudinary from "../lib/cloudinary.js";


export const signup=async(req,res)=>{
    const {fullName,email,password}=req.body;
    try{
        if(!fullName||!email||!password){
            return res.status(400).json({message:"Fill in all the details"});
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be of atleast 6 charasrers"});
        }

        const user =await User.findOne({email})

        if(user) return res.status(400).json({message:"Email already exists"});

        const salt =await bycrypt.genSalt(10);
        const hasedPassword= await bycrypt.hash(password,salt);
        const newUser = new User({
            fullName,
            email,
            password:hasedPassword,
        })

        if(newUser){
            generateToken(newUser._id,res)
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilPic,
            });
        }else{
            res.status(400).json({message:"Invalid user data"});
        }
    }catch(error){
        console.log("Error in singup controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid credientials"});
        }

        const isPasswordCorrect = await bycrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credientials"});
        }
        generateToken(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilPic:user.profilPic,
        })
    }catch(error){
        console.log("Error in signup controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const logout= (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Loggin out successfully1"})
    }catch(error){
        console.log("Error in logging controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const updateProfile=async(req,res)=>{
    try{
        const {profilPic ,userId}=req.body;

        if(!profilPic){
            return res.status(400).json({message:"Profile pic is required"})
        }
        const uploadResponse=await cloudinary.uploader.upload(profilPic);
        const updateUser = await User.findByIdAndUpdate(
            userId,
            {profilPic: uploadResponse.secure_url},
            {new:true}
        );
        res.status(200).json(updateUser);
    }catch(error){
        console.log("Error in update profile:", error);
        res.status(500).json({message:"Internal server error"});
    };
}

export const checkAuth = (req,res)=>{
    try{
        res.status(200).json(req.user);
    }catch(error){
        console.log("Error in checkAuth controller",error.message);
        res.stauts(500).json({message:"Internal Server Error"});
    }
};