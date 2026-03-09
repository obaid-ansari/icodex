import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthHook } from "../hooks/useAuthHook";

const Logout = () => {
  const { logoutUser } = useAuthHook();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Navigate to="/login" />;
};

export default Logout;
