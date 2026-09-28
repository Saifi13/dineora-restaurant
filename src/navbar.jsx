import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="restaurant-navbar">
      <div className="navbar-container">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Restaurant logo" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="mobile-navigation">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Our Menu
          </NavLink>
          <NavLink to="/story" onClick={() => setMenuOpen(false)}>
            Our Story
          </NavLink>
          <Link to="/contact">Contact</Link>
          <a className="reservation-btn" href="/contact">
            Reserve Table
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
