import { useRef } from "react"
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import {prodsl} from "../data/data";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";

const ProdSlie=()=>{
    const slRef = useRef(null);
    return(
        <>
            <section className="pro">
                <div className="cards">
                    <Swiper
                        ref={slRef}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        // scrollbar={{ draggable: true }}
                        className="rounded-lg overflow-hidden"
                    > 
                    {prodsl.map((item,index)=>(
                        <SwiperSlide key={index} className="flex flex-col items-center">
                        <div className="cards">
                            <div className="card">
                                <img src={item.img} className="onsa" />
                                <div className="bli"> 
                                    <h1 className="bilh1">{item.name}</h1>
                                    <p className="bilp">{item.text}</p>
                                    <div className="bilbut">
                                    <Link to={"/cart"}><button className="bilcart">Add to Cart</button></Link>
                                    <Link to={"/product"}><button className="bilsee">See Product</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>        
        </>

    )

}
export default ProdSlie