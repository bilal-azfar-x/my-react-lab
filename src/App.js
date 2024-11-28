import React from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
  }
export default App;