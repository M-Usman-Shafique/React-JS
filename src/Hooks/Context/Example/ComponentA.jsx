import React from "react";
import { useUser } from './UserContext';
import ComponentB from "./ComponentB";
import "./Styles.css";

function ComponentA() {
  const { user } = useUser(); // Correctly accessing the user from context
  return (
    <div className="componentA">
      <h1>Component A</h1>
      <p>{user} sent!</p> {/* This line should correctly display the user */}
      <ComponentB />
    </div>
  );
}

export default ComponentA;