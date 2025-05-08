import { SwiperSlide , Swiper } from "swiper/react"
import { prodslides, productcontent, productname} from "../data/data"
import "swiper/css"; 
import "swiper/css/pagination"   
import { useEffect, useRef, useState } from "react";
import {Autoplay, Pagination} from "swiper/modules";
import { useProductStore } from "../store/useProductStore";
import { Loader } from "lucide-react";


const ProductPage =()=>{
    let saves =null;
    const {productDetails,prodInfo} = useProductStore();

    function stordata(){
        const save=localStorage.getItem('data');
        return save ? JSON.parse(save) : [];
    }
    saves = stordata();

    console.log(saves.prodName)

    const[name,setName]=useState(saves.prodName);

    const[cont,setcont]=useState(saves.itemcount);

    const selRef=useRef(null);

    useEffect(()=>{
        productDetails({prodName:name})
    },[name])

    return (
        <>
        {prodInfo?(
            <>
            <section className="product-page">
            <div className="product-page-div">
            <div className="product-menu">
                {productname.map((item,index)=>(
                    <div onClick={()=>{setName(item.name)}} className="product-menu-card" key={index}>{item.name}</div>
                ))}
            </div>
            <div className="product-display">
                <div className="product-display-slide">
                    <section className="product-display-slide-sec">
                        <div className="product-display-slide-wrapper">
                            <Swiper 
                            ref={selRef}
                            modules={[Pagination,Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{clickable:true}}
                            autoplay={{delay:5000 , disableOnInteraction:false}}
                            loop={true}
                            >
                            {prodslides.map((item,index)=>(
                                <>
                                <SwiperSlide key={index}>
                                        <div className="sliderr">
                                            <img src={item.img} />
                                        </div>
                                </SwiperSlide>
                                </>
                            ))}
                            </Swiper>
                            </div>
                    </section>
                </div>
                <div className="product-display-content">
                    <div className="product-display-content-div">
                        <section className="product-display-content-first-box">
                            <div className="product-display-content-name">
                                {prodInfo.prodName}
                            </div>
                            <div className="product-display-content-cost">
                                {prodInfo.cost}
                            </div>
                        </section>
                        <div className="product-display-content-quantity">
                            {prodInfo.quantity}
                        </div>
                        <div className="product-display-content-content">
                           {productcontent[0].content}
                        </div>
                        <section className="product-display-content-buy">
                            <div className="product-display-content-div-buy">
                                buy
                            </div>
                            <div className="product-display-content-cart">
                                cart
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            </div>
            </section>
            </>
        ):(
            <>
            <Loader/>
            </>
        )};
        </>
    )
}

export default ProductPage