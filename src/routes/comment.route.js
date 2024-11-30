import express from "express";
import validationMiddleware from "../middlewares/validate.middleware.js";
import {
  createComment,
  deleteComment,
  getAllComments,
  getSingleComment,
} from "../controllers/comment.controller.js";
import { commentSchema } from "../validations/comment.validation.js";

const commentRouter = express.Router();

commentRouter.post("/", validationMiddleware(commentSchema), createComment);
commentRouter.get("/", getAllComments);
commentRouter.get("/:id", getSingleComment);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;
