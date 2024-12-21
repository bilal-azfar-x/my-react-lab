import React, { useState } from "react";
import '../Styles/Task 3.css';

function Login_Form () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    const reset = () => {
        setName("")
        setEmail("")
        setAge("")
        setPassword("")
    }

    return (
        <div className="main-div">
            <div className="div1">
                <h1>Login Form:</h1>
                <div className="grid-box">
                    <input
                        className="input-fields"
                        type = "text"
                        placeholder = "Enter your name"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                    <input
                        className="input-fields"
                        type = "email"
                        placeholder = "Enter your email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input-fields"
                        type = "text" //Used "text" to remove the counter arrows in the input field.
                        placeholder = "Enter your age"
                        value = {age}
                        onChange = {(e) => setAge(e.target.value)}
                    />
                    <input
                        className="input-fields"
                        type = "password"
                        placeholder = "Enter your password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button" onClick = {reset}>Reset All</button>
            </div>
            <div className="div2">
                <h1>Entered Information:</h1>
                <p><span style={{fontWeight: "700"}}>Name:</span> {name}</p> 
                <p><span style={{fontWeight: "700"}}>Email:</span> {email}</p>
                <p><span style={{fontWeight: "700"}}>Age:</span> {age}</p>
                <p><span style={{fontWeight: "700"}}>Password:</span> {password}</p>
            </div>
        </div>
    );
}

export default Login_Form;