import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

        const city = this.state.place;
        console.log(city)

        return (   
         <>
            <Header />
            <main className="d-flex justify-content-center align-center">
                <div className="hero-city" key={city.id}  style={{backgroundImage: `url(${city.src})`, backgroundSize: "cover"}}>

                    <h1>{city.city}</h1>

                </div>
                <div>

                </div>
            </main>
            <Footer />
         </>           
        )
    }
}
