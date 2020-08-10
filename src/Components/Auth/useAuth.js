import { useContext } from "react";
import { UserContext } from "./UserProvider";

export const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
