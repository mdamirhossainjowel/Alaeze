import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../Utilites/Image/logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-20">
      <div>
        <img className="w-28 rounded-full" src={image} alt="" />
      </div>
      <nav>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold mr-4 text-xl"
              : "text-black mr-4 text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold mr-4 text-xl"
              : "text-black mr-4 text-xl"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold mr-4 text-xl"
              : "text-black mr-4 text-xl"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold mr-4 text-xl"
              : "text-black mr-4 text-xl"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold mr-4 text-xl"
              : "text-black mr-4 text-xl"
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
