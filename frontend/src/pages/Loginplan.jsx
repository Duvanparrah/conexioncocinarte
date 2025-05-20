import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema.js';
import DashboardSuperior from '../components/Navbar.jsx';
import { useAuth } from '../context/authContext.jsx';

export default function Loginplan() {
  const navigate = useNavigate();
  const { signin, isAuthenticated, errors: authErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleMenuClick = () => {
    console.log('Desplegar menú lateral');
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        contraseña: data.password,
      };
      await signin(payload);
      // El navigate se ejecutará en el useEffect si el login fue exitoso
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/plan');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <DashboardSuperior onMenuClick={handleMenuClick} />
      <main
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo-login.jpg')" }}
      >
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg mt-20 text-center transform -translate-x-82">
          <img src="/logo.png" alt="Logo CocinArte" className="w-36 mx-auto mb-5" />
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Inicia sesión</h2>

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
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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

            <div className="mb-6 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
            >
              Iniciar sesión
            </button>

            <div className="mt-4 text-sm text-gray-600">
              <Link to="/recover" className="block mb-2 hover:underline">
                ¿Has olvidado tu contraseña?
              </Link>

              <Link to="/registro" className="hover:underline">
                ¿Todavía no tienes una cuenta? <span className="text-green-600 font-semibold">Regístrate</span>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
