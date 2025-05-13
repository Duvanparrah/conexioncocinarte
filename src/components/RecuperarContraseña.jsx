import React from 'react';
import { useForm } from 'react-hook-form';

export default function RecuperarContraseña({ onNext }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Correo enviado:', data.email);
    onNext();
  };

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-login.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg text-center">
        <img src="/logo.png" alt="Logo" className="w-36 mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Recupera tu cuenta</h2>
        <p className="text-sm text-gray-600 mb-6">
          Ingresa el correo electrónico asociado a tu cuenta para recibir instrucciones.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'El correo es obligatorio' })}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:ring-green-200"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            Enviar instrucciones
          </button>
        </form>
      </div>
    </main>
  );
}
