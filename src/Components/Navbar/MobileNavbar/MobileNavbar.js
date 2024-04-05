import { Link } from "react-scroll";
import "./MobileNavbar.css";
const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile_menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile_menu_container">
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
            <li>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="menuItem" href="#contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
