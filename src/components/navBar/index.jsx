import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars, FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to={"/"} className="navbar__container__logo"> {/* Use NavLink */}
          <FaReact size={30} />
        </NavLink>
      </div>

      <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}> {/* Remove " " from className */}
        {data.map((item, index) => (
          <li key={index} className="navbar__container__menu__item">
            <NavLink
              exact
              to={item.to}
              className="navbar__container__menu__item__links"
              activeClassName="active-link" // Add activeClassName for active style
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
