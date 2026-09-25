import { useState } from "react";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="restaurant-navbar">
      <div className="navbar-container">
       <a className="brand" href="/">
  <img src="/logo.png" alt="Restaurant logo" />
</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Our Menu</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#reservations" className="reservation-btn">
            Reserve a Table <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;