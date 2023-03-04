import React from "react";
import SideMenuElement from "./SideMenuElement";
import PeopleIcon from "../Icons/People";
import PersonIcon from "../Icons/Person";
import BooksIcon from "../Icons/Books";
import SideLogo from "./SideLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../Icons/Home";
import useAuth from "../../hooks/useAuth";

export default function SideMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const urlPattern = /(\/)students(\/)[0-9]+$/gm;
  const { user, signOut } = useAuth();

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

      {user && (
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <Link
            to="/me"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <div>
              <p className="text-xs">
                <strong className="block font-medium">ESTÁS ADENTRO</strong>
              </p>
              <button
                onClick={() =>
                  signOut(() => {
                    navigate("/login");
                  })
                }
                className="rounded bg-indigo-600 px-8 py-1 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Cerrar Matricula
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
