import React, { useState } from 'react'

function CountFuncion() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    }

    const decrease = () => [
        setNumber(number - 2)
    ]
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </div>
  )
}

export default CountFuncion