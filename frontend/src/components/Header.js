
// // // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// // function Header() {
// //   return (
// //     <div style={{
// //       display: "flex",
// //       justifyContent: "space-between",
// //       alignItems: "center",  /* Yeh property text ko vertically center karegi */
// //       padding: "35px",
// //       background: "#f8f8f8",
// //       height: "60px"
// //     }}>
// //       {/* Logo / Heading */}
// //       <h2 style={{ fontSize: "24px", color: "#088178", fontFamily: "inherit", margin: '10px' }}>
// //         ℭ𝔯𝔞𝔣𝔱𝔶 𝔉𝔞𝔰𝔠𝔦𝔫𝔞𝔱𝔦𝔬𝔫𝔰
// //       </h2>

// //       {/* Navigation Menu */}
// //       <ul id="navbar" style={{
// //         display: "flex",
// //         listStyle: "none",
// //         gap: "20px",
// //         margin: "0",
// //         alignItems: "center",
// //         fontSize: '16px',
// //         fontWeight: 'inherit'

// //       }}>
// //         <li>
// //           <Link to="/Home">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/ShopPage" >Shop</Link>
// //         </li>
// //         <li>
// //           <Link to="/BlogPage" >Blog</Link>
// //         </li>
// //         <li>
// //           <Link to="/About" >About</Link>
// //         </li>
// //         <li>
// //           <Link to="/ContactSection" >Contact</Link>
// //         </li>
// //         <li>
// //           <Link to="/Registration" >Register</Link>
// //         </li>
// //         {/* <li>
// //           <Link to="/List" style={{ textDecoration: "none", color: "#333" }}>List</Link>
// //         </li> */}
// //         <li>
// //           <Link to="/CartSection">
// //             <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "15px" }} />
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Header;
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const location = useLocation(); // Get current path

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "35px",
//       background: "#f8f8f8",
//       height: "60px"
//     }}>
//       {/* Logo / Heading */}
//       <h2 style={{ fontSize: "24px", color: "#088178", fontFamily: "inherit", margin: '10px' }}>
//         ℭ𝔯𝔞𝔣𝔱𝔶 𝔉𝔞𝔰𝔠𝔦𝔫𝔞𝔱𝔦𝔬𝔫𝔰
//       </h2>

//       {/* Navigation Menu */}
//       <ul id="navbar" style={{
//         display: "flex",
//         listStyle: "none",
//         gap: "20px",
//         margin: "0",
//         alignItems: "center",
//         fontSize: '16px',
//         fontWeight: 'inherit'
//       }}>
//         <li>
//           <Link to="/Home" className={location.pathname === "/Home" ? "active" : ""}>Home</Link>
//         </li>
//         <li>
//           <Link to="/ShopPage" className={location.pathname === "/ShopPage" ? "active" : ""}>Shop</Link>
//         </li>
//         <li>
//           <Link to="/BlogPage" className={location.pathname === "/BlogPage" ? "active" : ""}>Blog</Link>
//         </li>
//         <li>
//           <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>About</Link>
//         </li>
//         <li>
//           <Link to="/ContactSection" className={location.pathname === "/ContactSection" ? "active" : ""}>Contact</Link>
//         </li>
//         <li>
//           <Link to="/Registration" className={location.pathname === "/Registration" ? "active" : ""}>Register</Link>
//         </li>
//         <li>
//           <Link to="/CartSection">
//             <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "15px" }} />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


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
        <li><Link to="/Registration" className={location.pathname === "/Registration" ? "active" : ""}>Register</Link></li>
        <li><Link to="/CartSection"><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "15px" }} /></Link></li>
      </ul>
    </div>
  );
}

export default Header;
