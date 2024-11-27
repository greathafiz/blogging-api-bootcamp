import express from "express";
import { postSchema } from "../validations/post.validation.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getpost,
  publishPost,
} from "../controllers/post.controller.js";
import validationMiddleware from "../middlewares/validate.middleware.js";

const postRoute = express.Router();
const validate = [authenticate, validationMiddleware(postSchema)];
postRoute
  .post("/", validate, createPost)
  .put("/:id", validate, updatePost)
  .patch("/:id/publish", authenticate, publishPost)
  .delete("/:id", authenticate, deletePost)
  .get("/all", getAllPosts)
  .get("/:id", getpost);

export default postRoute;
