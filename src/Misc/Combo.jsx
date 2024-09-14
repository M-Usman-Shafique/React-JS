import React, { useState } from 'react'

function Combo() {
    const [color, setColor] = useState('white')
    const [bgColor, setBgColor] = useState({backgroundColor: 'red'})

    const combo = { ...bgColor, color };
  return (
    <div>
        <h1 style={combo}>Hello React</h1>
        <button onClick={() => setBgColor({backgroundColor: 'green'})}>BG Color</button>
        <button onClick={() => setColor('black')}>Color</button>
    </div>
  )
}

export default Combo