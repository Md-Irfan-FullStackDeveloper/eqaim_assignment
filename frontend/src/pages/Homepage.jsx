import React, { useEffect } from "react";
import Card from "../components/Card";
import { BsClipboardPlus } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs } = useSelector((store) => store);

  const handleClick = () => {
    navigate("/newBlogpost", { replace: true });
  };

  useEffect(() => {
    dispatch(getData());
  }, []);
  //   console.log(blogs);
  return (
    <>
      <div className="homepage">
        {blogs?.map((el) => (
          <Card key={el._id} {...el} />
        ))}
      </div>
      <div className="icon-div">
        <div className="icon-bg">
          <BsClipboardPlus
            onClick={handleClick}
            cursor="pointer"
            color="#000001"
            size="2rem"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
