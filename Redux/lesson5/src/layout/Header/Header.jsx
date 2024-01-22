import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalThemeContext } from "../../Context/ThemeContext";
import { useCart } from "react-use-cart";
import Auth from "../../components/AuthBtn";

const Header = () => {
  const { toggleTheme } = useContext(GlobalThemeContext);
  const { items, totalItems } = useCart();
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
                {/* NavLink, Link */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  blogs
                </NavLink>
              </li>
              <span style={{ color: "white" }}>{totalItems}</span>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
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
                <Auth />
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
