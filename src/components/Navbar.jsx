import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/logo.png';
import filtro from '/filtro.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex flex-col md:flex-row md:items-center justify-between px-6 py-2 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img src={filtro} alt="filtro" className="text-2xl bg-transparent border-none cursor-pointer h-8"/>
        <img src={logo} alt="Logo Cocinarte" className="h-16" />
      </div>

      {/* permanezaca centrado */}
      <nav className="flex flex-wrap gap-6 mt-2 md:mt-0 items-center">
        <Link to="/home" className="text-black font-medium">Inicio</Link> {/* página de inicio */}
        <Link to="/banquetes" className="text-black font-medium">Banquetes</Link>
        <Link to="/" className="text-black font-medium">Plan Nutricional</Link>
        <Link to="/comunidad" className="text-black font-medium">Comunidad</Link>
        <div className="relative">
          <Link to="/categorias" className="text-black font-medium">Categorías</Link>
        </div>
      </nav>

      {/* alineado a la izquierda, debo cambiar */}
      <div className="w-full md:w-auto mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full md:w-auto px-5 py-2 border border-gray-300 rounded-full outline-none"
        />
      </div>
    </header>
  );
}
