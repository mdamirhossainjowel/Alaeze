import React from "react";
import { NavLink } from "react-router-dom";
import UseReview from "../../Utilites/Hooks/UseReviews";
import image from "../../Utilites/Image/Bag01.jpg";
import Review from "../Review/Review";
const Home = () => {
  const [reviews] = UseReview();
  const newReview = reviews.slice(0, 3);
  return (
    <section className="container ">
      <section className="grid grid-cols-2 gap-4 justify-items-center items-center text-center">
        <div>
          <h1 className="text-8xl">
            WelCome To <span className="text-orange-500">ALAEZE</span>
          </h1>
          <p className="mt-4">
            We mainly dealing with imported products.Delivering the product to
            you is our first priority and we give you 100% guarantee on
            quality.We hope you enjoy our products. Contact our page for more
            details.
          </p>
          <button className="bg-orange-200 p-3 rounded mt-2">Live Demo</button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </section>
      <section className="mb-7">
        <h1 className="text-4xl text-center">Customer Reviews(3)</h1>
        <div className="grid grid-cols-3 gap-4 ml-12">
          {newReview.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="text-center">
          <NavLink
            className="mr-4 text-white text-xl bg-sky-500 p-3 rounded-full "
            to="/reviews"
          >
            See All Reviews
          </NavLink>
        </div>
      </section>
    </section>
  );
};

export default Home;
