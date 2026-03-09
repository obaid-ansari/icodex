import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorImage from "../assets/404.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-light p-5">
      <div className="text-center">
        {/* IMAGE */}
        <img
          src={ErrorImage}
          alt="404 error"
          className="img-fluid mb-4"
          style={{
            maxHeight: "300px",
            filter: "drop-shadow(0px 0px 100px blue)",
          }}
        />

        {/* TEXT */}
        <h1 className="fw-bold text-dark">404</h1>

        <p className="text-muted mb-4">
          Sorry, the page you are looking for could not be found.
        </p>

        {/* BUTTONS */}
        <div>
          <NavLink to="/" className="btn btn-primary me-3 px-4">
            Home
          </NavLink>

          <button
            className="btn btn-outline-dark px-4"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
