import React from "react";
import "./Link.css";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li className="duration-500 font-bold text-white px-4 hover:text-black hover:bg-indigo-300">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
