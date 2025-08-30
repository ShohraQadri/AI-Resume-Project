import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  
const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <header>
      <div className="logo-text">
        <span className="ai">AI</span>
        <span className="resume"> Resume</span>
        <span className="builder"> Builder</span>
      </div>
      <ul className="listing_pnl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Feature</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign-in</Link>
        </li>
         {isAuthenticated && <li><Link to="/dashboard">Dashboard</Link></li>}
      </ul>
    </header>
  );
};

export default Navbar;
