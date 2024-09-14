import { useState } from "react";

function CounterOptimized({ render }) {
  let [count, setcount] = useState(0);
  return render(count, setcount)
}

export default CounterOptimized;
