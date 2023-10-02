import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const handleReset = () => {
        setCount((prevCount) => prevCount = 0)
    }
  return (
    <div>
      <div className="counting">
        <h2>Count : {count}</h2>
        <div className='btn_sign'>
            <button onClick={handleIncrement} disabled = {count === 5}>+</button>
            <button onClick={handleDecrement} disabled = {count === -5}>-</button>
            <button onClick={handleReset} disabled = {count === 0}>0</button>
        </div>
      </div>
    </div>
  )
}
export default Counter;