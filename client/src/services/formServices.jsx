import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Signup API
export const registerUser = (data) => {
  return api.post("/api/register", data);
};

// Login API
export const userLogin = (user) => {
  return api.post("/api/login", user);
};

// User Authorization
export const userInfo = () => {
  return api.get("/api/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// Contact API
export const contactData = (data) => {
  return api.post("/api/contact", data);
};

// Services API

export const getServices = () => {
  return api.get("/api/services");
};
