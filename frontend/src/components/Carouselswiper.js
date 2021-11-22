import React from 'react';   
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import 'swiper/modules/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const citiesFirstSlide = [
  {
    id: 1,
    city: "Mykonos",
    country: "Grecee",
    src: require("../assets/mykonos.jpg").default,
  },
  {
    id: 2,
    city: "Cancun",
    country: "Mexico",
    src: require("../assets/cancun.jpeg").default,
  },
  {
    id: 3,
    city: "Pamukkale",
    country: "Turkey",
    src: require("../assets/pamukkale.jpg").default,
  },
  {
    id: 4,
    city: "Abu Dhabi",
    country: "Arab Emirates",
    src: require("../assets/abudhabi.jpg").default,
  },
];

const citiesSecondSlide = [
  {
    id: 5,
    city: "New York",
    country: "United States",
    src: require("../assets/newyork.jpg").default,
  },
  {
    id: 6,
    city: "Barcelona",
    country: "Spain",    
    src: require("../assets/barcelona.jpg").default,
  },
  {
    id: 7,
    city: "London",
    country: "England",
    src: require("../assets/london.jpg").default,
  },
  {
    id: 8,
    city: "Hong Kong",
    country: "China",
    src: require("../assets/hongkong.jpg").default,
  },
];

const citiesThirdSlide = [
  {
    id: 9,
    city: "Machu Picchu",
    country: "Peru",
    src: require("../assets/machupicchu.jpg").default,
  },
  {
    id: 10,
    city: "Isla de Pascua",
    country: "Chile",
    src: require("../assets/isladepascua.jpg").default,
  },
  {
    id: 11,
    city: "Cairo",
    country: "Egypt",
    src: require("../assets/cairopyramids.jpg").default,

  },
  {
    id: 12,
    city: "Rome",
    country: "Italy",
    src: require("../assets/coliseum.jpg").default,

  },
];


const CarouselCities = () => {

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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slide city-cont">
            {citiesFirstSlide.map((data) => {
              return (
                <div className="slider-content">
                  <div className="city-img" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover'}} >
                    <h3>{data.city + " - " + data.country}</h3>  
                  </div>  
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide className="slide city-cont">
            {citiesSecondSlide.map((data) => {
              return (
                <div>
                  <div className="city-img" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover'}} >
                    <h3>{data.city + " - " + data.country}</h3>  
                  </div>  
                </div>
              );
            })}
          </SwiperSlide>
          <SwiperSlide className="slide city-cont">
            {citiesThirdSlide.map((data) => {
              return (
                <div className="slider-content">
                  <div className="city-img" style={{backgroundImage: `URL(${data.src})`, backgroundSize: 'cover'}} >
                    <h3>{data.city + " - " + data.country}</h3>  
                  </div>  
                </div>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </div>
  );
};

export default CarouselCities 