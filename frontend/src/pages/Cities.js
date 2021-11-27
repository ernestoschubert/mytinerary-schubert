import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from 'react-router-dom'

export default class Cities extends React.Component {
    
    state = {
        cities: [],
        citiesFiltred: []
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => {
                this.setState({cities: data.response.cities})
            })
            .catch(err => console.error(err))
            
        // axios.post("http:/localhost:4000/api/cities", {name: "Ernesto",edad: 25, id: 39 })

    }

    render() {
        

        const {cities} = this.state

        // citiesFilter = () => {
            
        // }

        return (
            
            <>
                <Header/>
                <main>
                    <div className="cities-hero" style={{backgroundImage: `URL("./assets/worldmap.jpg")`, backgroundSize: 'cover'}}>
                        <div className="hero-content-cities">
                            <h1>MyTinerary Trips</h1>
                            <input className="mt-5" type="search" placeholder="Search city"></input>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <h2 className="cities-h2 mb-3">Cities</h2>
                                {
                                    cities.map(city => {
                                        return (
                                            <div className="cities-img col-10 col-lg-5 mb-3 me-2 ms-2" key={city.id} style={{backgroundImage: `URL(${city.src})`, backgroundSize: 'cover'}} >
                                                <Link to={`/city/${city.id}`} className="w-100 mb-2">
                                                    <h3 className="w-100">{city.city + " - " + city.country}</h3>
                                                    <Button variant="warning">More Info</Button>
                                                </Link> 
                                            </div> 
                                        )
                                    })
                                }
                                <Outlet />
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}
