import React from "react";
import '../Styles/Messages.css';

function Messages ({messages}) {
    return (
        <ul className="message-card">
            <li className="list-items"><span style={{fontWeight:"700"}}>Message 1:</span> {messages.message1}</li>
            <li className="list-items"><span style={{fontWeight:"700"}}>Message 2:</span> {messages.message2}</li>
            <li className="list-items"><span style={{fontWeight:"700"}}>Message 3:</span> {messages.message3}</li>
        </ul>
    );
}

export default Messages;