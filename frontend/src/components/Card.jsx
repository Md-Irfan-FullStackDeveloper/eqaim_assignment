import React from "react";
import { useNavigate } from "react-router";

const Card = ({ title, content, images, _id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${_id}`, { replace: true });
  };
  return (
    <div onClick={handleClick} className="card">
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
