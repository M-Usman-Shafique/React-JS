import { memo } from "react";

function Hello({ nameFn }) {
  console.log("re-rendered...");
  return nameFn();
}

export default memo(Hello);
