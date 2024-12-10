import React from "react";
import "../Styles/User.css";

function User ({user}) {

    return (
        <div className="user-card">
            <div className="profile-pic">{user.profilePicture}</div>
            <div className="flex-group">
                <p className="flex-items">{user.name}</p>
                <p className="flex-items">{user.email}</p>
                <p className="flex-items role" style={{marginTop: "12px"}}>{user.role}</p>
            </div>
        </div>
    );
}

export default User;