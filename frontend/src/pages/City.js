import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import Itineraries from '../components/Itineraries';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions';

class City extends React.Component {    

    id = this.props.params.id

    componentDidMount() {
        this.props.getCities();
        this.props.getCity(this.id);
        this.props.getCityItineraries(this.id);
    }

    render() {

        const { cities, itinerary, city } = this.props
        
        return (   
         <>
            <Header />
            <main className="d-flex justify-content-center align-center">
                <div className="hero-city" key={city._id} style={{backgroundImage: `URL(${city.src})`, backgroundSize: 'cover'}}>
                    <div className="place-cont">
                        <h1>{ city.city === undefined ? <Loader /> : city.city }</h1>
                        <p>{ city.country }</p>
                    </div>
                </div>
                <h2 className="itine-h2 italic-shadow mb-3">Itineraries</h2>

                {   cities.length === 0 ? <Loader /> :
                    itinerary.length > 0 ?
                    itinerary.map((itine, index) => {
                        return (
                            <div key={index}>
                                <Itineraries itinerary={itine}/>
                            </div>
                        )
                    })
                    :
                    <div className="no-itine">
                        <h4>There are no itineraries yet for {city.city}</h4>
                        <img src="/assets/comingsoon.png" alt ="coming soon"/>
                    </div>
                }

                <Link to="/cities" className="mb-4 mt-4"><Button variant="warning">Go back Cities</Button></Link>
            </main>
            <Footer />
         </>           
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cities: state.cities.citiesArray,
        city: state.cities.city,
        itinerary: state.itineraries.itinerary
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getCity: citiesActions.getCity,
    getCityItineraries: itinerariesActions.getCityItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City);