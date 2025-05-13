import React from 'react';

export default function FormularioNequi({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white/90 mt-8 p-6 rounded-lg shadow-md text-left max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold mb-4">Información de pago</h2>
      <label className="block">
        <span className="text-sm font-medium">Número de Nequi:</span>
        <input type="text" name="nequi" pattern="\d{10}" required className="mt-1 w-full border px-3 py-2 rounded" />
      </label>
      <button type="submit" className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition">
        Confirmar y Pagar
      </button>
    </form>
  );
}
