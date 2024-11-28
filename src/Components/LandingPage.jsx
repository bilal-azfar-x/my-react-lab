import React from 'react';
import '../Styles/LandingPage.css';
import { useState } from 'react';

function LandingPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    return (
        <div className="landing-container">
            <img src='home-banner.png' alt='Image not found.'/>
            
            <h1 style={{paddingTop: '50px'}}>Explore Our <span style={{color: '#a81417'}}>Course</span> Offerings!</h1>
            <div className='all-courses'>
                <div className='course-box'>
                    <div><img src="MDCAT-img.png" alt="Image not found." style={{height: 95}} /></div>
                    <div className='course-name'>MDCAT</div>
                    <div className='content-count'>150,000+ Questions | 40,000+ Lectures</div>
                </div>
                
                <div className='course-box'>
                <div><img src="BCAT-img.png" alt="Image not found." style={{height: 95}} /></div>
                    <div className='course-name'>BCAT</div>
                    <div className='content-count'>50,000+ Questions | 10,000+ Lectures</div>
                </div>
                
                <div className='course-box'>
                <div><img src="ECAT-img.png" alt="Image not found." style={{height: 95}} /></div>
                    <div className='course-name'>ECAT</div>
                    <div className='content-count'>20,000+ Questions | 3,000+ Lectures</div>
                </div>
            </div>
            <button className="courses-button"> More Courses! </button>

            <h1 style={{marginTop: '100px'}}>Share Your <span style={{color: '#a81417'}}>Feedback!</span></h1> 
            <div className='form-container'>
                <div>
                    <form className='form-items'>
                        <label>Enter your name:
                            <input className='input-field' style={{width: '310px'}}
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label>Enter your email:
                            <input className='input-field' style={{width: '312px'}}
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label>Enter your number:
                            <input className='input-field' style={{width: '293px'}}
                                type='tel'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;