import React from "react";
import Counter from "./Counter";

function RenderProp() {
  return (
    <Counter
      render={(arg) => {
        return (
          <>
            <h1>{arg}</h1>
          </>
        );
      }}
    />
  );
}

export default RenderProp;
