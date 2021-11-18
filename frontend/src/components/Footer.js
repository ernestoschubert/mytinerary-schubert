import React from 'react'

const Footer = () => {
    
    const logo = "./assets/mytinerary_logo.png";

    return (
        <footer className="Footer">
            <div className="footer-nav">
                <div>
                    <img src={logo} width="50" alt="Logo MyTinerary"/>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Cities</a>
                </nav>
            </div>
            <div class="socials">
                <nav>
                    <a href="#">IG</a>
                    <a href="#">FB</a>
                    <a href="#">TW</a>
                </nav>
            </div>
            <div>
                <p>All rights reserved &copy; Schubert, Ernesto</p>
            </div>
        </footer>
    )
}

export default Footer;