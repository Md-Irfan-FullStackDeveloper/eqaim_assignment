const { model, models } = require("mongoose");
const { Blog } = require("../models/Blog.model");

const getAllBlogs = async (req, res) => {
  let blogs;

  try {
    blogs = await Blog.find();
  } catch (error) {
    return res.status(500).json(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "Blog posts not found" });
  }

  return res.status(200).json(blogs);
};

const addBlogpost = async (req, res) => {
  const { title, body, images } = req.body;

  const newBlog = new Blog({
    title,
    body,
    images,
  });

  try {
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
    getAllBlogs,
    addBlogpost
} 
