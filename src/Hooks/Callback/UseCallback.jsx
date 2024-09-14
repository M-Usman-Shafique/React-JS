import React, { useState, useCallback } from 'react'
import PrintTable from './PrintTable.jsx'

function UseCallback() {
let [number, setNumber] = useState(1)
let [dark, setDark] = useState(false);

const calculateTable = useCallback(() => {
return [number * 1, number * 2, number * 3, number * 4, number *5]
}, [number]);

let theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: '20vw',
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  };

  return (
    <div style={theme}>
      <input
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
        type="number"
        style={{width: '20vw', height: '6vh', fontSize: 20}}
      ></input>
      <PrintTable calculateTable={calculateTable}></PrintTable>
      <button onClick={() => setDark(!dark)} style={{backgroundColor: 'black', color: 'white', fontSize: 16, borderRadius: 10, padding: 8}}>Toggle</button>
    </div>
  );
}

export default UseCallback