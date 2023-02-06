import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Movies</Link>
        <Link to="/booking"> CheckOut </Link>
      </div>
    </div>
  );
};