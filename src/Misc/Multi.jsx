import React, { useState, useEffect } from "react";
import axios from "axios";

function Multi() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <input type="checkbox" onChange={() => setToggle(!toggle)} />
      {toggle ? (
        <>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type to see the typed:"
          />
          <h5>{input}</h5>
        </>
      ) : (
        "Click to see the input field!"
      )}
      <div>
        <h1>{time}</h1>
      </div>
    </div>
  );
}

export default Multi;
