import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ImageSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { image: "/img/bla.jpg", text: "Slide 1 Description" },
    { image: "/img/whi.jpg", text: "Slide 2 Description" },
    { image: "/img/gre.jpg", text: "Slide 3 Description" },
    { image: "/img/olv.jpg", text: "Slide 4 Description" },
  ];

  return (
    <div className="info">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        className="onse"
      >
          <SwiperSlide className="flex flex-col items-center">
            <img src= "/img/gre.jpg"   className="onsa" />
            {/* <p className="mt-2 text-center text-lg">{slide.text}</p> */}
            <img src= "/img/whi.jpg"   className="onsa" />
            <img src=  "/img/bla.jpg"  className="onsa" />
            <img src= "/img/whi.jpg"   className="onsa" />
            <img src= "/img/gre.jpg"   className="onsa" />
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
