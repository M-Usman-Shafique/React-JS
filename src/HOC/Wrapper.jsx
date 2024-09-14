import React from "react";
import Red from './Red'
import Counter from "./Counter";

function Wrapper() {

  return (
    <div>
        <Red hoc={Counter} /> 
    </div>
  )
}

export default Wrapper