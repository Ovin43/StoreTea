import { BadgeCheck, LogOut, ShoppingBasket, ShoppingBasketIcon, Sidebar, User } from "lucide-react"
import { Link } from "react-router-dom"

import { useAuthStore } from "../store/useAuthStore"


const Navbar= ()=>{
    const {authUser,logout}=useAuthStore();
    return(
        <>
        <header className="navhea">
            <section className="navsec">
                <div className="navmainlogo">
                    <Link to="/">
                        <img className="logo"  src="img/one1.jpg"/>
                    </Link>
                </div>
                <div className="navothercomp">
                    {authUser && (
                        <>
                            <Link to={"/profile"}>
                                <div className="navprofile"  >
                                    <img className="navprofileimg" src="img/gojo.jpg"/>
                                </div>
                            </Link>
                            <button onClick={logout} className="navlogoutbut">
                                <LogOut className="navlogoutlogo"/>
                            </button>
                            <Link to={"/cart"}>
                                <div className="navshopping"  >
                                    <ShoppingBasketIcon className="navshoppinglogo"/>   
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </section>
            <hr/>
        </header>
        </>
    )
}

export default Navbar