import { prodsl } from "../data/data"


const ProductPage =()=>{
    return (
        <>
        <section className="prodpage">
            <div className="products">
            <div className="productmenu">
                {prodsl.map((item,index)=>(
                    <div className="productmenucard" key={index}>{item.name}</div>
                ))}
            </div>
            <div className="productdisplay">
                <div className="productdisplayslid">
                    <section className="service">
                        <div className="slider-wrapper">
                            <div className="sliderr">
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
                </div>
                <div className="productdisplaycont">cont</div>
            </div>
            </div>
            
        </section>
        </>
    )
}

export default ProductPage