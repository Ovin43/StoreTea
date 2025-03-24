const Navbar= ()=>{
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
             <nav className="list"><a className="h" href="/">Home</a></nav>
            <nav className="list"><a className="h" href="#products">Products</a></nav>
            <nav className="list"><a className="h" href="#contact">Contact us</a></nav>
        </section>
        <hr />
        </>
    )
}

export default Navbar