import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function NuevaContraseña() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const nueva = watch('nueva');
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');

  const onSubmit = data => {
    console.log('Nueva contraseña:', data);
    setMensaje('¡Contraseña actualizada con éxito! Redirigiendo...');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-login.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg text-center">
        <img src="/logo.png" alt="Logo" className="w-36 mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Crea una nueva contraseña</h2>

        {mensaje && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4 w-full text-center">
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="w-full text-left">
          <input
            type="password"
            {...register('nueva', {
              required: 'Campo obligatorio',
              minLength: { value: 6, message: 'Mínimo 6 caracteres' }
            })}
            placeholder="Nueva contraseña"
            className="w-full p-2 border rounded mb-2"
          />
          {errors.nueva && <p className="text-red-500 text-sm mb-2">{errors.nueva.message}</p>}

          <input
            type="password"
            {...register('confirmar', {
              required: 'Confirma la contraseña',
              validate: value => value === nueva || 'Las contraseñas no coinciden'
            })}
            placeholder="Confirmar contraseña"
            className="w-full p-2 border rounded mb-2"
          />
          {errors.confirmar && <p className="text-red-500 text-sm mb-4">{errors.confirmar.message}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            Guardar nueva contraseña
          </button>
        </form>
      </div>
    </main>
  );
}
