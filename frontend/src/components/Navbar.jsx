import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import "animate.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title animate__animated animate__fadeInDown">
        <h1>Arts by Raonak</h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            className="animate__animated animate__fadeInDown"
          >
            <Button text="HOME" effectType="effect1" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className="animate__animated animate__fadeInDown"
          >
            <Button text="GALLERY" effectType="effect1" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className="animate__animated animate__fadeInDown"
          >
            <Button text="EVENTS" effectType="effect1" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="animate__animated animate__fadeInDown"
          >
            <Button text="CONTACT" effectType="effect1" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
