const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { getAllBlogs, addBlogpost } = require("./controllers/blogController");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Api home page");
});

app.get('/blogs', getAllBlogs)
app.post('/addBlog', addBlogpost)

mongoose
  .connect("mongodb://127.0.0.1:27017/Blogs")
  .then(() => app.listen(port))
  .then(() => console.log("Server is running"))
  .catch((err) => console.log(err));
