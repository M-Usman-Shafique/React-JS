import React, { useState, useEffect } from "react";

function Authentic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleAuthentication = (e) => {
    e.preventDefault();
    if (isRegistered) {
      // Login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert("Please register an account before login.");
      }
    } else {
      // Register
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"}</h2>
          <form onSubmit={handleAuthentication}>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account? Register now!"
              : "Already have an account? Login now!"}
              {/* isRegistered === true indicates that user is currently on the login form.
              isRegistered === false indicates that user is currently on the reg. form. */}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
            {/* Toggle button to switch between Register & Login forms. */}
          </button>
        </div>
      )}
    </div>
  );
}

export default Authentic;