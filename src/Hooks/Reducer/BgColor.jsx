import React, { useReducer } from "react";

const initialState = "white";
const reducer = (state, action) => {
  switch (action) {
    case "DARK":
      return "black";
    case "LIGHT":
      return "white";
    default:
      return state;
  }
};
function BgColor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{backgroundColor: state, height: '100vh', width: '100vw'}}>
      <button onClick={() => dispatch(state === "white" ? "DARK" : "LIGHT")}>
        {state === "white" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default BgColor;
