import React from 'react';
import './App.css';
//import Greeting from './Task 1/Components/ProfileCard.jsx';
import ProductCard from './Task 2/Components/ProductCard';

function App() {
  return (
    //<div>
      //<Greeting name="M. Bilal Azfar" age={20} occupation="Data Scientist" location="Karachi, Pakistan"/>
    //</div>
    <div>
      <ProductCard 
        title="SONY WH-1000XM5" 
        description="Active Noise Cancelling (ANC), over-ear headphones."
        price="$249.99"
        imageURL={"https://tinyurl.com/react-headphones"}/>
    </div>
  );
  }
export default App;