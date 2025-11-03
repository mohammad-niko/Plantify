import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Navbar({ handleDrawer }) {
  const { menuOpen, setMenuOpen } = handleDrawer;
  const totalPrice = useSelector((store) => store.Product.totalPriceOfCartList);
const cartCount = useSelector((store) =>
  store.Product.cartLists.reduce((total, item) => total + item.quantity, 0)
);

  return (
    <nav className="tabs">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover-tabs ${isActive ? "active-navbar" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink className="hover-tabs">About Us</NavLink>
      <NavLink className="hover-tabs">Conenct Us</NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `tab-cart-icon hover-tabs ${isActive ? "active-navbar" : ""}`
        }
      >
        ${totalPrice+".00" || "00.0"}
        <i className="bi bi-cart3"></i>
        {cartCount > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.7rem" }}
          >
            {cartCount}
          </span>
        )}
      </NavLink>

      <button className="menu-list" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
