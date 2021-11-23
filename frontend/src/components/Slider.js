import React from "react";
import CarouselCities from "./Carouselswiper";

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

    }
];


export default function ArraySlide() {
    return (
        <CarouselCities 
            citiesFirstSlide={citiesFirstSlide}
            
            citiesSecondSlide={citiesSecondSlide}
            
            citiesThirdSlide = {citiesThirdSlide}
        />
    )
    
}