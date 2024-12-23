import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
    return (
        <div className="div-main">
            <a href="/"><img className="img" src='logo.png' alt="Image not found."></img></a>
            <ul className="left-section">
                <li><a href="/" className="link">Home</a></li>
                <li><a href="/about" className="link">About Us</a></li>
                <li><a href="/contact" className="link">Contact Us</a></li>
                <li><a href="/user/Bilal4301" className="link">User Profile</a></li>
            </ul>
        </div>
    );
}

export default Navbar;