import React from 'react';
import '../App.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Carousel from '../components/Carousel.js';

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
                        <div className="main-fv">
                            <div className="hero-container">
                                <img src={logo} width="100"  alt="MyTinerary Logo"/>
                                <h1 className="hero-h1">Welcome to <span className="my">My</span><span className="tine">Tine</span><span className="rary">rary</span></h1>
                            </div>
                            <div >
                                <p className="hero-text">Find your perfect trip, designed by insiders who know and love their cities!</p>
                            </div>
                            <div className="next-section">
                                <a id="firstArrow" href="#sv"><img src={arrowDown} width="40" alt="Arrow down to next section"/></a>
                            </div>
                            <div className="plane">
                                <img src={plane} alt="Plane img"/>
                            </div>
                        </div>
                        {/* <div className="box-conector">

                        </div> */}
                        <div id="sv" className="main-sv">
                            <div >
                                <p className="hero-text">Second View</p>
                                <Carousel/>
                            </div>
                            
                        </div>
                        
                    </main> 
                    <Footer/>          
                </div> 
        )
    }
}
