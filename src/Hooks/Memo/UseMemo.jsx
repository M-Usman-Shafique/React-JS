import React, { useState, useCallback } from "react";

function UseMemo() {
  let [number, setNumber] = useState(0)
  let [dark, setDark] = useState(false)

  let memoCalculation = useCallback(() => {
    return expensiveFunction(number)
  }, [number])

//   let calculation = expensiveFunction(number);

let theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: '45vw',
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
      <h3>Calculation: {memoCalculation()}</h3>
      <button onClick={() => setDark(!dark)} style={{backgroundColor: 'black', color: 'white', fontSize: 16, borderRadius: 10, padding: 8}}>Toggle</button>
    </div>
  );
}

function expensiveFunction(num) {
  console.log("Loop Started");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Loop Ended")
  return num;
}

export default UseMemo