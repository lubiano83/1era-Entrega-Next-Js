import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(1);

    const increment = () => {
        if (counter < 10) setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter > 1) setCounter(counter - 1);
    };

    const handleAdd = () => {
      console.log(counter);
    };

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}; export default Counter;
