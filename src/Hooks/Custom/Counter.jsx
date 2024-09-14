import React from "react";
import useCounter from "./UseCounter";

function Counter() {
  let data = useCounter();

  return (
    <>
      <h2>Counter: {data.count}</h2>
      <button onClick={data.increment}>
        Increment
      </button>
    </>
  );
}
export default Counter;
