import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
    const {user, login, logout} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
      };
  return (
    <div>
        {user ? (
           <>
            <h2>Welcome {email}</h2>
            <button onClick={logout}>Logout</button>
           </>
        ) : (
                  <form onSubmit={handleSubmit}>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                  <button type="submit">Login</button>
                </form>
        )}
    </div>
  );
}

export default Login;
