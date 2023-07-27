import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header__logo-box" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="header__logo" />
          <div className="header__logo--text">Coin Wise</div>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list--item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav__list--item">
              <Link to={"/market"}>Market</Link>
            </li>
            <li className="nav__list--item">
              <Link to={"/"}>Join</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
