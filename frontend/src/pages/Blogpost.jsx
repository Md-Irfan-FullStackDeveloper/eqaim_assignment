import React, { useEffect } from "react";
import { TfiHome } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getPostByID } from "../redux/action";

const Blogpost = () => {
  const { blogId } = useParams();
  const { singleBlogpost } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostByID(blogId));
  }, []);

//   console.log(singleBlogpost);
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
      </div>

      <div className="right-side white">
        <h1>{singleBlogpost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: singleBlogpost.content }} />
      </div>
    </div>
  );
};

export default Blogpost;
