import React from "react";
import { Link } from "react-router-dom";

export default function SideMenuElement({ children, text, selected, link }) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 ${
        selected && "bg-gray-100"
      }`}
      to={link}
    >
      {children}
      <span className="text-sm font-medium"> {text} </span>
    </Link>
  );
}
