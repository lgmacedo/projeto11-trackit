import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

import Usuario from "./globals/Usuario";
import Progresso from "./globals/Progresso";

function App() {
  const [usuario, setUsuario] = useState({});
  const [progresso, setProgresso] = useState(0);

  return (
    <Usuario.Provider value={[usuario, setUsuario]}>
    <Progresso.Provider value={[progresso, setProgresso]}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/hoje" element={<TodayPage />} />
      </Routes>
    </Progresso.Provider>
    </Usuario.Provider>
  );
}

export default App;
