import React from "react";
import SideMenu from "../Side";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex w-full">
      <SideMenu />
      <Outlet />
    </div>
  );
}
