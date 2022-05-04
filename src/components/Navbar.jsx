import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const navigationOptions = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experiences",
    link: "#experiences",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const onScroll = (e) => {
      setAtTop(!e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar__container ${atTop ? "" : "floating"}`}>
        <div className="navbar__logo">
          {/* <Link
            to="#home"
            className="navbar__logo-link"
            onClick={closeMobileMenu}
          >
            ZACH LONG
          </Link> */}
          <a href="#home" className="navbar__logo-link">
            ZACH LONG
          </a>
        </div>
        <div className="navbar__menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-xmark" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav__menu active" : "nav__menu"}>
          {navigationOptions.map(({ name, link }, id) => {
            return (
              <li className="nav__item" key={id}>
                {/* <Link to={link} className="nav__link" onClick={closeMobileMenu}>
                  {name}
                </Link> */}
                {
                  <a
                    href={link}
                    className="nav__link"
                    onClick={closeMobileMenu}
                  >
                    {name}
                  </a>
                }
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
