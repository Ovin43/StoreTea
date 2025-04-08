import { LogIn,LogOut,Menu,ShoppingBasketIcon, X } from "lucide-react"
import { Link } from "react-router-dom"

import { useAuthStore } from "../store/useAuthStore"
import { useState } from "react"


const Navbar= ()=>{

    const[isOpen,setIsOpen] = useState(false)

    const {authUser,lognav,lognavcheck,lognavvheckout,logout}=useAuthStore();
    return(
        <>
        {!lognav &&(
            <header className="navhea">
                <section className="navsec">
                        <div className="navmainlogo">
                            <Link to="/">
                                <img className="logo"  src="img/one1.jpg"/>
                            </Link>
                        </div>
                        <div className="navothercomp">
                            {authUser ?(
                                <>
                                <Link to={"/profile"}>
                                    <div className="navprofile"  >
                                        <img className="navprofileimg" src="img/gojo.jpg"/>
                                    </div>
                                </Link>
                                <Link to={"/cart"} className="navshopping" >
                                        <ShoppingBasketIcon size={30}/>   
                                </Link> 
                                <div className="navtogglemenu">
                                        <Menu onClick={() => setIsOpen(!isOpen)} size={30}/>
                                        {isOpen && (
                                        <div className="navtogglemenudiv">
                                            <X  onClick={()=>setIsOpen(!isOpen)} className="navclose"/>
                                            <ul className="navtogglemenudivul">
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Home</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">About</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Services</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Contact</a></li>
                                                <li className="navtogglemenudivli" onClick={logout}>LogOut <LogOut size={15}/></li>
                                            </ul>
                                        </div>
                                        )}
                                    </div>
                                </>
                            ):(
                                <>
                                <Link to={"/login"} onClick={lognavcheck} className="navloginbutton">
                                <div className="navloginbuttonsec">
                                    <span>LogIn</span>
                                    <LogIn size={30}/>
                                </div>
                                </Link>
                                <Link to={"/cart"} onClick={lognavcheck} className="navshopping" >
                                        <ShoppingBasketIcon size={30}/>   
                                </Link> 
                                <div className="navtogglemenu">
                                        <Menu onClick={() => setIsOpen(!isOpen)} size={30}/>
                                        {isOpen && (
                                        <div className="navtogglemenudiv">
                                            <X  onClick={()=>setIsOpen(!isOpen)} className="navclose"/>
                                            <ul className="navtogglemenudivul">
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Home</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">About</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Services</a></li>
                                                <li className="navtogglemenudivli"><a href="#" className="navtogglemenudivlia">Contact</a></li>
                                            </ul>
                                        </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                </section>
                <hr/>
            </header>
        )}     

        {lognav &&(
            <>
            <header className="navheast">
                    <div className="navmainlogost">
                        <Link to="/" onClick={lognavvheckout}>
                            <img className="logo"  src="img/one1.jpg"/>
                        </Link>
                    </div>
            </header>
            <hr/>
            </>
        )}
        </>
    )
}

export default Navbar