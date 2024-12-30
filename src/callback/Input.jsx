import React, { useCallback, useState } from "react";
import Hello from "./Hello";

export default function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const helloFirstName = useCallback(() => {
    return <div>Hello {firstName}</div>;
  }, [firstName]);

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div>
        <Hello nameFn={helloFirstName} />
      </div>
    </div>
  );
}
