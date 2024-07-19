/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/chat" className="navbar-logo">
            Chat App
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link" id='btn' onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;