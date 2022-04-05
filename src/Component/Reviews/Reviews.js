import React from "react";
import UseReview from "../../Utilites/Hooks/UseReviews";
import Review from "../Review/Review";
import image from "../../Utilites/Image/Bag01.jpg";
const Reviews = () => {
  const [reviews] = UseReview();
  return (
    <div className="grid grid-cols-1 w-3/4 mx-auto">
      <h1 className="text-4xl text-center">What Our Customer Says....</h1>
      {reviews.map((review) => (
        <Review key={review.id} review={review} image={image}></Review>
      ))}
    </div>
  );
};

export default Reviews;
