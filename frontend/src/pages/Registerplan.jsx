import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/registerSchema.js';
import DashboardSuperior from '../components/Navbar.jsx';
import { useAuth } from '../context/authContext.jsx';

export default function Registerplan() {
  const navigate = useNavigate();
  const { signup, errors: authErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleMenuClick = () => {
    console.log('Desplegar menú lateral');
  };

const onSubmit = async (data) => {
  try {
    const payload = {
      email: data.email,
      contraseña: data.password, // el backend espera "contraseña"
      tipo_usuario: "normal",
    };
    await signup(payload);

    // Esperamos un poco y redirigimos solo si no hay errores
    setTimeout(() => {
      if (authErrors.length === 0) {
        navigate("/"); // ir al login
      }
    }, 200); // Pequeño delay para asegurar que los errores se actualicen antes
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};




  return (
    <>
      <DashboardSuperior onMenuClick={handleMenuClick} />
      <main
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo-login.jpg')" }}
      >
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg mt-20 text-center transform -translate-x-82">
          <div className="w-full p-8 text-center">
            <img src="/logo.png" alt="Logo CocinArte" className="w-36 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-gray-800 mb-5">Crea una cuenta</h2>
            {Array.isArray(authErrors) && authErrors.length > 0 && (
  <div className="flex items-start bg-red-50 border border-red-400 text-red-700 p-4 rounded-lg mb-4 shadow-md text-left">
    <svg className="w-5 h-5 mr-3 mt-1 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
    <div>
      <strong className="font-bold">¡Error al iniciar sesión!</strong>
      <ul className="mt-1 list-disc list-inside text-sm">
        {authErrors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  </div>
)}

{/* manejo de error, mejorar feedback de cliente usuario: */}
            {Array.isArray(authErrors) && authErrors.length > 0 && (
              <div className="mb-6">
                {authErrors.map((error, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg px-4 py-2 shadow-sm animate-fade-in"
                  >
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 19a7 7 0 110-14 7 7 0 010 14z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                ))}
              </div>
            )}

            {/* final */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-100 mb-5"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                Iniciar sesión con Google
              </button>

              <div className="mb-3 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="Correo electrónico"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mb-3 text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    {...register('password')}
                    placeholder="Contraseña"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                  />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
              </div>

              <div className="mb-5 text-left">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirmar
                </label>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword')}
                    placeholder="Confirmar contraseña"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
                Registrarse
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-4">
              Al registrarte estás aceptando nuestros{' '}
              <a href="#" className="text-green-700 font-semibold hover:underline">
                Términos de Uso
              </a>{' '}
              y{' '}
              <a href="#" className="text-green-700 font-semibold hover:underline">
                Política de Privacidad
              </a>
              .
            </p>

            <p className="text-sm text-gray-600 mt-3">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/" className="text-green-700 font-semibold hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
