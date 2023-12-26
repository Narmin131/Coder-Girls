import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalThemeContext } from "../../Context/ThemeContext";
import { useCart } from "react-use-cart";
import i18n from "../../i18n/i18next";
import { useTranslation } from "react-i18next";
import { Select, Space } from "antd";

const Header = () => {
  const { toggleTheme } = useContext(GlobalThemeContext);
  const { items, totalItems } = useCart();

  const changeMyLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <Select
            defaultValue={i18n.language}
            style={{
              width: 120,
            }}
            onChange={changeMyLanguage}
            options={[
              {
                value: "fr",
                label: "Fr",
              },
              {
                value: "en",
                label: "En",
              },
            ]}
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  {t("header.0")}
                </NavLink>
                {/* NavLink, Link */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("header.1")}
                </NavLink>
              </li>
              <span style={{ color: "white" }}>{totalItems}</span>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wishlist">
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <button
                  className="btn btn-primary"
                  onClick={() => changeMyLanguage("fr")}
                >
                  fr
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => changeMyLanguage("en")}
                >
                  en
                </button>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={toggleTheme}
              >
                chnaneg mode
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
