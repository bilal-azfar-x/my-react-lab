import React, { useState } from "react";
import "../Styles/Task 1.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className="flexbox">
            <h1>Count: {count}</h1>
            <div className="flex-items">
                <button className='button' onClick={increment}>Increment</button>
                <button className='button' onClick={decrement}>Decrement</button>
                <button className='button' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;