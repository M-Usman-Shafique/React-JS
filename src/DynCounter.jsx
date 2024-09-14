import React, { useState } from 'react'

function DynCounter() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1)

    const handleIncrease = (num) => {
        setCount(prev => prev + num);
    }

    const handleDecrease = (num) => {
        setCount(prev => prev - num);
    }


  return (
    <div >
        <button onClick={() => handleIncrease(number)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => handleDecrease(number)}>-</button>
        <br />
        <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
    </div>
  )
}

export default DynCounter