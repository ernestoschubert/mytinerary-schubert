import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Itinerary = () => {
    useEffect(() => {
        axios.get('http://localhost:4000/api/itineraries')
        .then(res => console.log(res))
    }, [])

    return (
        <div>

        </div>
    )
}
