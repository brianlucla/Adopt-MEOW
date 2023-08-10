import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/LOGO-min.png";
import "../App.css";
import LoginSignup from "./LoginSignup";
import SignUp from "./SignUp";

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
    { label: "Contact Us", path: "/contact" },
    { label: "Favorites", path: "/favorites" },
    {
      label: "Donate",
      path: "https://donate.stripe.com/test_bIYaHg6vZeJqa3K144",
    },  //added donate link in the navbar
  ];

  const [showCard, setShowCard] = useState(false);
  
  const handleCardToggle = () => {
    setShowCard(!showCard);
    console.log("showCard", showCard);
  }

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
              ) : option.external ? ( //functionality to redirect user to stripe after clicking donate
                <a
                  href={option.path}
                  className="navbar-menu-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.label}
                </a>
              ) : (
                <Link to={option.path} className="navbar-menu-link text-white">
                  {option.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button className="navbar-login-button" onClick={handleCardToggle}>
          Login/Signup
        </button>
        {showCard && <LoginSignup closeCard={handleCardToggle} />}
        {/* {showCard && (
          <div className="login-signup-card absolute z-10 bg-black mt-2 p-4">
            <h2 className="text-white mb-4">Login or Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black py-2 px-4 rounded"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-white">
              Don't have an account? <link to="#">Sign Up</link>
            </p>
          </div>
        )} */}
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
