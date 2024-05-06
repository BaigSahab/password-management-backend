import mongoose from "mongoose";

const passwordsSchema = mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    passwordUser: {
      type: String,
    },
    passwordSource: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  },
);

const Passwords = mongoose.model("passwords", passwordsSchema);

export default Passwords;
