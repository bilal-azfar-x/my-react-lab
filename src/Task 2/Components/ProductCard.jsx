import React from "react";
import '../Styles/ProductCard.css';

function ProductCard (props) {
    const { title, description, price, imageURL } = props;
    return (
        <div className='card'>
            <div className="card-label">
                <p style={{transform: 'rotate(-90deg)'}}>PRODUCT CARD</p>
            </div>
            <div className="card-details">
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p><a href={imageURL}>Image URL</a></p>
            </div>
        </div>
    );
}

export default ProductCard;