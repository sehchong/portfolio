import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { GoDownload } from "react-icons/go";
import resumePDF from '../assets/files/resume.pdf';

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="heroSection"
        className="navbar--content"
        >
            <img src={logo} alt="Logo" />
        </Link>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              to="myEducations"
              className="navbar--content"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              to="certification"
              className="navbar--content"
            >
              Certifications
            </Link>
          </li>
          <a href={resumePDF} download="KongSehChong_Resume" target='_blank'>
            <button className="btn btn-outline-primary btn-primary">
              <GoDownload className="download-icons"/>
              Download
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;