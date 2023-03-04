import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SubjectElement from "../../components/SubjectElement";
import Error404 from "../../components/Error404";

export default function Student() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_API}/students/${id}`
  );
  if (error)
    return (
      <Error404
        message={"On no, no encontramos al estudiante que buscas :c"}
        link="/"
      />
    );
  if (data)
    return (
      <section className="min-h-screen">
        <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{data?.name}</h2>
          <h3 className="text-xl sm:text-2xl">
            Materias cursadas este semestre:
          </h3>
        </div>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.subjects?.map((subject) => (
            <SubjectElement
              name={subject.name}
              id={subject["student_subject"].subjectId}
              key={subject["student_subject"].subjectId}
            />
          ))}
        </ul>
      </section>
    );
}
