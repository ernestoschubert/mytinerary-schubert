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
                        <Link className="link" to="/"><img src={logo} alt="Logo MyTinerary"/></Link>
                    </div>
                    <nav>
                        <Link className="link" to="/">Home</Link>
                        <Link className="link ms-4" to="/cities">Cities</Link>
                    </nav>
                </div>
                <div className="socials">
                    <nav>
                        <a href="https://www.instagram.com" target="_new"><img src={ig} alt="logo instagram"/></a>
                        <a href="https://www.facebook.com" target="_new"><img src={fb} alt="logo facebook"/></a>
                        <a href="https://www.twitter.com" target="_new"><img src={tw} alt="logo twitter"/></a>
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
