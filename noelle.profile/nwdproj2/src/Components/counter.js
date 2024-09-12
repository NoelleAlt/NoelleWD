
import React, { useState} from 'react';
 function Counter() {

const [count, setCount] = useState(0);
return (
    <div>
            <h1> You clicked {count} times</h1>
        <button onClick={() => setCount(prev => prev + 1)}> 
            Add 
        </button>

        <button onClick={() => setCount(prev => prev - 1)}> 
            Minus
        </button>

        <button onClick={() => setCount(0)}>
            Reset
        </button>
    </div>
    
    );
 }
export default Counter;
