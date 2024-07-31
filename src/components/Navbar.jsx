import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="section">
      <NavLink to={"/"}>
        <h1>Boris.dev</h1>
      </NavLink>
      <div className="links-container">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
