import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: 15,
      required: true,
    },
    lastName: {
      type: String,
      maxLength: 15,
      required: true,
    },
    emailAddress: {
      type: String,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address format",
      },
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
