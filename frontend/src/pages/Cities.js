import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Loader from '../components/Loader';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

class Cities extends React.Component {
    
    componentDidMount() {
        this.props.getCities()
    }

        
    render() {

        const {cities, citiesFiltered} = this.props;

        return (
            <div className="cont">
                <Header/>
                <main>
                    <div className="cities-hero" style={{backgroundImage: `URL("./assets/worldmap.jpg")`, backgroundSize: 'cover'}}>
                        <div className="hero-content-cities">
                            <h1>MyTinerary Trips</h1>
                            <input className="mt-5" type="search" placeholder="Search by city" onChange={(e) => this.props.getFiltered(cities , e.target.value)}></input>
                        </div>
                    </div>
                    <div className="container-fluid container-cities">
                        <div className="row justify-content-center m-0">
                            <h2 className="cities-h2 mb-3">Cities</h2>
                                {   
                                    cities.length === 0 ? <Loader /> 
                                    : 
                                    citiesFiltered.length > 0 
                                    ?
                                    citiesFiltered.map(item => {
                                        const { _id, city, country, src } = item
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
            cities: state.cities.citiesArray,
            citiesFiltered: state.cities.citiesFiltered
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    getFiltered: citiesActions.getFiltered
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
