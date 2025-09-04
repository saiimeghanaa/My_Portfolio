import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
        <h3>Alex Johnson</h3>
        <p>
            Full Stack Developer passionate about creating beautiful, functional, 
            and user-friendly web applications. Let's build something amazing together.
        </p>
        <div className="footer-socials">
                <a href="#" className="social-icon"><LuGithub /></a>
                <a href="#" className="social-icon"><LuLinkedin /></a>
                <a href="#" className="social-icon"><LuMail /></a>
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
        <p>alex.johnson@email.com</p>
        <p>+1 (555) 123-4567</p>
        <p>San Francisco, CA</p>
        </div>
    </div>

    <div className="footer-bottom">
        <p>© 2025 Alex Johnson. Made with ❤️ in San Francisco</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
    </div>
</footer>

  );
}

export default Footer;
