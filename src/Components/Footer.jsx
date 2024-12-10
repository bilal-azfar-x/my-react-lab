import React from 'react';
import '../Styles/Footer.css';

function Footer() {
    return (
        <div className='main-container'>
            <div className='flex-items'>
                <ul className='column'>
                    <li><img src='footerlogo.svg' style={{height: '30px', marginTop: '15px'}}/></li>
                    <li><p style={{maxWidth:'300px'}}>The premium one-stop online learning platform for students all around the globe!</p></li>
                </ul>
                <ul className="column">
                    <p style={{fontWeight:'700'}}>Shortlinks</p>
                    <li><a href="#" className="footer-links">Study Material</a></li>
                    <li><a href="#" className="footer-links">About</a></li>
                    <li><a href="#" className="footer-links">Career</a></li>
                    <li><a href="#" className="footer-links">Contact</a></li>
                </ul>
                <ul className="column">
                    <p style={{fontWeight:'700'}}>Courses</p>
                    <li><a href="#" className="footer-links">ECAT</a></li>
                    <li><a href="#" className="footer-links">BCAT</a></li>
                    <li><a href="#" className="footer-links">MDCAT</a></li>
                    <li><a href="#" className="footer-links">SAT</a></li>
                    <li><a href="#" className="footer-links">O Levels</a></li>
                    <li><a href="#" className="footer-links">A Levels</a></li> 
                </ul>
                <ul className="column">
                    <p style={{fontWeight:'700'}}>Other Links</p>
                    <li><a href="#" className="footer-links">Privacy Policy</a></li>
                    <li><a href="#" className="footer-links">Terms & Conditions</a></li>
                </ul>
            </div>
            <hr className='footer-line'/>
            <p className='footer-text'>Copyright ©2024 Chaajao Technologies - All Rights Reserved</p>
        </div>
    );
}

export default Footer;