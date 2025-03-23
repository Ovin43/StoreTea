import { head } from "../data/data"



const HomePage= () =>{

    return(
        <>
        <header className="hea">
            <div className="dime">
                <img className="logo"  src="img/one1.jpg"/>
            </div>
            <div className="profile">
                <a href="/login"><img className="proimg" src="img/gojo.jpg"/></a>
            </div>
        </header>
        <hr />
        <section className="one">
             <nav className="list"><a className="h" href="#home">Home</a></nav>
            <nav className="list"><a className="h" href="#products">Products</a></nav>
            <nav className="list"><a className="h" href="#contact">Contact us</a></nav>
        </section>
        <hr />
        <section className="service">
            <div className="slider-wrapper">
                <div className="slider">
                    <img id="slide1" src="img/slid1.jpg" />
                    <img id="slide2" src="img/slid2.jpg" />
                    <img id="slide3" src="img/slid3.jpg" />
                    <img id="slide4" src="img/slid4.jpg" />
                </div>
                <div className="slider-nav">
                    <a href="#slide1"></a>
                    <a href="#slide2"></a>
                    <a href="#slide3"></a>
                    <a href="#slide4"></a>
                </div>
            </div>
        </section>
        <section className="info">
            <div className="fronimg"><img /></div>
            <div className="fronbox">
                <div className="frontext">
                    <p>
                        "I am a humble tea merchant, pouring out the elixir of life to the
                        world."<br />
                        - Kakuzo Okakura
                    </p>
                </div>
            </div>
        </section>
        <div className="product" id="products">
            <h1>Products</h1>
        </div>
        <section className="pro">
            <div className="cards">
                <div className="card">
                    <a href="/front/html/product.html" id="fetchButton"><h1>Black tea</h1></a>
                </div>
                <div className="card">
                    <a href="/front/html/product.html"><h1>Green Tea</h1></a>
                </div>
                <div className="card">
                    <a href="/front/html/product.html"><h1>White Tea</h1></a>
                </div>
                <div className="card">
                    <a href="product.html"><h1>Yellow Tea</h1></a>
                </div>
            </div>
        </section>
        <section className="contacts" id="contact">
            <div className="contaa">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </section>
        
        </>
    )

}

export default HomePage