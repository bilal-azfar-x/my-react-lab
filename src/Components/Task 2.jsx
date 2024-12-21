import React, { useState } from "react";
import "../Styles/Task 2.css";


function Calculator () {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [output, setOutput] = useState(0);

    const add = () => { 
        setOutput(Number(num1) + Number(num2));
    }
    const subtract = () => {
        setOutput(Number(num1) - Number(num2));
    }
    const multiply = () => {
        setOutput(Number(num1) * Number(num2));
    }
    const divide = () => {
        setOutput(Number(num1) / Number(num2));
    }

    return (
        <div className="main-div">
            <h1 className="div1">{output}</h1>

            <div className="div2">
                <input
                    className="input-fields"
                    type="number"
                    placeholder="Input"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input
                    className="input-fields"
                    type="number"
                    placeholder="Input"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            
            <div className="div3">
                <button className='button' onClick={add}>Add</button>
                <button className='button' onClick={subtract}>Subtract</button>
                <button className='button' onClick={multiply}>Multiply</button>
                <button className='button' onClick={divide}>Divide</button>
            </div>
        </div>
    );
}

export default Calculator;