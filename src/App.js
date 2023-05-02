import { Routes, Route } from "react-router-dom";
import "./App.css";

import VistaAuto from "./pages/vistaAuto";
import CompararAuto from "./pages/comparadorAuto";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/vistaAuto" element={<VistaAuto />} />
        <Route path="/comparadorAuto" element={<CompararAuto />} />
      </Routes>
    </div>
  );
  }

export default App;
