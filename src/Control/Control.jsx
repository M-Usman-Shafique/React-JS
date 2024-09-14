import React, { useState } from 'react'

function Control() {
    const [state, setState] = useState({name: ''})
    console.log(state.name)
  return (
    <div>
        <input type="text" value= {state.name} onChange={(e) => setState({name: e.target.value.toUpperCase()})}/>
        {/* Uppercase both in console & input field because 'value' can be accessed & manipulated using state. */}
    </div>
  )
}

export default Control