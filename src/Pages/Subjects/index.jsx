import React from "react";
import SubjectElement from "../../components/SubjectElement";
import useFetch from "../../hooks/useFetch";

export default function Subjects() {
  const { data, error, loading } = useFetch("http://localhost:5000/subjects");
  const subjects = data?.rows;
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-20">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Materias
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Estas son las materias que tenemos ofertadas para este semestre,
            esperamos que las aproveches lo máximo posible y que hagas de este
            semestre una experiencia inolvidable.
          </p>
        </header>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects?.map((subject) => (
            <SubjectElement {...subject} key={subject.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
