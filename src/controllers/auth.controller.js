import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, password } = req.body;
    const existingUser = await User.findOne({ emailAddress });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      firstName,
      lastName,
      emailAddress,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "Account successfully created. Proceed to login." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const loginController = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const user = await User.findOne({ emailAddress });
    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({ message: "Incorrect password" });

    user.password = undefined;

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );
    return res
      .status(200)
      .json({ message: "Successfully logged in.", user, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
