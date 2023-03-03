import { Route, Routes } from "react-router-dom";
import General from "./Pages/General";
import Layout from "./components/Layout";
import Students from "./Pages/Students";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<General />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  );
}

export default App;
