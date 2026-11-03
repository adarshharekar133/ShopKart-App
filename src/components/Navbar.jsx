
import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ userName, cart = [] }) {

  // Calculate total cart quantity
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <i className="bi bi-bag-heart-fill logo-icon"></i>
            <span className="logo-text">ShopKart</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
            aria-controls="shopKartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Content */}
          <div
            className="collapse navbar-collapse"
            id="shopKartNavbar"
          >

            {/* Navigation Links */}
            <ul className="navbar-nav main-nav">

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                >
                  Deals
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

            </ul>

            {/* Search Box */}
            <form
              className="search-box"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for products..."
                aria-label="Search products"
              />

              <button
                type="submit"
                className="search-btn"
                aria-label="Search"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* Right Side Actions */}
            <div className="nav-actions">

              {/* Account Dropdown */}
              <div className="dropdown account-dropdown">

                <button
                  className="account-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="My Account"
                >
                  <i className="bi bi-person-circle profile-icon"></i>

                  {userName && (
                    <span className="account-name">
                      {userName}
                    </span>
                  )}
                </button>

                <ul className="dropdown-menu dropdown-menu-end account-menu">

                  {userName ? (
                    <>
                      <li>
                        <span className="dropdown-item-text">
                          Hello, {userName}!
                        </span>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/login"
                        >
                          <i className="bi bi-box-arrow-in-right"></i>
                          Login
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="/register"
                        >
                          <i className="bi bi-person-plus"></i>
                          Register
                        </Link>
                      </li>
                    </>
                  )}

                </ul>
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="cart-wrapper"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <i className="bi bi-cart3 nav-icon"></i>

                <span className="cart-count">
                  {cartCount}
                </span>
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
