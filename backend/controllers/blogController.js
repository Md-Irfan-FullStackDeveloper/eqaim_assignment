const { Blog } = require("../models/Blog.model");

const getAllBlogs = async (req, res) => {
  let blogs;

  try {
    blogs = await Blog.find().sort({ createdAt: -1 });
  } catch (error) {
    return res.status(500).json(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "Blog posts not found" });
  }

  return res.status(200).json(blogs);
};

const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  let blog;

  try {
    blog = await Blog.findById(blogId);
  } catch (error) {
    return res.status(500).json(error);
  }

  if (!blog) {
    return res.status(404).json({ message: "Blog post not found" });
  }

  return res.status(200).json(blog);
};

const addBlogpost = async (req, res) => {
  const { title, content, images } = req.body;

  const newBlog = new Blog({
    title,
    content,
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
  getBlogById,
  addBlogpost,
};
