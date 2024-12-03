import React from "react";
import '../Styles/ProfileCard.css';

function Greeting(props) {
    const { name, age, occupation, location } = props;
    return (
        <div className="card">
            <div className="card-label">Profile Card</div>
            <div className="flex-items-group">
                <p className="flex-items">{name}</p>
                <p className="flex-items">{age} years old</p>
                <p className="flex-items">{occupation}</p>
                <p className="flex-items">{location}</p>
            </div>
        </div>
    );
}

export default Greeting;