import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "animate.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title animate__animated animate__fadeInDown">
        Arts by Raonak
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/events"
            className="animate__animated animate__fadeInDown"
          >
            Upcoming Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="animate__animated animate__fadeInDown"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
