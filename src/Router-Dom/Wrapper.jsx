import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Users from "./pages/Users.jsx";
import About from "./pages/About.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Login from "./pages/Login.jsx";
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
import Protected from "./Protected.jsx";

function Wrapper() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirectingToLogin, setRedirectingToLogin] = useState(false);

  useEffect(() => {
    // Retrieve the user state from localStorage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    setLoading(false);
  }, []);

  const login = () => {
    setRedirectingToLogin(true);
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("user");
  };

  const handleSetUser = (userState) => {
    setUser(userState);
    localStorage.setItem("user", JSON.stringify(userState));
  };

  useEffect(() => {
    // Reset redirectingToLogin state after reaching the login page.
    if (window.location.pathname === "/login") {
      setRedirectingToLogin(false);
    }
  });

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while checking auth status
  }

  return (
    <Router>
      <Navbar user={user} login={login} logout={logout} />
      <div>
        {redirectingToLogin && <Navigate to="/login" />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<h2>Loading . . .</h2>}>
                <Gallery />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={handleSetUser} />} />
           <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/users"
            element={
              <Protected user={user}>
                <Users />
              </Protected>
            }
          />
          <Route
            path="/users/:userid"
            element={
              <Protected user={user}>
                <UserDetails />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Wrapper;