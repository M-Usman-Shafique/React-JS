import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar({ user, login, logout }) {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {user ? (
        <>
          <NavLink to="/users">Users</NavLink>
          <button onClick={logout} className="btn logout">Logout</button>
        </>
      ) : (
        <button onClick={login} className="btn login">Login</button>
      )}
    </nav>
  );
}

export default Navbar;
