// import React from 'react';
// import '../css/Registerplan.css';
// import { Link } from 'react-router-dom'; // Importa Link
// import DashboardSuperior from '../components/Navbar.jsx';

// export default function Registerplan() {
//   const handleMenuClick = () => {
//     console.log('Desplegar menú lateral');
//   };

//   return (
//     <>
//       <DashboardSuperior onMenuClick={handleMenuClick} />

//       <main className="main-register">
//         <div className="register-container">
//           {/* Columna izquierda: Formulario */}
//           <div className="register-form">
//             <img src="/logo.png" alt="Logo CocinArte" className="logo-image" />
//             <h2>Crea una cuenta</h2>
//             <button className="google-btn">
//               <img
//                 src="https://developers.google.com/identity/images/g-logo.png"
//                 alt="Google logo"
//                 className="google-icon"
//               />
//               Iniciar sesión con Google
//             </button>
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <div className="input-wrapper">
//                 <i className="fas fa-envelope"></i>
//                 <input type="email" id="email" placeholder="Correo electrónico" />
//               </div>
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Contraseña</label>
//               <div className="input-wrapper">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" id="password" placeholder="Contraseña" />
//               </div>
//             </div>
//             <div className="input-group">
//               <label htmlFor="confirm">Confirmar</label>
//               <div className="input-wrapper">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" id="confirm" placeholder="Confirmar contraseña" />
//               </div>
//             </div>
//             <button className="register-btn">Registrarse</button> {/* Botón añadido */}
//             <p className="terms">
//               Al registrarte estás aceptando nuestros <a href="#">Términos de Uso</a> y <a href="#">Política de Privacidad</a>.
//             </p>
            
//             <p className="switch-login">
//               {/* Aquí usas Link para la redirección */}
//               ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import DashboardSuperior from '../components/Navbar.jsx';

export default function Registerplan() {
  const handleMenuClick = () => {
    console.log('Desplegar menú lateral');
  };

  return (
    <>
      <DashboardSuperior onMenuClick={handleMenuClick} />

      <main className="flex justify-center items-center pt-20 min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden mt-4">
          {/* Formulario */}
          <div className="w-full p-8 text-center">
            <img src="/logo.png" alt="Logo CocinArte" className="w-36 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-gray-800 mb-5">Crea una cuenta</h2>

            <button className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-100 mb-5">
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className="w-5 h-5"
              />
              Iniciar sesión con Google
            </button>

            <div className="mb-3 text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Correo electrónico"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
            </div>

            <div className="mb-3 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
            </div>

            <div className="mb-5 text-left">
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirmar</label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="confirm"
                  placeholder="Confirmar contraseña"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
              Registrarse
            </button>

            <p className="text-xs text-gray-600 mt-4">
              Al registrarte estás aceptando nuestros{' '}
              <a href="#" className="text-green-700 font-semibold hover:underline">Términos de Uso</a> y{' '}
              <a href="#" className="text-green-700 font-semibold hover:underline">Política de Privacidad</a>.
            </p>

            <p className="text-sm text-gray-600 mt-3">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/" className="text-green-700 font-semibold hover:underline">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

