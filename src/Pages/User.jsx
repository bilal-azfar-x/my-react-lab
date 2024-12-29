import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();

    return (
        <div>
            <Navbar/>
            <div style={{margin:"60px 0px", padding:"50px", backgroundColor:"#f1f4fb", borderRadius:"20px", width:"400px", justifySelf:"center"}}>
                <h1>User Profile:</h1>
                <div>
                    <p><span style={{fontWeight:"700"}}>Name:</span> Bilal Azfar</p>
                    <p><span style={{fontWeight:"700"}}>ID:</span> {userId}</p>
                    <p><span style={{fontWeight:"700"}}>Email:</span> 24g-bcs405@student.agu.edu.pk</p>
                    <p><span style={{fontWeight:"700"}}>Age:</span> 20</p>
                </div>
            </div>
            
        </div>
);
}

export default User;