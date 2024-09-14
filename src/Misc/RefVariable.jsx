import React from 'react'

function RefVariable() {
    const labelText = 'Name:'
    const buttonText = () => 'Click';
    const styling = {backgroundColor: 'blue', color: 'white', border: 'none', padding: 3}

  return (
    <div>
        <label> {labelText} </label>
        <input type="text" htmlFor="name"/>
        <button  style={styling}>{buttonText()}</button>
    </div>
  )
}

export default RefVariable