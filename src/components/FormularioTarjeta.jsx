import React from 'react';

export default function FormularioTarjeta() {
  return (
    <div className="bg-white/90 mt-8 p-6 rounded-lg shadow-md text-left max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Información de pago</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Nombre:</span>
          <input type="text" name="nombre" placeholder="Nombre" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">CC:</span>
          <input type="text" name="cc" placeholder="CC" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Número de tarjeta:</span>
          <input type="text" name="tarjeta" placeholder="Número de tarjeta" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">País:</span>
          <select name="pais" className="mt-1 w-full border border-gray-300 rounded px-3 py-2">
            <option value="">Selecciona tu país</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Perú">Perú</option>
          </select>
        </label>
        <div className="flex gap-4">
          <label className="w-1/2 block">
            <span className="text-sm font-medium">Fecha de expiración:</span>
            <input type="text" name="expiracion" placeholder="MM/AA" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
          </label>
          <label className="w-1/2 block">
            <span className="text-sm font-medium">Código de seguridad (CVC):</span>
            <input type="text" name="cvc" placeholder="CVC" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
          </label>
        </div>
      </form>
    </div>
  );
}
