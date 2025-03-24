import ProdSlie from "../components/another"
import Footer from "../components/Footer"
import Quote from "../components/Quote"
import Slidebar from "../components/Slidebar"



const HomePage= () =>{

    return(
        <>
        <Slidebar/>
        <Quote/>
        <div className="product" id="products">
            <h1>Products</h1>
        </div>
        <ProdSlie/>
        <Footer/>
        </>
    )

}

export default HomePage