import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const linkStyle = {
  textDecoration: "none",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0 1rem",
  padding: "0.5rem 0",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  alignItems: "center",
  color: "#ffffff",
  fontFamily: "Inria Serif",
};

const logoStyle = {
  alignItems: "center",
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navRef = useRef();

  const showMenu = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <header className="navbar">
      {!isMobile ? (
        <ul
          className={` ${scrolled ? "header list scrolled" : "header list"} `}
        >
          <div className="left-links split">
            <li className="header home link">
              <Link to="/" style={linkStyle} className="link-comp">
                HOME
              </Link>
            </li>
            <li className="header contact link">
              <Link to="contact-us" style={linkStyle} className="link-comp">
                CONTACT US
              </Link>
            </li>
            <li className="header leadership link">
              <Link to="leadership" style={linkStyle} className="link-comp">
                LEADERSHIP
              </Link>
            </li>
          </div>
          <div className="logo-div">
            <li className="header logo">
              <Link to="/" style={logoStyle}>
                <img src={logo} alt="Logo" className="logo-img" />
              </Link>
            </li>
          </div>
          <div className="right-links split">
            <li className="header events link">
              <Link
                to="events-and-photos"
                style={linkStyle}
                className="link-comp"
              >
                EVENTS & PHOTOS
              </Link>
            </li>
            <li className="header help link">
              <Link to="help" style={linkStyle} className="link-comp">
                HELPFUL LINKS
              </Link>
            </li>
            <li className="header profile link">
              <DropdownMenu>
                <DropdownMenuTrigger>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={linkStyle}
                      className="link-comp"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="register">Register</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="login" >Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="profile" >My account</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator/>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="logout">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </div>
        </ul>
      ) : (
        <div className="block w-11/12">
          <ul className="header list flex">
            <div className="header list">
              <div className="logo-div">
                <li className="header logo">
                  <Link to="/" style={logoStyle}>
                    <img src={logo} alt="Logo" className="logo-img" />
                  </Link>
                </li>
              </div>
              <div className="flex align-middle">
                <li className="header menu link text-5xl align-middle">
                  <FontAwesomeIcon
                    icon={isMenuOpen ? faTimes : faBars}
                    className="text-white text-5xl align-middle icon-link"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                      showMenu();
                    }}
                  />
                </li>
              </div>
            </div>
          </ul>
          <div className="overlay" ref={navRef}>
            <li className="header home link">
              <Link
                to="/"
                style={linkStyle}
                className="link-comp"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  showMenu();
                }}
              >
                HOME
              </Link>
            </li>
            <li className="header contact link">
              <Link
                to="contact-us"
                style={linkStyle}
                className="link-comp"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  showMenu();
                }}
              >
                CONTACT US
              </Link>
            </li>
            <li className="header leadership link">
              <Link
                to="leadership"
                style={linkStyle}
                className="link-comp"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  showMenu();
                }}
              >
                LEADERSHIP
              </Link>
            </li>
            <li className="header events link">
              <Link
                to="events-and-photos"
                style={linkStyle}
                className="link-comp"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  showMenu();
                }}
              >
                EVENTS & PHOTOS
              </Link>
            </li>
            <li className="header help link">
              <Link
                to="help"
                style={linkStyle}
                className="link-comp"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  showMenu();
                }}
              >
                HELPFUL LINKS
              </Link>
            </li>
            <li className="header profile link">
              <DropdownMenu>
                <DropdownMenuTrigger>
                    <FontAwesomeIcon
                  icon={faUser}
                  style={linkStyle}
                  className="link-comp"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    showMenu();
                  }}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="register">Register</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="login" >Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="profile" >My account</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator/>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="logout">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
