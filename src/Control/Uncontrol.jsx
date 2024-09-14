import React, { useRef } from "react";

function Uncontrol() {
  const inputRef = useRef(null);
  const handleChangeRef = () => console.log(inputRef.current.value.toUpperCase())

  const handleChange = (e) => console.log(e.target.value.toUpperCase())

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChangeRef}
        placeholder="Ref Input Field"   // soft control by useRef
      />
      <input type="text" onChange={handleChange} placeholder="Common Input Field" />    {/* Common JavaScript way of soft control. */}
      {/* Uppercase only in console because 'value' property of input field cannot be accessed without useState. */}
    </div>
  );
}

export default Uncontrol;
