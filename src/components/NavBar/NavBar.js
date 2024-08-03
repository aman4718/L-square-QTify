import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Logo />
      </div>
      <Search />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
