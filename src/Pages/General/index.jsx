import React from "react";
import GeneralItem from "./GeneralItem";
import PeopleIcon from "../../components/Icons/People";
import BooksIcon from "../../components/Icons/Books";
import TeachersIcons from "../../components/Icons/Teachers";
import PersonIcon from "../../components/Icons/Person";

export default function General() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¡Es hora de matricular!
            </h2>

            <p className="mt-4 text-gray-600">
              Es hora de que organices tu semestre y decidas qué materias vas a
              ver y con qué profesores.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Inscríbete ahora
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <GeneralItem
              title="Ver estudiantes"
              description="Entérate de quiénes están en este semestre académico."
              link={"/students"}
            >
              <PeopleIcon />
            </GeneralItem>
            <GeneralItem
              title="Ver mi matricula"
              description="Aquí puedes ver las materias que vas a ver este semestre."
            >
              <PersonIcon />
            </GeneralItem>
            <GeneralItem
              title="Ver cursos"
              description="Descubre de los cursos ofertados para este semestre"
              link={"/subjects"}
            >
              <BooksIcon />
            </GeneralItem>
          </div>
        </div>
      </div>
    </section>
  );
}
