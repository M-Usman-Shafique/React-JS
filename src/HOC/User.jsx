import React from "react";

export default function User() {
  const user = { name: "Usman", email: "usman@test.com" };
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
