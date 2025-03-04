import mongoose from "mongoose";


const userScheema= new mongoose.Schema(
    {
        email:{
            type:String,
            require:true,
            unique:true,
        },
        fullName:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
            minlength:6,
        },
        profilPic:{
            type:String,
            default:"", 
        }
    },
    {timestamps:true}
);

const User=mongoose.model("User",userScheema);
export default User;