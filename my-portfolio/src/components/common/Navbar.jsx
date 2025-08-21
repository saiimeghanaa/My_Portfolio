import React from 'react';


function Navbar() {
    return(
        <nav className="navbar">
        <div className="navbar-logo">
            Portfolio          
        </div>
        <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <button className= ".theme-toggle-btn">Theme</button>
    </nav>
    );
    
}
export default Navbar;