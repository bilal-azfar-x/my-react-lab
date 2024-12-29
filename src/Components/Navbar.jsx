import React from "react";
import "../Styles/Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="div-main">
            <a href="/"><img className="left-img" src='logo.png' alt="Image not found."></img></a>
            <ul className="nav-links middle-section">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/user/bilal.azfar.x" className="link">User Profile</Link></li>
                
            </ul>
            <ul className="nav-links right-section">
                <button className="cart-button"><Link to="/cart" className="button-link">Cart</Link></button>
                <button className="login-button"><Link to="/login" className="button-link">Login</Link></button>
                <button className="signup-button"><Link to="/signup" className="button-link">Signup</Link></button>
            </ul>
        </nav>
    );
}

export default Navbar;