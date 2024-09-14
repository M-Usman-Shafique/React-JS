import React from "react";
import CounterOptimized from "./CounterOptimized";

function RenderPropOptimized() {
  return (
    <CounterOptimized
      render={(state, setState) => {
        return (
          <div style={{display: "flex", justifyContent: "center", gap: 1.5}}>
            <button style={{ backgroundColor: "black", color: "white", fontSize: 14, height: 40 }}
              onClick={() => setState(state + 1)}>Update</button>
            <button style={{backgroundColor: "black", color: "white", fontSize: 16, fontWeight: "bold", padding: 10, height: 40}}>{state}</button>
            <button style={{ backgroundColor: "black", color: "white", fontSize: 14, height: 40 }}
              onClick={() => setState(state - 1)}>Remove</button>
          </div>
        );
      }}
    />
  );
}

export default RenderPropOptimized;
