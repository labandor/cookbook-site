import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const AuthDropdown = ({ user }) => (
  <div className="dropdown">
    {!user && <NavLink className="link" to="/sign-in">Sign In</NavLink>}
    {!user && <NavLink className="link" to="/sign-up">Sign Up</NavLink>}
    {user && <NavLink className="link" to="/sign-out">Sign Out</NavLink>}
  </div>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/browse">Browse</NavLink>
    <NavLink className="link" to="/about">About Us</NavLink>
  </>
);

const authenticatedOptions = (user) => (
  <>
    {user && <NavLink className="link" to="/add-recipe">Add Recipe</NavLink>}
  </>
);

const unauthenticatedOptions = (
  <>
  </>
);

const Nav = ({ user }) => {
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  const toggleAuthDropdown = () => {
    setShowAuthDropdown(!showAuthDropdown);
  };

  return (
    <nav>
      <div className="nav">
        <div className="left-links">
          {alwaysOptions}
          {user ? authenticatedOptions(user) : unauthenticatedOptions} 
        </div>
        <div className="right-links">
          <div className="dropdown-container">
            <NavLink className="link" to="#" onClick={toggleAuthDropdown}>My Account</NavLink>
            {showAuthDropdown && (
              <AuthDropdown user={user} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
