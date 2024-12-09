import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-center">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="text-sm bg-gray-300 px-1 rounded-sm text-black">Counter</button>
    </div>
  );
}

export default Counter;
