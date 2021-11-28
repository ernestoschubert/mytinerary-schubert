import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
        .then(res => this.setState({place: res.data.response})
        )
    }
    
    
    render() {

        const citySelect = this.state.place;
        console.log(citySelect)
        const {_id, city, country, src, description} = citySelect
        return (   
         <>
            <Header />
            <main className="d-flex justify-content-center align-center">
                <div className="hero-city" key={_id}  style={{backgroundImage: `URL(${src})`, backgroundSize: 'cover'}}>

                    <h1>{city}</h1>

                    <p>{country}</p>


                </div>
                <div className="itinerary-div">
                    <p>{description}</p>
                    <br/>
                    <p>Section Under Construction</p>
                    <br/>

                    <Link to="/cities">Go back Cities</Link>

                </div>
            </main>
            <Footer />
         </>           
        )
    }
}
