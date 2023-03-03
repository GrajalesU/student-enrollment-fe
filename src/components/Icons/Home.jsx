import React from "react";

function HomeIcon({ width = 16, height = 16, color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9v8c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17V9"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 11l4.5-4 3.171-2.819a2 2 0 012.658 0L16.5 7l4.5 4M10 21v-4a2 2 0 012-2v0a2 2 0 012 2v4"
      ></path>
    </svg>
  );
}

export default HomeIcon;
