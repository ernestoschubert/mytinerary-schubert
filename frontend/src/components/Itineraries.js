// import React, { useState, useEffect } from 'react'
// import useParams from 'react-router-dom'
// import axios from 'axios';


const Itinerary = () => {
    // const id = useParams(id)
    // useEffect(() => {
    //     axios.get('http://localhost:4000/api/itineraries')
    //     .then(res => console.log(res))
    // }, [])

    return (
        <div className="itineraries-container">
            <div className="cont-likes-publisher">
                <div className="publisher">
                    <img src='/assets/itinerary/rihanna.jpg' alt="publisher profile"/>
                    <p>publisher fullname</p>
                </div>
                <div className="ms-4"> Likes</div>
            </div>
            <div className="cont-info-it">
                <div>
                    title
                </div>
                <div className="it-info">
                <p>price</p>
                <p>duration</p>
                <p>hastags</p>
                </div>
            </div>
        </div>
    )
}
export default Itinerary;
