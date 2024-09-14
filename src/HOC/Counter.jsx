import React, { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default Counter;
