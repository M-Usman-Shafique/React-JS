import React, { useState, useEffect, useLayoutEffect} from 'react'

function UseLayout() {
    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log("useEffect")
    }, [toggle])

    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, [toggle])

  return (
    <div>
    <button onClick={() => setToggle(!toggle)} style={{backgroundColor: 'black', color: 'white', fontSize: 16, borderRadius: 10, padding: 8, margin: 5}}>Toggle</button>
    {toggle && <h2>Hello World!</h2>}
    </div>
  )
}

export default UseLayout