import React from 'react';

const Header = () => {
    return (
        <div className='Header'>
            <header className="header-style">
                <div className="header-logo">
                    <img src="./assets/mytinerary_logo.png" width="50" alt="Logo MyTinerary"/>
                </div>
                <nav className="header-nav">
                    <a href="#" target="_new">Home</a>
                    <a href="#" target="_new">Cities</a>
                </nav>
                <div>
                    <div className="user">
                        <img src="./assets/account_circle_white_36dp.svg" alt="Profile user icon"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;