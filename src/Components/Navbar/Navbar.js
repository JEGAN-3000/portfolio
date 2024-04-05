import { useState } from "react";
import "./Navbar.css";

import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { Link } from "react-scroll";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="navbar">
        <div className="navbar_content">
          <h1 className="logo">My Portfolio</h1>
          <ul>
            <li>
              <Link to="/" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="#about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="#projects">
                PROJECTS
              </Link>
            </li>
            {/* <li>
              <Link to="resume" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="#resume">
                RESUME
              </Link>
            </li> */}
            <li>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="#contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <button className="menuBtn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
