import client from "../client.js";
import { useMutation } from "react-query";

export const useSignup = () => {
  return useMutation((data) => client.post("/api/auth/signup", data));
};
