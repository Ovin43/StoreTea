import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore= create((set,get)=>({

    prodInfo:null,
    prodNames:null,


    productstore: (data)=>{
        if(data==null){
            const save=localStorage.getItem('data');
            return save ? JSON.parse(save) : [];
        }else{
            localStorage.setItem('data',JSON.stringify(data));
            const save=localStorage.getItem('data');
            return save ? JSON.parse(save) : [];
        }
    },
    
    productDetails: async(data)=>{
        try{
            set({prodNames:data});
            const res= await axiosInstance.post("/product/productdetails" ,data);
            set({prodInfo:res.data});
        }catch(error){
            toast.error(error.respond.data.message);
        }finally{
            const ras = get().productstore(data);
            set({prodNames:ras.prodName})
            console.log(data);
        }
    }
}))