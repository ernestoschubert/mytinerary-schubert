import React from 'react';
import Dropdown from './Dropdown.js';

const Header = () => {

    const logo = "./assets/mytinerary_logo.png";
    const userIcon = "./assets/account_circle_white_36dp.svg";

    return (
        <div className='Header'>
            <header className="header-style">
                <div className="header-logo">
                    <img src={logo} alt="Logo MyTinerary"/>
                </div>
                <nav className="header-nav">
                    <a href="#Home">Home</a>
                    <a href="#Cities">Cities</a>
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
