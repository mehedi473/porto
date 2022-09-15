import React from "react";
import { NavLink } from "react-router-dom";
const Button = ({ name, link }) => {
  return (
    <button
      type="button"
      className="px-8 py-3 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-rubik font-semibold text-[15px] transition duration-500 ease-linear hover:bg-gradient-to-tr  hover:from-indigo-500 hover:to-sky-500">
      <NavLink to={link} className="">
        {name}
      </NavLink>
    </button>
  );
};

export default Button;
