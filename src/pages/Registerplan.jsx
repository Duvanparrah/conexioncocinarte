import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/registerSchema';
import DashboardSuperior from '../components/Navbar.jsx';
import { useAuth } from '../context/authContext';

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
      await signup(data);
      navigate('/plan'); // Redirigir tras el registro exitoso
    } catch (error) {
      console.error('Error en el registro:', error);
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
            {authErrors.length > 0 && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {authErrors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
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
