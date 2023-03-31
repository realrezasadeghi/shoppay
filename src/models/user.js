import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please enter your full name",
    },
    email: {
      trim: true,
      unique: true,
      type: String,
      required: "Please enter your email address",
    },
    password: {
      type: String,
      required: "Please enter a password",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default: "",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
