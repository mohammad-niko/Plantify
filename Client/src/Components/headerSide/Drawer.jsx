import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Drawer({ menuOpen, setMenuOpen }) {
  const [mmad, setMmad] = useState();
  return (
    <>
      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>`drawer-tabs ${ (isActive ? "active-navbar" : "")}`}
        >
          Home
        </NavLink>
        <NavLink className="drawer-tabs">About Us</NavLink>
        <NavLink className="drawer-tabs">Connect Us</NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>`drawer-tabs ${ (isActive ? "active-navbar" : "")}`}
        >
          ${100.0}
          <i className="bi bi-cart3"></i>
          {mmad > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.7rem" }}
            >
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </>
  );
}
