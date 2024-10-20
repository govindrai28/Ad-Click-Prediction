// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to track if user is signed in or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Implement actual sign-in logic here
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Implement actual sign-out logic here
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">AdClick Predictor</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#predict">Prediction</a></li>
      </ul>
      
      <div className="auth-buttons">
        {isAuthenticated ? (
          <button className="btn-signout" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button className="btn-signin" onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
