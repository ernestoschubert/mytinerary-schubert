import React from 'react'

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
                        <a href="#Home">Home</a>
                        <a href="#Cities">Cities</a>
                    </nav>
                </div>
                <div class="socials">
                    <nav>
                        <a href="#IG"><img src={ig} alt="logo instagram"/></a>
                        <a href="#FB"><img src={fb} alt="logo facebook"/></a>
                        <a href="#TW"><img src={tw} alt="logo twitter"/></a>
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
