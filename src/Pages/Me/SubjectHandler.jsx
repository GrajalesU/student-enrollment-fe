import { useState } from "react";
import SubjectElement from "../../components/SubjectElement";

export default function SubjectHandler({ id, name, selected, handler }) {
  const [newSelection, setNewSelection] = useState(selected || false);

  const handleClick = () => {
    setNewSelection(true);
    handler(id);
  };

  if (newSelection) {
    return (
      <button
        onClick={handleClick}
        className="rounded-md border p-1 border-indigo-600"
      >
        <SubjectElement id={id} name={name} />
      </button>
    );
  } else {
    return (
      <button onClick={handleClick}>
        <SubjectElement id={id} name={name} />
      </button>
    );
  }
}
