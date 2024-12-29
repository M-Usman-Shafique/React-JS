import React, { useState } from "react";

export default function Counter({ render }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {render(count)}
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
}
