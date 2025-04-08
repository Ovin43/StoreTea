import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


export const useAuthStore = create((set,get)=>({
    authUser:null,
    isLogginIn:false,
    isSigningUp:false,
    isCheckingAuth:true,
    lognav:false,


    checkAuth: async() => {
        try{
            const res=await axiosInstance.get("/auth/checkAuth");
            set({authUser:res.data});
        }catch(error){
            console.log("Error in checkAuth",error);
            set({authUser:null});
        }finally{
            set({isCheckingAuth:false});
        }
    },

    lognavcheck: ()=>{
        set({lognav:true});
    },

    lognavvheckout: ()=>{
        set({lognav:false});
    },

    signup: async (data) => {
        set({isSigningUp:true})
        try{
            const res = axiosInstance.post("/auth/signup", data);
            set({authUser:(await res).data});
            toast.success("Accont created Successfully!");
        }catch(error){
            toast.error(error.respond.data.message);
        }finally{
            set({isSigningUp:false});
            set({lognav:false});
        }
        
    },

    login: async (data) => {
        set({isLogginIn:true});
        try {
            const res = axiosInstance.post("/auth/login", data);
            set({authUser: (await res).data});
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.respond.data.message);
        }finally{
            set({isLogginIn:false});
            set({lognav:false});
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error(error.respond.data.message);
        }
    },
}))

