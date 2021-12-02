import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import Itinerary from '../components/Itineraries';

export default class City extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    
    state = {
        place : {}
    }
    
    id = this.props.params.id

    componentDidMount() {
        axios.get('http://localhost:4000/api/cities/'+this.id)
        .then(res => this.setState({place: res.data.response}))
    }
    
    render() {
        const citySelect = this.state.place;
        console.log(citySelect)
        const {_id, city, country, src} = citySelect

        return (   
         <>
            <Header />
            <main className="d-flex justify-content-center align-center">
                <div className="hero-city" key={_id}  style={{backgroundImage: `URL(${src})`, backgroundSize: 'cover'}}>
                    <div className="place-cont">
                        <h1>{city === undefined ? <Loader /> : city}</h1>
                        <p>{country}</p>
                    </div>
                </div>
                <div className="itinerary-div">
                    {/* <p>{description === undefined ? <Loader size="sm"/> : description}</p> */}
                    <p className="underconst">Under Construction </p>
                    <img src="/assets/underconstruction.png" width="200" className="mb-4" alt="under construction"/>
                    <Itinerary />
                    <Link to="/cities" className="mb-4"><Button variant="warning">Go back Cities</Button></Link>
                </div>
            </main>
            <Footer />
         </>           
        )
    }
}
