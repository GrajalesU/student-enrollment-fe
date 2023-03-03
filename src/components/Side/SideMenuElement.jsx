import React from "react";

export default function SideMenuElement({ children, text, selected }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 ${
        selected && "bg-gray-100"
      }`}
    >
      {children}
      <span className="text-sm font-medium"> {text} </span>
    </a>
  );
}
