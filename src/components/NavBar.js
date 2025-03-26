import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 2) {
        setScroll(true);
        setNavbarStyle({
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        });
      } else {
        setNavbarStyle({});
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav style={navbarStyle} className={`navbar ${scroll ? "scrolled" : ""}`}>
        <div className="tophead">
          <h1>
            <Link
              className="name-logo"
              spy
              smooth
              offset={50}
              duration={500}
              to="home"
            >
              sahrul rafi
            </Link>
            <span className="blink" />
          </h1>
          <div
            className={`menu-btn ${open ? "opened-btn" : ""}`}
            onClick={toggleMenu}
          />
        </div>
        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="home"
            >
              <i className="fa-solid fa-house"></i>
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="about"
            >
              <i className="fa-solid fa-user"></i>
              <span>about</span>
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="projects"
            >
              <i className="fa-solid fa-folder"></i>
              <span>projects</span>
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="contact"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`scroll-to-top ${scroll ? "scroll-true" : ""}`}>
        <Link spy smooth offset={50} duration={1000} to="home">
          <i className="fa-solid fa-arrow-up" />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
