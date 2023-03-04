import React from "react";
import useFetch from "../../hooks/useFetch";
import TableElement from "./TableElement";

export default function Students() {
  const {
    data: students,
    error,
    loading,
  } = useFetch(`${import.meta.env.VITE_API}/students`);

  return (
    <section className="min-h-screen flex flex-col w-full  items-center mx-auto">
      <header className="mb-20 px-4 py-8 self-start">
        <h2 className="text-xl w-full font-bold text-gray-900 sm:text-3xl">
          Estudiantes
        </h2>

        <p className="mt-4 max-w-md text-gray-500">
          Aquí podrás ver la lista de los estudiantes activos de este semestre.
        </p>
      </header>
      <div className="overflow-x-auto mx-auto w-[95%]">
        <table className=" divide-y-2 min-w-[300px] w-full  divide-gray-200 text-sm">
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
            <ContentHandler loading={loading} data={students} />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ContentHandler({ loading, data }) {
  if (loading) return <LoadingElement />;
  else
    return (
      <>
        {loading && <LoadingElement />}
        {data?.map(({ id, name }) => (
          <TableElement key={id} id={id} name={name} />
        ))}
      </>
    );
}

function LoadingElement() {
  return (
    <>
      <TableElement loading />
      <TableElement loading />
      <TableElement loading />
    </>
  );
}
