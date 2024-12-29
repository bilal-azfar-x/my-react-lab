import React from "react";
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="top-banner">
                <div style={{marginRight:"12%"}}>
                    <h1>Pakistan's <span style={{color:"#a81417"}}>#1</span> E-Learning Platform!</h1>
                    <h4>Prepare for your dream university with Chaajao's premium learning solutions.</h4>
                    <p>Build concrete understanding with Live Classes and self-paced Recorded Courses, master concepts with the Practice Zone, and improve your score with real-time performance analytics!</p>
                    <h5 style={{color:"#a81417"}}>Start learning today!</h5>
                </div>
                <div>
                    <img className="banner-img" src="banner-img.jpg" alt="Image not found"></img>
                </div>
            </div>
            <div className="product-section">
                <h2>Our Latest Study Material!</h2>
                <div className="product-divs">
                    
                    <div className="product">
                        <img className="product-img" src="product-img-1.jpg"></img>
                        <p style={{fontWeight:"700"}}>BBA Quantitive Material</p>
                        <p style={{color:"#a81417", fontWeight:"700"}}>Rs. 3,000</p>
                        <button className="product-button"><Link to="/product-details1/bba-301" className="link2">Product Details</Link></button>
                    </div>

                    <div className="product">
                        <img className="product-img" src="product-img-2.jpg"></img>
                        <p style={{fontWeight:"700"}}>BBA 4 Full-Length Tests</p>
                        <p style={{color:"#a81417", fontWeight:"700"}}>Rs. 7,000</p>
                        <button className="product-button"><Link to="/product-details2/bba-304" className="link2">Product Details</Link></button>
                    </div>

                    <div className="product">
                        <img className="product-img" src="product-img-3.jpg"></img>
                        <p style={{fontWeight:"700"}}>BBA Verbal Material</p>
                        <p style={{color:"#a81417", fontWeight:"700"}}>Rs. 4,000</p>
                        <button className="product-button"><Link to="/product-details3/bba-306" className="link2">Product Details</Link></button>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Home;