import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../Navbar.css'

function Login({ setUser }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login"
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume successful login
    setUser(true);
    navigate("/profile");
  }
  return (
    <div className="input-box">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={details.username}
          placeholder='Enter Username'
          className="inputs"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={details.password}
          placeholder='Enter Password'
          className="inputs"
          onChange={handleChange}
          required
        />
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;