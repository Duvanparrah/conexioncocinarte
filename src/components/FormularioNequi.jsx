import React from 'react';

export default function FormularioNequi() {
  return (
    <div className="bg-white/90 mt-8 p-6 rounded-lg shadow-md text-left max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Información de pago</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Número de Nequi:</span>
          <input type="text" name="nequi" placeholder="Número de NEQUI" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
        </label>
      </form>
    </div>
  );
}
