import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormularioTarjeta from '../components/FormularioTarjeta';
import FormularioNequi from '../components/FormularioNequi';
import PagoExitoso from '../components/PagoExitoso';

export default function PagoPlan() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [pagoFinalizado, setPagoFinalizado] = useState(false);
  const [datosPago, setDatosPago] = useState(null);

  const handleFormularioSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());
    setDatosPago(datos);
    setTimeout(() => {
      setPagoFinalizado(true);
    }, 1000);
  };

  if (pagoFinalizado) {
    return <PagoExitoso datos={datosPago} metodo={selectedMethod} />;
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fondo2.jpg')" }}>
      <Navbar />
      <div className="p-6 text-center text-gray-800 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Elige tu método de pago</h1>
        <p className="text-sm text-gray-600 mt-1">Cifrado de extremo a extremo</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <div className="bg-white/90 p-5 rounded-lg shadow-md w-full max-w-xs">
            <input
              type="radio"
              id="tarjeta"
              name="metodoPago"
              onChange={() => setSelectedMethod('tarjeta')}
              className="mb-2"
            />
            <label htmlFor="tarjeta" className="block cursor-pointer">
              <div className="flex justify-center gap-2 mb-2">
                <img src="/visa.png" alt="Visa" className="w-12" />
                <img src="/mastercard.png" alt="Mastercard" className="w-12" />
              </div>
              <span className="font-medium">Tarjeta de crédito o débito</span>
            </label>
          </div>

          <div className="bg-white/90 p-5 rounded-lg shadow-md w-full max-w-xs">
            <input
              type="radio"
              id="nequi"
              name="metodoPago"
              onChange={() => setSelectedMethod('nequi')}
              className="mb-2"
            />
            <label htmlFor="nequi" className="block cursor-pointer">
              <div className="flex justify-center mb-2">
                <img src="/nequi.png" alt="Nequi" className="w-16" />
              </div>
              <span className="font-medium">Nequi</span>
            </label>
          </div>
        </div>

        {selectedMethod === 'tarjeta' && <FormularioTarjeta onSubmit={handleFormularioSubmit} />}
        {selectedMethod === 'nequi' && <FormularioNequi onSubmit={handleFormularioSubmit} />}

        {selectedMethod === '' && (
          <p className="text-red-500 mt-6">Por favor selecciona un método de pago.</p>
        )}

        <div className="max-w-3xl mx-auto mt-4 bg-white/80 p-4 rounded shadow text-sm text-gray-700 italic">
          <p>
            Al hacer clic en <strong>'Continuar'</strong>, aceptas nuestros <span className="underline cursor-pointer">Términos de uso</span> y <span className="underline cursor-pointer">Política de privacidad</span>, y autorizas a CocinArte a cobrarte una mensualidad de <strong>COP 49.900</strong> + impuestos.
          </p>
        </div>
      </div>
    </div>
  );
}
