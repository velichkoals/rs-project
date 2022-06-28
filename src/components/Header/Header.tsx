import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <Link data-testid="home-link" to="/" className="header__item">
          Home
        </Link>
        <Link data-testid="about-link" to="/about" className="header__item">
          About Us
        </Link>
        <Link
          data-testid="profile-link"
          to="/profile"
          className="header__item header__item__profile"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};
export default Header;
