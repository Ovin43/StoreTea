import { SwiperSlide , Swiper } from "swiper/react"
import { prodslides, productcontent, productimages, productname} from "../data/data"
import "swiper/css"; 
import "swiper/css/pagination"   
import { useEffect, useRef, useState } from "react";
import {Autoplay, Pagination} from "swiper/modules";
import { useProductStore } from "../store/useProductStore";
import { Loader, Scale } from "lucide-react";


const ProductPage =()=>{
    let saves =null;
    let numcont=null;
    const {productstore,prodInfo} = useProductStore();

    function stordata(){
        const save=localStorage.getItem('data');
        return save ? JSON.parse(save) : [];
    }
    saves = stordata();

    console.log(saves.prodName)

    const[name,setName]=useState(saves.prodName);

    switch(saves.prodName){
        case "Black Tea" :
            numcont=0;
            break;
        
        case "Green Tea" :
            numcont=1;
            break;

        case "Oolong Tea" :
            numcont=2;
            break;

        case "White Tea":
            numcont=3;
            break;

        default:
            console.log("error in switch");
    }



    const selRef=useRef(null);

    useEffect(()=>{
        productstore({prodName:name})


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
                            {productimages[numcont].images.map((item,index)=>(
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
                        <div className="product-display-content-name">
                                {prodInfo.prodName}
                         </div>
                         <hr></hr>
                        <section className="product-display-content-first-box">
                            <div className="product-display-content-cost">
                                <p>Rs {prodInfo.cost}</p>
                            </div>
                            <div className="product-display-content-quantity">
                                <p>In Stock {prodInfo.quantity}</p>
                            </div>
                        </section>
                        <div className="product-display-content-content">
                           {productcontent[numcont].content}
                        </div>
                        <section className="product-display-content-buy">
                            <button className="product-display-content-cart">
                                Cart
                            </button>
                            <button className="product-display-content-div-buy">
                                Buy
                            </button>
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