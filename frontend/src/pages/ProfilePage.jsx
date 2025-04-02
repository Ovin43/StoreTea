import { LogOut } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore"

const ProfilePage= () =>{

    const{logout}=useAuthStore();
    return(
        <>
           <button onClick={logout}>
                <LogOut/>
           </button>
            
        </>
    )

}

export default ProfilePage