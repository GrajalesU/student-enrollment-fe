import React from "react";

export default function SideLogo() {
  return (
    <span className="grid grid-cols-2 gap-x-4 h-10 w-32 place-content-center rounded-lg  text-xs text-gray-600">
      <img src="/logo.png" alt="Nibi logo" />
      <h1 className="text-2xl">Universidad</h1>
    </span>
  );
}
