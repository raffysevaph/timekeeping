import "uikit/dist/css/uikit.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

// PAGES
import Interns from "./pages/Interns";
import Roles from "./pages/Roles";
import Schools from "./pages/Schools";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/interns" />} />
      <Route path="/interns" element={<Interns />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/schools" element={<Schools />} />
    </Routes>
  );
}

export default App;
