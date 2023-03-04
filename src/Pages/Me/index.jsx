import React, { useState } from "react";
import SubjectElement from "../../components/SubjectElement";
import useAuth from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data } = useFetch(`${import.meta.env.VITE_API}/students/${user}`);
  const { data: data2 } = useFetch(`${import.meta.env.VITE_API}/subjects`);
  const subjects = data2?.rows;
  const selectedSubjects = data?.subjects.map(
    (subject) => subject["student_subject"].subjectId
  );

  const handleEnrollment = () => {
    const prevSubjects = data?.subjects.map(
      (subject) => subject["student_subject"].subjectId
    );
    const filteredSubjects = selectedSubjects.filter((elemento) => {
      return !prevSubjects.includes(elemento);
    });

    fetch("${import.meta.env.VITE_API}/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: user, subjects: filteredSubjects }),
    })
      .then((response) => {
        console.log(response);
        return navigate("/students");
      })
      .catch((error) => {
        console.error("Ocurrió un error en la petición", error);
      });
  };

  if (data && selectedSubjects)
    return (
      <section className="min-h-screen">
        <div className="max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{data?.name}</h2>
          <h3 className="text-xl sm:text-2xl">
            Materias que cursarás este semestre:
          </h3>
        </div>
        <ul className="mt-4 px-4 py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects?.map((subject) => (
            <SubjectHandler
              {...subject}
              key={subject.id}
              selected={selectedSubjects.includes(subject.id)}
              handler={(numero) => {
                if (!selectedSubjects.includes(numero)) {
                  selectedSubjects.push(numero);
                }
              }}
            />
          ))}
        </ul>
        <button
          onClick={handleEnrollment}
          className=" mx-4 my-8 inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Matricular materias
        </button>
      </section>
    );
}

const SubjectHandler = ({ id, name, selected, handler }) => {
  const [newSelection, setNewSelection] = useState(selected);
  const handleClick = () => {
    setNewSelection(true);
    handler(id);
  };
  if (newSelection)
    return (
      <button
        onClick={handleClick}
        className="rounded-md border p-1 border-indigo-600"
      >
        <SubjectElement id={id} name={name} />
      </button>
    );
  else
    return (
      <button onClick={handleClick}>
        <SubjectElement id={id} name={name} />
      </button>
    );
};
