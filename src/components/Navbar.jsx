// // src/components/Navbar.js
// import React from 'react';
// import '../css/Navbar.css';
// import logo from '/logo.png';

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-left">
//         <button className="menu-button">☰</button>
//         <img src={logo} alt="Logo Cocinarte" className="logo" />
//       </div>
      
//       <nav className="navbar-center">
//         <a href="#">Inicio</a>
//         <a href="#">Banquetes</a>
//         <a href="#" className="active">Plan Nutricional</a>
//         <a href="#">Comunidad</a>
//         <div className="dropdown">
//           <a href="#">Categorías</a>
//         </div>
//       </nav>

//       <div className="navbar-right">
//         <input type="text" placeholder="Buscar..." className="search-bar" />
//       </div>
//     </header>
//   );
// }

import React from 'react';
import logo from '/logo.png';
import  filtro from '/filtro.png';

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
        <a href="#" className="text-black font-medium">Inicio</a>
        <a href="#" className="text-black font-medium">Banquetes</a>
        <a href="#" className="text-black font-medium">Plan Nutricional</a>
        <a href="#" className="text-black font-medium">Comunidad</a>
        <div className="relative">
          <a href="#" className="text-black font-medium">Categorías</a>
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
