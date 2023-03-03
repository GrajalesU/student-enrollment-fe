import React from "react";
import SideMenuElement from "./SideMenuElement";
import PeopleIcon from "../Icons/People";
import PersonIcon from "../Icons/Person";
import BooksIcon from "../Icons/Books";
import TeachersIcons from "../Icons/Teachers";
import SideLogo from "./SideLogo";
import { useLocation } from "react-router-dom";
import HomeIcon from "../Icons/Home";

export default function SideMenu() {
  const { pathname } = useLocation();
  const urlPattern = /(\/)students(\/)[0-9]+$/gm;

  return (
    <div className="flex h-screen  flex-col justify-between border-r bg-white">
      <div className="px-4 py-6">
        <SideLogo />

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <SideMenuElement
            text="General"
            selected={pathname === "/"}
            link={"/"}
          >
            <HomeIcon />
          </SideMenuElement>

          <SideMenuElement
            text="Estudiantes"
            link={"/students"}
            selected={pathname === "/students"}
          >
            <PeopleIcon />
          </SideMenuElement>

          <SideMenuElement
            text="Materias"
            link={"/subjects"}
            selected={pathname === "/subjects"}
          >
            <BooksIcon />
          </SideMenuElement>

          <SideMenuElement
            text="Estudiante"
            selected={urlPattern.test(pathname)}
          >
            <PersonIcon color="#b0b0b0" />
          </SideMenuElement>
        </nav>
      </div>

      {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div> */}
      {/* Activo cuando ingresa */}
    </div>
  );
}
