import React, { useState } from "react";


export default function CounterComponent() {
    const [count, setCount] = useState(0);
    const handleOnClick = () => setCount(count + 1);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleOnClick}>Click Me</button>
        </div>
    )
}