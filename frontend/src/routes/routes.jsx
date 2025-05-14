import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus páginas
import Loginplan from "../pages/Loginplan";
import Obtenerplan from "../pages/Obtenerplan";
import Pagoplan from "../pages/Pagoplan";
import Plannutricional from "../pages/Plannutricional";
import Registerplan from "../pages/Registerplan";
import Homepage from "../pages/homepage";
import RecoverPassword from "../pages/recoverpassword";
import ProtectedRoute from "../components/ProtectedRoute";

// Importa el AuthProvider
import { AuthProvider } from "../context/authContext";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Loginplan />} />
          <Route path="/recover" element={<RecoverPassword />} />
          <Route path="/registro" element={<Registerplan />} />
          <Route path="/plan" element={<ProtectedRoute><Obtenerplan /></ProtectedRoute>} />
          <Route path="/pago" element={<Pagoplan />} />
          <Route path="/plannutricional" element={<Plannutricional />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
