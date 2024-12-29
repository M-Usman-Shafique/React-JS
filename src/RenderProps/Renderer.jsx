import React from "react";
import Counter from "./Counter";

const doubleCount = (arg) => <h1>{arg * 2}</h1>;

export default function Renderer() {
  return (
    <>
      <Counter render={doubleCount} />
    </>
  );
}
