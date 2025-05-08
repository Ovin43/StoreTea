import { useEffect, useRef, useState } from "react";
import { SwiperSlide , Swiper } from "swiper/react"
import { slides } from "../data/data";
import { Autoplay, Pagination } from "swiper/modules";

const Slidebar = ()=>{
    const selRef=useRef(null);

    return(
        <>
            <section className="service">
                <div className="slider-wrapper">
                    <Swiper
                    ref={selRef}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    autoplay={{delay:5000 , disableOnInteraction:false}}
                    loop={true}
                    >
                    {slides.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className="slider">
                            <img src={item.img}/>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Slidebar