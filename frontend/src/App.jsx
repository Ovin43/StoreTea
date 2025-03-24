import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import HomePage  from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductPage from "./pages/ProductPage"

import"./css/style.css"

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>

      </Routes>
    </div>
  )
}

export default App
