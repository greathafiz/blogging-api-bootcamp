import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const newPost = await Post.create({
      title,
      content,
      author: userId,
      status: "draft",
    });
    return res.status(201).json({ message: "New post created", newPost });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    //extract the post id from request parameter
    const postId = req.params.id;
    const user = req.user;
    const post = await Post.findOne({ _id: postId, author: user.id });
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    newPost = await Post.findOneAndUpdate(postId, req.body, { new: true });
    return res.status(201).json({ message: "Post update", newPost });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deletePost = async (req, res) => {
  try {
    //extract the post id from request parameter
    const postId = req.params.id;
    const user = req.user;
    const post = await Post.findOne({ _id: postId, author: user.id });
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    newPost = await Post.findOneAndUDelete(postId);
    return res.status(201).json({ message: "Post deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      return res.status(404).json({ message: "No post found" });
    }
    return res.status(200).json({ message: "Posts retrieved", posts });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getpost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    return res.status(200).json({ message: "post retrieved", post });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const publishPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.id;
    const post = await Post.findOne({ _id: postId, author: userId });
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    const newPost = await Post.findOneAndUpdate(
      postId,
      { status: "published" },
      { new: true }
    );
    return res.status(201).json({ message: "post published", newPost });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
