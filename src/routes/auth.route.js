import express from "express";
import validationMiddleware from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validations/user.validation.js";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
const authRouter = express.Router();

authRouter.post(
  "/register",
  validationMiddleware(registerSchema),
  registerController
);

authRouter.post("/login", validationMiddleware(loginSchema), loginController);

export default authRouter;
