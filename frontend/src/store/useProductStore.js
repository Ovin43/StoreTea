import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore= create((set,get)=>({

    prodInfo:null,
    prodNames:null,


    productstore: (data)=>{
        if(data!=null){
            localStorage.setItem('data',JSON.stringify(data));
            get().productDetails(data);
        }else{
            toast.error("the data is empty");
        }
    },
    
    productDetails: async(data)=>{
        try{
            const res= await axiosInstance.post("/product/productdetails" ,data);
            set({prodInfo:res.data});
        }catch(error){
            toast.error(error.respond.data.message);
        }
    }

    
}))