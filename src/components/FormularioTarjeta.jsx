import React from 'react';

export default function FormularioTarjeta({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white/90 mt-8 p-6 rounded-lg shadow-md text-left max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold mb-4">Información de pago</h2>
      <label className="block">
        <span className="text-sm font-medium">Nombre:</span>
        <input type="text" name="nombre" required className="mt-1 w-full border px-3 py-2 rounded" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">CC:</span>
        <input type="text" name="cc" pattern="\d{6,10}" required className="mt-1 w-full border px-3 py-2 rounded" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Número de tarjeta:</span>
        <input type="text" name="tarjeta" pattern="\d{13,16}" required className="mt-1 w-full border px-3 py-2 rounded" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">País:</span>
        <select name="pais" required className="mt-1 w-full border px-3 py-2 rounded">
          <option value="">Selecciona tu país</option>
          <option value="Colombia">Colombia</option>
          <option value="México">México</option>
        </select>
      </label>
      <div className="flex gap-4">
        <label className="w-1/2 block">
          <span className="text-sm font-medium">Expiración:</span>
          <input type="text" name="expiracion" pattern="(0[1-9]|1[0-2])\/\d{2}" required className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="w-1/2 block">
          <span className="text-sm font-medium">CVC:</span>
          <input type="text" name="cvc" pattern="\d{3,4}" required className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
      </div>
      <button type="submit" className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition">
        Confirmar y Pagar
      </button>
    </form>
  );
}
