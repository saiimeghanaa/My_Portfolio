import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
        <h3>Saii Meghanaa Penumetsa</h3>
        <p>
            Frontend Developer passionate about creating beautiful, functional, 
            and user-friendly web applications. Let's build something amazing together.
        </p>
        <div className="footer-socials">
                <a href="https://github.com/saiimeghanaa" target= "_blank" rel="noopener noreferrer" className="social-icon"><LuGithub /></a>
                <a href="https://www.linkedin.com/in/meghapenumetsa" target= "_blank" rel="noopener noreferrer" className="social-icon"><LuLinkedin /></a>
                <a href="mailto:saiimeghanaa9@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><LuMail /></a>
        </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
        <h4>Get In Touch</h4>
        <p>saiimeghanaa9@email.com</p>
        <p>+91 9533633636</p>
        <p>Visakhapatnam, AP</p>
        </div>
    </div>

    <div className="footer-bottom">
        <p>© 2025 Saii Meghanaa. Made with ❤️ in Visakhapatnam</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
    </div>
</footer>

  );
}

export default Footer;
