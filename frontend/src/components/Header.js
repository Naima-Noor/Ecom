import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const location = useLocation(); // Get current path
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <div className="header">
      {/* Logo / Heading */}
      <h2 className="logo">Crafty Fascinations</h2>

      {/* Menu Toggle Button (for Mobile) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </div>

      {/* Navigation Menu */}
      <ul id="navbar" className={menuOpen ? "open" : ""}>
        <li><Link to="/Home" className={location.pathname === "/Home" ? "active" : ""}>Home</Link></li>
        <li><Link to="/ShopPage" className={location.pathname === "/ShopPage" ? "active" : ""}>Shop</Link></li>
        <li><Link to="/BlogPage" className={location.pathname === "/BlogPage" ? "active" : ""}>Blog</Link></li>
        <li><Link to="/About" className={location.pathname === "/About" ? "active" : ""}>About</Link></li>
        <li><Link to="/ContactSection" className={location.pathname === "/ContactSection" ? "active" : ""}>Contact</Link></li>
        {/* <li><Link to="/Registration" className={location.pathname === "/Registration" ? "active" : ""}>Register</Link></li>
        <li><Link to="/List" className={location.pathname === "/List" ? "active" : ""}>List</Link></li> */}
        <li><Link to="/Login" className={location.pathname === "/Login" ? "active" : ""}><FontAwesomeIcon icon={faUser} style={{ fontSize: "15px" }} /></Link></li>
        <li><Link to="/CartSection" className={location.pathname === "/CartSection" ? "active" : ""}><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "15px" }} /></Link></li>
      </ul>
    </div>
  );
}

export default Header;
