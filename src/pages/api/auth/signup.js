import nc from "next-connect";
import User from "@/models/user";
import { connectDb } from "@/utils/db";
import { generateToken } from "@/utils/jwtToken";
import { cryptedPassword } from "@/utils/password";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await connectDb();
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "This email already exists" });
    const newUser = await User.create({
      name,
      email,
      password: cryptedPassword(password),
    });
    const token = generateToken({ id: newUser._id });
    res
      .status(200)
      .json({ message: "User successful added", result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

export default handler;
