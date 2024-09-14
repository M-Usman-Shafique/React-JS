import { useState } from "react";

function Counter({ render }) {
  let [count, setcount] = useState(0);

  const handleEvent = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{render(count)}</h2>
      <button onMouseMove={handleEvent} style={{backgroundColor: 'black', color: 'white', fontSize: 20, borderRadius: 10, padding: 15}}>Update</button>
    </div>
  );
}

export default Counter;
