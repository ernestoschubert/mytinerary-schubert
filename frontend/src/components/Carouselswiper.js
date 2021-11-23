import React from 'react';   
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])



const CarouselSwiper = (props) => {
  
  const cities = props.cities;

  const sliders = cities.map( (city, index) => {
    return (
          <SwiperSlide key={index} className="slide city-cont">
          {city.map((data) => {
            return (
                <div className="city-img" key={data.id} style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover'}} >
                  <h3>{data.city + " - " + data.country}</h3>  
                </div>  
              );
            })}
          </SwiperSlide>
        )
      })
  
  return (
      <div className="carousel-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >

            {sliders}

        </Swiper>
      </div>
  );
};

export default CarouselSwiper; 
