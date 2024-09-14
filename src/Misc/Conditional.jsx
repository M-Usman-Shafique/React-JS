import React, { useState } from 'react'
import custom from './custom.module.css'

function Conditional() {
    const [color, setColor] = useState('blue')
  return (
    <div>
        <h1 className={color === 'blue' ? custom.blue : custom.green}>Welcome to the brave new world.</h1>
        <h2 style={{backgroundColor: color === 'blue' ? 'blue' : 'purple'}}>Simple sample text to test color.</h2>
        <button onClick={() => setColor('green')}>Update Color</button>
    </div>
  )
}

export default Conditional