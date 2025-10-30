import React from 'react'

// function Drawer() {
//   return (
//      <div
//           className={`menu-btn ${menuOpen ? "open" : "open"}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <div>Home</div>
//           <div>About Us</div>
//           <div>Conenct Us</div>
//           <div className="tab-cart-icon hover-tabs">
//             ${100.0}
//             <i className="bi bi-cart3"></i>
//             {mmad > 0 && (
//               <span
//                 className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                 style={{ fontSize: "0.7rem" }}
//               >
//                 {cartCount}
//               </span>
//             )}
//           </div>
//         </div>
//   )
// }


export default function Drawer({ menuOpen, setMenuOpen }) {
  return (
    <>
     
      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div>Home</div>
        <div>About Us</div>
        <div>Connect Us</div>
        <div className="tab-cart-icon hover-tabs">
          ${100.0}
          <i className="bi bi-cart3"></i>
        </div>
      </div>
    </>
  );
}