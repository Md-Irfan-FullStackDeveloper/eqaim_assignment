import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { TfiHome } from "react-icons/tfi";
import { useNavigate } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { addBlogpost } from "../redux/action";

const NewBlogpost = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  // config for the text editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handlePost = () => {
    if (!title || !value) {
      return alert("Please enter post content");
    }

    const data = {
      title,
      content: value,
    };
    dispatch(addBlogpost(data));
    return alert("Successfully added the post")
  };

  return (
    <div className="newBlog">
      <div className="left-side">
        <div className="icon-bg">
          <TfiHome
            cursor="pointer"
            onClick={() => navigate("/", { replace: true })}
            size="2rem"
          />
        </div>
        <div className="icon-bg">
          <BsClipboardCheck cursor="pointer" onClick={handlePost} size="2rem" />
        </div>
      </div>
      <div className="right-side">
        <input
          placeholder="Enter Title...."
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          modules={modules}
          value={value}
          onChange={(e) => setValue(e)}
        />
      </div>
    </div>
  );
};

export default NewBlogpost;
