import React from "react";
import { Link } from "react-router-dom";

export default function TableElement({ id, name, loading }) {
  return (
    <tr className="h-[50px]">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {id}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{name}</td>
      <td className="whitespace-nowrap px-4 py-2 flex justify-end w-full">
        {!loading && (
          <Link
            to={`/students/${id}`}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs  font-medium text-white hover:bg-indigo-700"
          >
            Ver
          </Link>
        )}
      </td>
    </tr>
  );
}
