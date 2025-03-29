import { LogOut, User } from "lucide-react"
import { Link } from "react-router-dom"

import { useAuthStore } from "../store/useAuthStore"


const Navbar= ()=>{
    const {authUser,logout}=useAuthStore();
    return(
        <>
        <header className="hea">
            <div className="dime">
                <Link to="/">
                    <img className="logo"  src="img/one1.jpg"/>
                </Link>
            </div>
            {authUser && (
                <>
                <Link to="/profile">
                    <User/>
                </Link>
                <button onClick={logout}>
                <LogOut/>

                </button>
                </>
            )}
            <div className="profile"  >
                <a href="/profile"><img className="proimg" src="img/gojo.jpg"/></a>
            </div>
        </header>
        <hr />
        </>
    )
}

export default Navbar