import React, { useState, useEffect, useRef} from 'react'

function UseRef() {

  // ​‌‍‌⁡⁣⁢⁣Creating Mutable Variable:⁡​

    let [name, setName] = useState('')
    let input = useRef(null)
    let count = useRef(0);

    // let [count, setCount] = useState(0)
    // useEffect(() => {               // Count will start constantly updating without writing anything in input field.
    //     setCount(() => count + 1)
    // })

    useEffect(() => {
        count.current += 1
    })

    // ​‌‍‌⁡⁣⁢⁣Accessing DOM Elements:⁡​

    let increase = () => {
      input.current.style.width = "40vw"
      input.current.focus()
    }
  return (
    <div>
        <input type="text" ref={input} onChange={(e) => setName(e.target.value)} style={{padding: 8, width: '20vw', margin: '10px 0px'}}></input>
        <br></br>
        <button onClick={increase} style={{backgroundColor: 'black', color: 'white', fontSize: 16, borderRadius: 10, padding: 8, margin: 5}}>Click</button>
        <h2>Name: {name}</h2>
        <h2>Counter: {count.current}</h2>
    </div>
  )
}

export default UseRef