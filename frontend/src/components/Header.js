import React from 'react';

const Header = () => {

    const logo = "./assets/mytinerary_logo.png";
    const userIcon = "./assets/account_circle_white_36dp.svg";

    return (
        <div className='Header'>
            <header className="header-style">
                <div className="header-logo">
                    <img src={logo} width="50" alt="Logo MyTinerary"/>
                </div>
                <nav className="header-nav">
                    <a href="#">Home</a>
                    <a href="#">Cities</a>
                </nav>
                <div>
                    <div className="user">
                        <img src={userIcon} alt="Profile user icon"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;