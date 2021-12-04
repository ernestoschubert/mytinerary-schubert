import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import Itinerary from '../components/Itineraries';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions'

class City extends React.Component {    
    
    id = this.props.params.id

    componentDidMount() {
        this.props.getCity(this.id)
    }
    
    render() {

        return (   
         <>
            <Header />
            <main className="d-flex justify-content-center align-center">
                <div className="hero-city" key={this.props.city._id} style={{backgroundImage: `URL(${this.props.city.src})`, backgroundSize: 'cover'}}>
                    <div className="place-cont">
                        <h1>{ this.props.city.city === undefined ? <Loader /> : this.props.city.city }</h1>
                        <p>{ this.props.city.country }</p>
                    </div>
                </div>
                <Itinerary />

                <Link to="/cities" className="mb-4 mt-4"><Button variant="warning">Go back Cities</Button></Link>
            </main>
            <Footer />
         </>           
        )
    }
}
const mapStateToProps = (state) => {
    return {
        city: state.cities.city,
        itinerary: state.itineraries.itinerary
    }
}

const mapDispatchToProps = {
    getCity: citiesActions.getCity,
    getItinerary: itinerariesActions.getItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(City);