import React, { useRef } from "react";
import logo from "../assets/logo-light.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const navigate = useNavigate();
  const navRef = useRef();

  const navToggle = () => {
    const visibility = navRef.current.getAttribute("data-visible");

    if (visibility === "false") {
      navRef.current.setAttribute("data-visible", true);
    } else if (visibility === "true") {
      navRef.current.setAttribute("data-visible", false);
    }
  };
  const closeNav = () => {
    navRef.current.setAttribute("data-visible", false);
  };

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo-box" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="header__logo" />

            <div className="header__logo--text">Coin Wise</div>
          </div>

          <button
            aria-controls="primary-nav"
            aria-expanded="false"
            className="nav__toggle"
            onClick={navToggle}
          >
            <GiHamburgerMenu />
          </button>

          <nav
            ref={navRef}
            id="primary-nav"
            className="nav"
            data-visible="false"
            onClick={closeNav}
          >
            <ul className="nav__list">
              <li className="nav__list--item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav__list--item">
                <Link to={"/market"}>Market</Link>
              </li>
              <li className="nav__list--item">
                <Link>Join</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
