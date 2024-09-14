import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [time, setTime] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
           setTime(time + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
  return (
    <div>
        <h1>{time} seconds</h1>
    </div>
  )
}

export default UseEffect