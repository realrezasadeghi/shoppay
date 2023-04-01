import bcrypt from "bcrypt";

export const cryptedPassword = (password) => bcrypt.hashSync(password, 12);

export const encryptedPassword = (password, payload) =>
  bcrypt.compareSync(password, payload);
