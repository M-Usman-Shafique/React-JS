import React, { useReducer } from "react";
import "../Reducer/useReduce.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function UseReduce() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="box">
      <button onClick={() => dispatch("DECREMENT")} className="btn">
        Decrement
      </button>
      <button className="counter">{state}</button>
      <button onClick={() => dispatch("INCREMENT")} className="btn">
        Increment
      </button>
      <button onClick={() => dispatch("RESET")} className="btn red">
        Reset
      </button>
    </div>
  );
}

export default UseReduce;
