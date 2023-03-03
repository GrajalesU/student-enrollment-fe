import React from "react";

export default function SubjectElement({ id, name }) {
  return (
    <div className="group block overflow-hidden rounded-md">
      <img
        src={`/subjects/subject-${id % 4}.png`}
        className="h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="relative bg-white pt-3">
        <h3 className="text-xl text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>
      </div>
    </div>
  );
}
