import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LoginImage from "../assets/login.svg";
import { userLogin } from "../services/formServices";
import { useAuthHook } from "../hooks/useAuthHook";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { storeToken } = useAuthHook();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (data) => {
    try {
      const res = await userLogin(data);
      if (res.status === 200) {
        console.log(res);
        console.log(res.data);
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

    handleUserLogin(user);

    console.log("Login Details:", user);

    setUser({
      email: "",
      password: "",
    });
  };

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container-fluid p-3 py-5 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row bg-dark text-light rounded-4 overflow-hidden justify-content-center shadow"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* LEFT IMAGE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-4">
          <img
            src={LoginImage}
            alt="login"
            className="img-fluid"
            style={{
              maxHeight: "350px",
              filter: "drop-shadow(-3px 3px 1px blue)",
            }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4">
          <h3 className="text-primary text-center mb-4 fw-bold">
            Login Account
          </h3>

          <form onSubmit={onSubmit}>
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
              Login
            </button>

            <p className="text-center text-light mb-0">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-primary fw-semibold text-decoration-none"
              >
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
