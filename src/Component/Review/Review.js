import React from "react";

const Review = (props) => {
  const { user, img, review, rating } = props.review;
  return (
    <div className=" border-2 mt-10 mb-10 p-5">
      <div className="flex items-center ">
        <img className="w-20 rounded-full mr-4" src={img} alt="" />
        <h1>{user}</h1>
      </div>
      <div className="grid grid-cols-1 sm:flex items-center ">
        <div>
          <p>Rating: {rating}stars</p>
          <h2>{review.slice(0, 400)}...</h2>
        </div>
        <div>{props.image ? <img src={props.image} alt="" /> : ""}</div>
      </div>
    </div>
  );
};

export default Review;
