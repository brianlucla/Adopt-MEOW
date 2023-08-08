import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import "../index.css";

const Navbar = () => {
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    {
      label: "Adoption",
      children: [
        { label: "Cats", path: "/cats" },
        { label: "Dogs", path: "/dogs" },
        { label: "Rabbits", path: "/rabbits" },
      ],
    },
    { label: "Contact Us", path: "/contact"},
    { label: "Favorites", path: "/favorites"},
  ];

  return (
    <nav className="navbar p-5 flex space-x-4 items-center justify-between">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="h-4 w-auto mr-4" />
        <Link to="/" className="navbar-title">
          AdoptMeow
        </Link>
      </div>
      <div className="navbar-menu hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
          {menuOptions.map((option, index) => (
            <li key={index} className="navbar-menu-item">
              {option.children ? (
                <HoverableMenuOption
                  label={option.label}
                  children={option.children}
                />
              ) : (
                <Link to={option.path} className="navbar-menu-link text-white">
                  {option.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link to="/login" className="navbar-login text-white font-bold">
          Login/Signup
        </Link>
      </div>
    </nav>
  );
};

const HoverableMenuOption = ({ label, children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="hoverable-menu-option" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to="#" className="text-white">
        {label}
      </Link>
      {isHovering && (
        <div className="hoverable-menu-content absolute z-10 bg-blue-800 mt-2 p-2 space-y-2">
          {children.map((child, index) => (
            <Link key={index} to={child.path} className="label text-white">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
