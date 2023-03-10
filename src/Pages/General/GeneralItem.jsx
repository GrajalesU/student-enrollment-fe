import React from "react";
import { Link } from "react-router-dom";

export default function GeneralItem({ children, title, description, link }) {
  return (
    <Link
      className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      to={link}
    >
      <span className="inline-block rounded-lg bg-gray-50 p-3">{children}</span>

      <h2 className="mt-2 font-bold">{title}</h2>

      <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        {description}
      </p>
    </Link>
  );
}
