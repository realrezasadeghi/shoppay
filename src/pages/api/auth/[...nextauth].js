import NextAuth from "next-auth";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectDb, disconnectDb } from "@/utils/db";
import { encryptedPassword } from "@/utils/password";

connectDb();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (user) return signInUser({ password, user });

        throw new Error("This Email is not exist");
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const user = await User.findById(token.sub);
      session.id = user._id;
      session.role = user.role || "user";
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});
disconnectDb();

const signInUser = ({ password, user }) => {
  const checkPassword = encryptedPassword(password, user.password);

  if (!checkPassword) throw new Error("Email or password is wrong");

  return user;
};
