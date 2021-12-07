import React from 'react';
import '../App.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SliderRender from '../components/SliderRender';


export default class Home extends React.Component {
    
    render(){
        const [logo, arrowDown, plane] = [
            "./assets/mytinerary_logo.png",
            "./assets/arrow_down.svg",
            "./assets/plane.png"
        ];
        
        return (

                <div className="container-home">
                    <Header/>
                    <main>
                        <div className="main-fv" style={{backgroundImage: 'URL("/assets/city_sunset.jpg")'}}>
                            <div className="hero-container">
                                <img src={logo} width="100"  alt="MyTinerary Logo"/>
                                <h1 className="hero-h1">Welcome to <span className="my">My</span><span className="tine">Tine</span><span className="rary">rary</span></h1>
                            </div>
                            <div >
                                <p className="hero-text fs-5">Find your perfect trip, designed by insiders who know and love their cities!</p>
                            </div>
                            <div className="next-section">
                                <a id="arrowDown" href="#sv"><img src={arrowDown} width="40" alt="Arrow down to next section"/></a>
                            </div>
                            <div className="plane">
                                <img src={plane} alt="Plane img"/>
                            </div>
                        </div>
                        <div id="sv" className="main-sv">
                            <div className="cta-cont">    
                                <div className="call-to-action" style={{backgroundImage: 'url(/assets/worldmap.jpg)'}}>
                                    <p className="cta-text fs-4">Choose your dreams trip!<br/> Discover all our trips </p>                             
                                    <Link className="link" to="/cities"><Button variant="warning" className="fs-4 p-2 ps-5 pe-5 mt-2 btn-cta">Here</Button></Link>
                                </div>
                            </div>
                            <div className="container-carousel">
                                <h2 className="carousel-h2">Popular MyTineraries</h2>
                                <div className="container-slider">
                                    <SliderRender/>
                                </div>
                            </div>    
                        </div>
                        
                    </main> 
                    <Footer/>          
                </div> 
        )
    }
}
