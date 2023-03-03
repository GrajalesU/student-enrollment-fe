import { useContext } from "react";
import { AuthContext } from "../Context/student";

export default function useAuth() {
  return useContext(AuthContext);
}