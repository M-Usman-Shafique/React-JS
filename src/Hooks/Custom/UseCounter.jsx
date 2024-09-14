import { useState } from "react";

function useCounter() {
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  };
  return {
    count,
    increment,
  }
}

export default useCounter;
