import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="section">
      <NavLink to={"/"}>
        <h1>Boris.dev</h1>
      </NavLink>
      <div className={`links-container ${menuOpen && "links-container-open"}  `}>
        <NavLink
          onClick={() => handleMenu()} className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => handleMenu()} className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => handleMenu()} className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <FaHamburger size={35} className="hamburger-menu" color="var(--text-color)" onClick={() => handleMenu()} />
    </header>
  );
};

export default Navbar;
