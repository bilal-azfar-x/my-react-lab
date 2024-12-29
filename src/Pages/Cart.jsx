import React from "react";
import '../Styles/Cart.css';
import Navbar from "../Components/Navbar";

function Cart () {
    return (
        <div>
            <Navbar />
            <div className="main-div">
                <h1 style={{justifySelf:"center"}}>Cart Page</h1>
                <div className="main-div2">
                    <div className="left-section">
                        <div className="product-card">
                            <img className="prod2-img" src='product-img-1.jpg'></img>
                            <div>
                                <p>Product Name: BBA Quantitve Book</p>
                                <p>Quantity: 1</p>
                                <p>Price: 3,000rs</p>
                            </div>
                        </div>
                        <div className="product-card">
                            <img className="prod2-img"  src='product-img-3.jpg'></img>
                            <div>
                                <p>Product Name: BBA Verbal Book</p>
                                <p>Quantity: 1</p>
                                <p>Price: 4,000rs</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-section2">
                        <h2 style={{alignSelf:"center"}}>Checkout Details:</h2>
                        <div>
                            <hr style={{marginBottom: 30}}/>
                            <p>Subtotal: 7,000rs</p>
                            <p>Shipping Charges: 500rs</p>
                            <hr style={{marginTop: 30, marginBottom: 15}}/>
                            <p>Total: 7,500rs</p>
                            <button className="checkout-button">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;