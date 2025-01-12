import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "animate.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title animate__animated animate__fadeInDown">
        {/* Arts by Raonak */}
        <h1
          style={{
            fontFamily: "Lucida Handwriting, cursive",
          }}
        >
          Arts by Raonak
        </h1>
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
            <h5>UPCOMING EVENTS</h5>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="animate__animated animate__fadeInDown"
          >
            <h5>CONTACT</h5>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
