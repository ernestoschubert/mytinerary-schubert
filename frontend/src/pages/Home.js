import React from 'react';
import '../App.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class Home extends React.Component {
    
    render(){

        const logo = "./assets/mytinerary_logo.png"
        const arrowDown = "./assets/arrow_down.svg"
        
        return (
                <main>
                    <div className="main-fv">
                        <div className="w-container">
                            <img src={logo} width="100"/>
                            <h1 className="w-h1">Welcome to <span className="my">My</span><span className="tine">Tine</span><span className="rary">rary</span></h1>
                        </div>
                        <div >
                            <p className="w-text">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        </div>
                        <div className="next-section">
                            <a id="firstArrow" href="#sv"><img src={arrowDown} width="40"/></a>
                        </div>
                    </div>
                    <div id="sv" className="main-sv">
                        <div >
                            <p className="w-text">Second View</p>
                        </div>
                        <div className="next-section">
                            <a href="#tv"><img src={arrowDown} width="40"/></a>
                        </div>
                    </div>
                    <div id="tv" className="main-tv">
                        <div >
                            <p className="w-text">Third View</p>
                        </div>
                    </div>
                    
                </main>            
        )
    }
}
export default Home;