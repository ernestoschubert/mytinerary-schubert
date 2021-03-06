import React from "react";
import CarouselSwiper from "./Carouselswiper";

const cities = [
[
    {
    id: 1,
    city: "Mykonos",
    country: "Grecee",
    src: "./assets/mykonos.jpg",
    },
    {
    id: 2,
    city: "Cancun",
    country: "Mexico",
    src: "./assets/cancun.jpeg",
    },
    {
    id: 3,
    city: "Pamukkale",
    country: "Turkey",
    src: "./assets/pamukkale.jpg",
    },
    {
    id: 4,
    city: "Abu Dhabi",
    country: "Arab Emirates",
    src: "./assets/abudhabi.jpg",
    },
],
[
    {
    id: 5,
    city: "New York",
    country: "United States",
    src: "./assets/newyork.jpg",
    },
    {
    id: 6,
    city: "Barcelona",
    country: "Spain",    
    src: "./assets/barcelona.jpg",
    },
    {
    id: 7,
    city: "London",
    country: "England",
    src: "./assets/london.jpg",
    },
    {
    id: 8,
    city: "Hong Kong",
    country: "China",
    src: "./assets/hongkong.jpg",
    },
],
[
    {
    id: 9,
    city: "Machu Picchu",
    country: "Peru",
    src: "./assets/machupicchu.jpg",
    },
    {
    id: 10,
    city: "Isla de Pascua",
    country: "Chile",
    src: "./assets/isladepascua.jpg",
    },
    {
    id: 11,
    city: "Cairo",
    country: "Egypt",
    src: "./assets/cairopyramids.jpg",

    },
    {
    id: 12,
    city: "Rome",
    country: "Italy",
    src: "./assets/coliseum.jpg",
    }
]
]

export default function SliderRender() {
    return (
        <CarouselSwiper cities={cities}/>
    )
    
}