import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down"></ul>
      </div>
    </nav>
  );
}

export default Header;
