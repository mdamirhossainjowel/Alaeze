import React from "react";
import image from "../../Utilites/Image/logo.jpg";
const About = () => {
  return (
    <section className="grid grid-cols-1 gap-4 justify-items-center items-center text-center mb-10">
      <img src={image} alt="" />
      <h1 className="text-8xl">
        <span className="text-orange-500">ALAEZE</span>
      </h1>
      <button className="bg-orange-200 p-3 rounded mt-2">
        Connect With Us.
      </button>
    </section>
  );
};

export default About;
