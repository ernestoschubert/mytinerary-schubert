import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
    
    const [logo, ig, fb, tw] = [
        "./assets/mytinerary_logo.png",
        "./assets/instagram.png",
        "./assets/facebook.png",
        "./assets/twitter.png",
    ];

    return (
        <footer className="Footer">
            <div className="cont-nav-socials">
                <div className="footer-nav">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo MyTinerary"/>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="cities">Cities</Link>
                    </nav>
                </div>
                <div class="socials">
                    <nav>
                        <a href="#IG" target="_new"><img src={ig} alt="logo instagram"/></a>
                        <a href="#FB" target="_new"><img src={fb} alt="logo facebook"/></a>
                        <a href="#TW" target="_new"><img src={tw} alt="logo twitter"/></a>
                    </nav>
                </div>
            </div>
            <div className="copy">
                <p>All rights reserved &copy; Schubert, Ernesto</p>
            </div>
        </footer>
    )
}

export default Footer;
