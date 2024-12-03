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
        imageURL={"https://www.sony.com/is/image/gwtprod/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha&wid=515&hei=515&trf=trim"}/>
      <ProductCard 
        title="Soundcore Liberty 4 NC" 
        description="Active Noise Cancelling (ANC), in-ear headphones."
        price="$99.99"
        imageURL={"https://cdn.shopify.com/s/files/1/0516/3761/6830/files/3947Z11.jpg?v=1711008771"}/>
    </div>
  );
  }
export default App;