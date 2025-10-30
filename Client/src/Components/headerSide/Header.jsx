import { useState } from "react";
import Container from "react-bootstrap/Container";
import Drawer from "./Drawer";

function Header() {
  const [mmad, setMmad] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <Container className="header-container">
        <h1 className="logo">
          <img
            style={{ width: "60px", height: "40px" }}
            src="https://aps-plants-website.netlify.app/assets/APSDark-BHi096m8.png"
            alt="Logo"
          />
          Plantify
        </h1>

        <div className="tabs">
          <div className="hover-tabs">Home</div>
          <div className="hover-tabs">About Us</div>
          <div className="hover-tabs">Conenct Us</div>
          <div className="tab-cart-icon hover-tabs">
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
          </div>

          <button className="menu-list" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
        </div>

        <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Container>
    </header>
  );
}

export default Header;
