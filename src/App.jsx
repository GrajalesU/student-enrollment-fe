import { Route, Routes } from "react-router-dom";
import General from "./Pages/General";
import Layout from "./components/Layout";
import Students from "./Pages/Students";
import Subjects from "./Pages/Subjects";
import Student from "./Pages/Student";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<General />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/subjects" element={<Subjects />} />
      </Route>
    </Routes>
  );
}

export default App;
