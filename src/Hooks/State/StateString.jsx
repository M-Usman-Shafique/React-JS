import React, { useState } from "react"

function StateString() {
  // let [count, setCount] = useState(0)
  // let [name, setName] = useState('')

  let [details, setDetails] = useState({ count: 0, name: "" });

  const increment = () => {
    setDetails((prev) => ({
        ...prev, count: prev.count + 1
    }))
  }

  const catchName = (e) => {
    setDetails((prev) => ({
        ...prev, name: e.target.value
    }))
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      
      {/* <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <h5>{name} is clicked {count} times</h5>
        <button onClick={() => setCount(count + 1)}>Counter</button> */}

      <input type="text" onChange={catchName} style={{margin: 10, padding: 8, width: '25vw'}}></input>
      <h2 style={{margin: 10}}>{details.name} is clicked {details.count} times</h2>
      <button onClick={increment} style={{borderRadius: 10, margin: 10, backgroundColor: 'black', color: 'white', padding: 8}}>Counter</button>
    </div>
  );
}

export default StateString
