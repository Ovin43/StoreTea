import {Eye, EyeOff, Loader2, Mail, MessageSquare} from "lucide-react"
import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import {Link} from "react-router-dom";


const SignUpPage =()=>{
    const [showPassword,setShowPassword]=useState(false);
    const [formData, setformData]= useState({
        email:"",
        password:"",
    });

    const{signup,isSigningUp}=useAuthStore();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        signup(formData);
    }
return(
    
    <>
    <section className="signupsec">
        <form onSubmit={handleSubmit} className="signupfor">
            <MessageSquare/>
            <h1  className="signupforhead">Create Account</h1>
            <p  className="signupforcont">Get started with your free account</p>
                    
                    <div className="signupdiv">
                        <div className="signupUse">
                            <p className="signupUsename">User Name</p>
                        </div>
                        <input type="email" className="signupUsepass" placeholder="you@example.com"  value={formData.email} onChange={(e)=>setformData({ ...formData,email:e.target.value})} />
                    </div>
                    <div className="signupdiv">
                        <div className="signupUse">
                            <p className="signupUsename">Email</p>
                        </div>
                        <input type="email" className="signupUsepass" placeholder="you@example.com"  value={formData.email} onChange={(e)=>setformData({ ...formData,email:e.target.value})} />
                    </div>
                    <div className="signupdiv">
                        <p className="signupPassname">Password</p>
                        <div className="signupPass"> 
                            <input type="text" className="signupPasspass" placeholder="••••••••"   value={formData.password} onChange={(e)=>setformData({  ...formData , password:e.target.value})}/>
                        </div>
                    </div>
                    <button type="submit" className="signupbut" disabled={isSigningUp}>
                        {isSigningUp ?(
                            <>
                                <Loader2/>
                                Loading...
                            </>
                        ):(
                            "Sign Up"
                        )}
                    </button>
                    <div>
                        <p className="signupforcont">
                            Have an account?{" "}
                            <Link to="/login" >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
)

}

export default SignUpPage