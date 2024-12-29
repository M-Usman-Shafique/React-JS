import { useState } from "react";

function Counter({ render }) {
  let [count, setcount] = useState(0);

  const handleEvent = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h2 className="text-center">{render(count)}</h2>
      <button
        onClick={handleEvent}
        className="bg-black text-white text-lg rounded-lg p-2"
      >
        Update
      </button>
    </div>
  );
}

export default Counter;
