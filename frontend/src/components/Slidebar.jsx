const Slidebar = ()=>{
    return(
        <>
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
        </>
    )
}

export default Slidebar