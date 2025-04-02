import {Eye, EyeOff, Loader2, Lock, Mail, MessageSquare} from "lucide-react"
import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import {Link} from "react-router-dom";

const LoginPage = () =>{
    const [showPassword,setShowPassword]=useState(false);
    const [formData, setformData]= useState({
        email:"",
        password:"",
    });

    const{login,isLoggingIn}=useAuthStore();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        login(formData);
    }
    return(
        <>
            <section className="loginsec">
                <form onSubmit={handleSubmit} className="loginfor">
                    <MessageSquare/>
                    <h1  className="loginforhead">Welcom Back</h1>
                    <p  className="loginforcont">Login in to your account</p>
                    
                    <div className="logindiv">
                        <div className="LoginUse">
                            <Mail/>
                            <p className="loginUsename">Email</p>
                        </div>
                        <input type="email" className="loginUsepass" placeholder="you@example.com"  value={formData.email} onChange={(e)=>setformData({ ...formData,email:e.target.value})} />
                    </div>
                    <div className="logindiv">
                        <div className="loginPass">
                        <Lock/>
                        <p className="loginPassname">Password</p>         
                        </div>
                        <div className="loginPass"> 
                            <input type={showPassword? "text":"password"} className="loginPasspass" placeholder="••••••••"   value={formData.password} onChange={(e)=>setformData({  ...formData , password:e.target.value})}/>
                            <button type="button" className="loginEye" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword?(
                                    <EyeOff className="loginEyeOff" />
                                ):(
                                    <Eye className="loginEyeOn" />
                                )}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="loginbut" disabled={isLoggingIn}>
                        {isLoggingIn ?(
                            <>
                                <Loader2/>
                                Loading...
                            </>
                        ):(
                            "Sign in"
                        )}
                    </button>
                    <div>
                        <p className="loginforcont">
                            Don&apos;t have an account?{" "}
                            <Link to="/signup" >
                                Create account
                            </Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
    )
}

export default LoginPage