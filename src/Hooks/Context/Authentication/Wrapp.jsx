import React from "react";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";

function Wrapp() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default Wrapp;
