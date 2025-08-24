import React, {useContext} from 'react';
import {LuMoon, LuSun} from 'react-icons/lu';
import {useTheme} from '../common/ThemeProvider'

function Navbar({}) {
    const {theme, ToggleTheme} = useTheme();
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
        <button className="theme-toggle-btn" onClick={ToggleTheme}>
            {
                theme === 'light' ? <LuMoon className="moon-icon"/>  : <LuSun className="sun-icon"/> 
            }  
        </button>
        
        
        
    </nav>
    );
    
}
export default Navbar;