import React, { useState } from 'react';

export default function VerificarCodigo({ onNext }) {
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    const newCodigo = [...codigo];
    newCodigo[index] = value.replace(/[^0-9]/, ''); // Solo números
    setCodigo(newCodigo);

    // Autoenfocar siguiente input
    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const codigoFinal = codigo.join('');
    console.log('Código ingresado:', codigoFinal);
    onNext();
  };

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-login.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg text-center">
        <img src="/logo.png" alt="Logo" className="w-36 mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingresa el código de verificación</h2>
        <p className="text-sm text-gray-600 mb-6">Hemos enviado un código de 6 dígitos a tu correo electrónico.</p>

        <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-6">
          {codigo.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-10 h-12 text-center border border-gray-300 rounded text-lg focus:outline-none focus:ring focus:ring-green-200"
            />
          ))}
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
        >
          Verificar código
        </button>
      </div>
    </main>
  );
}
