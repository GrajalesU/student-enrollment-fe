import { Route, Routes } from "react-router-dom";
import General from "./components/General";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<General />} />
      </Route>
    </Routes>
  );
}

export default App;
