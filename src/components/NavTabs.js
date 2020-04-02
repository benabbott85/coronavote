import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
         Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Verify"
          className={location.pathname === "/verify" ? "nav-link active" : "nav-link"}
        >
          Verify
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/signout" ? "nav-link active" : "nav-link"}
        >
          Signout
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
