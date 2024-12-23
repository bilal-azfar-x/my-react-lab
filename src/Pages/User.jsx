import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();

    return (
        <div>
            <Navbar/>
            <h1>Profile of User: {userId}</h1>
        </div>
    );
}

export default User;