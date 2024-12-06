import React, { useMemo, useState } from "react";

const debounce = (func, wait) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
};

const handleOnChange = (e) => {
  console.log(e.target.value);
};

// const debounced = debounce(handleOnChange, 500);

export default function DebounceDemo() {
  const [searched, setSearched] = useState("");

  const debounced = useMemo(() => debounce(handleOnChange, 500), []);
  // if want to avoid useMemo(), then place the "debounced" outside too.

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearched(e.target.value);
          debounced(e);
        }}
        className="text-black"
      />
    </div>
  );
}
