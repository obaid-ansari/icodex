import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import RegistrationImage from "../assets/registration.svg";
import { registerUser } from "../services/formServices";
import { useAuthHook } from "../hooks/useAuthHook";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { storeToken } = useAuthHook();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleUserRegister = async (data) => {
    try {
      const res = await registerUser(data);
      if (res.status === 201) {
        console.log(res);
        toast.success(res.data.message);
        storeToken(res.data.token);
        navigate("/");
      }
    } catch (error) {
      // console.log(
      //   "Error while User Registration:",
      //   error.response.data.errors
      //     ? error.response.data.errors
      //     : error.response.data.message,
      // );
      toast.error(
        error.response.data.errors
          ? error.response.data.errors
          : error.response.data.message,
      );
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    handleUserRegister(user);

    console.log("User Details: ", user);

    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container-fluid p-3 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row bg-dark text-light rounded-4 overflow-hidden justify-content-center"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* LEFT IMAGE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-4">
          <img
            src={RegistrationImage}
            alt="register"
            className="img-fluid"
            style={{
              maxHeight: "350px",
              filter: "drop-shadow(3px 3px 1px blue)",
            }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4">
          <h3 className="text-primary text-center mb-4 fw-bold">
            Create Account
          </h3>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                name="username"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter username"
                required
                value={user.username}
                onChange={handleUserOnChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter email"
                required
                value={user.email}
                onChange={handleUserOnChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter phone number"
                required
                value={user.phone}
                onChange={handleUserOnChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter password"
                required
                value={user.password}
                onChange={handleUserOnChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold py-2 mb-3 rounded-3"
            >
              Register
            </button>

            <p className="text-center text-light mb-0">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-primary fw-semibold text-decoration-none"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
