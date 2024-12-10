import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                
                <div><img src="Logo.png" alt="#Error" style={{width: 200, paddingTop: '10px'}} /></div>

                <ul className="navbar-menu">
                    <li><a href="#" className="navbar-link">Study Material</a></li>
                    <li><a href="#" className="navbar-link">About</a></li>
                    <li><a href="#" className="navbar-link">Career</a></li>
                    <li><a href="#" className="navbar-link">Contact</a></li>
                    <li><a href="#" className="call-button">Call</a></li>
                    <li><a href="#" className="chat-button">Chat</a></li>
                    <li><a href="#" className="lms-button">Go To LMS</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;