import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthHook } from "../hooks/useAuthHook";

const Header = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#0d6efd" : "white",
  });

  const { isloggedIn } = useAuthHook();

  return (
    <header>
      <nav
        className=" navbar navbar-expand-lg shadow-sm bg-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3 text-primary" to="/">
            iCodex
          </NavLink>

          <button
            className="navbar-toggler border border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-3 ms-auto fw-semibold fs-5">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={navLinkStyle}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link" style={navLinkStyle}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  style={navLinkStyle}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={navLinkStyle}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link"
                  style={navLinkStyle}
                >
                  Register
                </NavLink>
              </li>

              {isloggedIn ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      to="/logout"
                      className="nav-link"
                      style={navLinkStyle}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={navLinkStyle}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
