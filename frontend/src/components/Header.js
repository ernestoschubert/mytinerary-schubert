import React from 'react';
import Dropdown from './Dropdown.js';
import { Link } from "react-router-dom";

const Header = () => {

    const logo = "./assets/mytinerary_logo.png";
    // const userIcon = "./assets/account_circle_white_36dp.svg";

    return (
        <div className='Header'>
            <header className="header-style">
                <div className="header-logo">
                <Link className="link" to="/"><img src={logo} alt="Logo MyTinerary"/></Link>
                    
                </div>
                <nav className="header-nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/cities">Cities</Link>
                </nav>
                <div>
                    <div className="user">
                        <Dropdown/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
