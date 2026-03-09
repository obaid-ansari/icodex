import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const useAuthHook = () => {
  return useContext(AuthContext);
};
