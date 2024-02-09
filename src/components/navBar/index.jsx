import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <Link to={"/"} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
      </div>

      <ul className={`navbar__container__menu ${toggleIcon ? "active" : " "} `}>
        {data.map((item) => (
          <li className="navbar__container__menu__item">
            <Link className="navbar__container__menu__item__links" to={item.to}>
              {item.label}
            </Link>
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