import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PagoExitoso({ metodo }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/plannutricional');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white/90 mt-10 p-8 rounded-lg shadow-lg text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-green-600">¡Pago exitoso!</h2>
      <p className="mt-4 text-gray-700">Tu suscripción al Plan Nutricional ha sido activada.</p>
      <div className="mt-6 border-t pt-4 text-sm text-gray-600">
        <p>Referencia: <strong>#CocinArte-{Math.floor(100000 + Math.random() * 900000)}</strong></p>
        <p>Método: <strong>{metodo === 'tarjeta' ? 'Tarjeta' : 'Nequi'}</strong></p>
        <p>Valor: <strong>COP 49.900</strong></p>
        <p className="mt-2 italic">Serás redirigido automáticamente al plan nutricional...</p>
      </div>
    </div>
  );
}
