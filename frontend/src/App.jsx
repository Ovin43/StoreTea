import {Routes,Route, Navigate} from "react-router-dom"
import {Loader } from "lucide-react"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"

import Navbar from "./components/Navbar"

import HomePage  from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductPage from "./pages/ProductPage"
import ProfilePage from "./pages/ProfilePage"
import SignUpPage from "./pages/SignUpPage"
import CartPage from "./pages/CartPage"

import"./css/style.css"
import"./css/loginstyle.css"

import { useAuthStore } from "./store/useAuthStore"


const App = () => {

  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  console.log({authUser});

  if(isCheckingAuth && !authUser)
    return(
      <div>
        <Loader className="loaderspin"/>
      </div>
  )

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={authUser?<HomePage/>:<Navigate to="/login"/>}/>
        <Route path="/login" element={!authUser ?<LoginPage/>:<Navigate to="/"/>}/>
        <Route path="/signup" element={!authUser ?<SignUpPage/>:<Navigate to="/"/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/cart" element={authUser ?<CartPage/>:<Navigate to="/login"/>}/>
        <Route path="/profile" element={authUser ?<ProfilePage/>:<Navigate to="/login"/>}/>

      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
