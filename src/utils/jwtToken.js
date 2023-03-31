import jwt from "jsonwebtoken";

export const generateToken = (data) =>
  jwt.sign(data, process.env.JWT_GENERATE_SECRET, { expiresIn: "2d" });
