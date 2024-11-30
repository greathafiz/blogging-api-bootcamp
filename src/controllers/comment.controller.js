import Comment from "../models/comment.model.js";

export const createComment = (req, res) => {
  res.send("create comment");
};

export const getAllComments = (req, res) => {
  res.send("get all comments");
};

export const getSingleComment = (req, res) => {
  res.send("get single comments");
};

export const deleteComment = (req, res) => {
  res.send("delete comment");
};
