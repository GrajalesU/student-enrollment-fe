import { Route, Routes } from "react-router-dom";
import General from "./Pages/General";
import Layout from "./components/Layout";
import Students from "./Pages/Students";
import Subjects from "./Pages/Subjects";
import Student from "./Pages/Student";
import ProtectedRoute from "./components/ProtectedRoute";
import Me from "./Pages/Me";
import { AuthProvider } from "./Context/student";
import Login from "./Pages/Login";
import Error404 from "./components/Error404";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<General />} />
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route
            path="/me"
            element={
              <ProtectedRoute>
                <Me />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Error404
              message={"On no, no encontramos al estudiante que buscas :c"}
              link="/"
            />
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
