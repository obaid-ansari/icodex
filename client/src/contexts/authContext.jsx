import { createContext, useEffect, useState } from "react";
import { userInfo } from "../services/formServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenKey = "token";

  const [token, setToken] = useState(localStorage.getItem(tokenKey));
  const [user, setUser] = useState();

  const isloggedIn = !!token;

  const storeToken = (jwtToken) => {
    setToken(jwtToken);
    return localStorage.setItem(tokenKey, jwtToken);
  };

  const logoutUser = () => {
    setToken("");

    return localStorage.removeItem(tokenKey);
  };

  const getUserInfo = async () => {
    try {
      const res = await userInfo();

      if (res.status === 200) {
        setUser(res.data.userData);
      }
    } catch (error) {
      console.log(
        "Error while getting User info:",
        error.response?.data?.message || error.message,
      );
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeToken, logoutUser, isloggedIn, tokenKey, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
