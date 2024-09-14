import { useState } from "react";

function StateArr() {
  let [user, setUser] = useState([]);

  let addUser = () => {
    setUser([
      ...user, { id: user.length, value: Math.floor(Math.random() * 10) },
    ])
  }
  // if array with spread operators (... user) was not inserted in start, then on changing the input field, the input data was removed.
  return (
    <div>
      <button
        onClick={addUser}
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: 20,
          borderRadius: 10,
          padding: 10,
        }}
      >
        Click to Generate
      </button>
      <ul style={{ fontSize: 30, listStyle: "none" }}>
        {user.map((user) => (
          <li key={user.id}>{user.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StateArr;
