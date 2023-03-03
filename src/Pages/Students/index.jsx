import React from "react";
import useFetch from "../../hooks/useFetch";
import TableElement from "./TableElement";

export default function Students() {
  const {
    data: students,
    error,
    loading,
  } = useFetch("http://localhost:5000/students");

  return (
    <section className="min-h-screen flex items-center mx-auto">
      <div className="overflow-x-auto mx-auto">
        <table className=" divide-y-2 min-w-[800px]  divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Nombre
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading && <LoadingElement loading />}
            {students?.map(({ id, name }) => (
              <TableElement key={id} id={id} name={name} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LoadingElement() {
  return (
    <>
      <TableElement />
      <TableElement />
      <TableElement />
    </>
  );
}
