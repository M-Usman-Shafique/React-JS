import { memo } from "react";

function Hello({ name }) {
  console.log("re-rendered...");
  return <div>Hello {name}</div>;
}

export default memo(Hello);
