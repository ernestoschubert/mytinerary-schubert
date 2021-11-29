import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Loader from '../components/Loader';

export default class Cities extends React.Component {
    
    state = {
        cities: [],
        citiesFiltred: []
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => {
                this.setState({cities: data.response, citiesFiltred: data.response})
            })
            .catch(err => console.error(err))

    }
    searchHandler = (e) => {

            const searchValue = e.target.value.toLowerCase().trim();
            console.log(searchValue)
            let filtred = [];
            filtred = this.state.cities.filter(place => {
                const city = place.city.toLowerCase().trim()
                return city.startsWith(searchValue)
            }) 
            this.setState({citiesFiltred: filtred})
            console.log(this.state.citiesFiltred)
            // console.log(this.state.cities)
        }
        
    render() {

        const {cities, citiesFiltred} = this.state

        return (
            <>
                <Header/>
                <main>
                    <div className="cities-hero" style={{backgroundImage: `URL("./assets/worldmap.jpg")`, backgroundSize: 'cover'}}>
                        <div className="hero-content-cities">
                            <h1>MyTinerary Trips</h1>
                            <input className="mt-5" type="search" placeholder="Search by city" onChange={this.searchHandler}></input>
                        </div>
                    </div>
                    <div className="container-fluid container-cities">
                        <div className="row justify-content-center m-0">
                            <h2 className="cities-h2 mb-3">Cities</h2>

                                {   
                                    cities.length === 0 ? <Loader /> 
                                    : 
                                    citiesFiltred.length > 0 
                                    ?
                                    citiesFiltred.map(citi => {
                                        const { _id, city, country, src } = citi
                                        return (
                                            <div className="cities-img col-10 col-lg-5 mb-4 me-2 ms-2" key={_id} style={{backgroundImage: `URL(${src})`, backgroundSize: 'cover'}} >
                                                <Link to={`/city/${_id}`} className="w-100 mb-2">
                                                    <h3 className="w-100">{city + " - " + country}</h3>
                                                    <Button variant="warning" className="more-info">More Info</Button>
                                                </Link> 
                                            </div>
                                        )
                                        })
                                    :
                                    <div className="not-found">
                                        <h3>City not found</h3>
                                    </div>
                                }
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}
