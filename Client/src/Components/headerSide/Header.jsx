import { useState } from "react";
import Container from "react-bootstrap/Container";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function Header() {
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

        <Navbar handleDrawer={{menuOpen,setMenuOpen}} />

        <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Container>
    </header>
  );
}

export default Header;
