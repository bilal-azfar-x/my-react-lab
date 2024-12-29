import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from 'react-router-dom';

function ProductDetails1() {
    const { prodId } = useParams();

    return (
        <div>
            <Navbar/>
            <div style={{margin:"60px 0px", padding:"50px", backgroundColor:"#f1f4fb", borderRadius:"20px", width:"400px", justifySelf:"center"}}>
                <h1>Product Details:</h1>
                <div>
                    <p><span style={{fontWeight:"700"}}>Name:</span> BBA Quantitve Material</p>
                    <p><span style={{fontWeight:"700"}}>ID:</span> {prodId}</p>
                    <p><span style={{fontWeight:"700"}}>Price:</span> 3,000rs</p>
                    <p><span style={{fontWeight:"700"}}>Quantity:</span> 32</p>
                </div>
            </div>
            
        </div>
);
}

export default ProductDetails1;