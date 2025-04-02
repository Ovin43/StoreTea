import ProdSlie from "../components/another"
import Footer from "../components/Footer"
import Quote from "../components/Quote"
import Slidebar from "../components/Slidebar"



const HomePage= () =>{

    return(
        <>
            {/* <section className="one">
                <nav className="list"><a className="h" href="#">Home</a></nav>
                <nav className="list"><a className="h" href="#products">Products</a></nav>
                <nav className="list"><a className="h" href="#contact">Contact us</a></nav>
            </section>
            <hr /> */}
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