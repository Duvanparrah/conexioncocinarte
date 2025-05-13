import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import DashboardSuperior from '../components/Navbar.jsx';
import { loginWithGoogle } from '../libs/authgoogle.jsx';

export default function Loginplan() {
  const navigate = useNavigate();

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

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log('Usuario autenticado:', user);
      navigate('/obtenerplan'); // Redirección después del login con Google
    } catch (error) {
      console.error('Error en la autenticación:', error);
    }
  };

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);

    // Aquí puedes hacer la lógica de login real si tienes API
    // Por ahora redirige directo como ejemplo
    navigate('/plan');
  };

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

          <button
            className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 mb-5"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            Iniciar sesión con Google
          </button>

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
