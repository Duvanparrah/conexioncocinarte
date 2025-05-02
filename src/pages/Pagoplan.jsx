// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import '../css/PagoPlan.css';

// export default function PagoPlan() {
//   const [selectedMethod, setSelectedMethod] = useState('');

//   return (
//     <div className="pago-plan-container">
//       <Navbar />
//       <div className="pago-plan-content">
//         <h1>Elige tu método de pago</h1>
//         <p>Cifrado de extremo a extremo 🔒</p>
//         <div className="payment-methods">
//           <div className="payment-card">
//             <input
//               type="radio"
//               id="tarjeta"
//               name="metodoPago"
//               onChange={() => setSelectedMethod('tarjeta')}
//             />
//             <label htmlFor="tarjeta" className="payment-label">
//               <div className="payment-icon">
//                 <img src="/visa.png" alt="Visa" />
//                 <img src="/mastercard.png" alt="Mastercard" />
//               </div>
//               <span>Tarjeta de crédito o débito</span>
//             </label>
//           </div>

//           <div className="payment-card">
//             <input
//               type="radio"
//               id="nequi"
//               name="metodoPago"
//               onChange={() => setSelectedMethod('nequi')}
//             />
//             <label htmlFor="nequi" className="payment-label">
//               <div className="payment-icon">
//                 <img src="/nequi.png" alt="Nequi" />
//               </div>
//               <span>Nequi</span>
//             </label>
//           </div>
//         </div>

//         {selectedMethod === 'tarjeta' && (
//           <div className="payment-form">
//             <h2>Información de pago</h2>
//             <form>
//               <label>Nombre:
//                 <input type="text" name="nombre" placeholder="Nombre" />
//               </label>
//               <label>CC:
//                 <input type="text" name="cc" placeholder="CC" />
//               </label>
//               <label>Número de tarjeta:
//                 <input type="text" name="tarjeta" placeholder="Número de tarjeta" />
//               </label>
//               <label>País:
//                 <select name="pais">
//                   <option value="">Selecciona tu país</option>
//                   <option value="Colombia">Colombia</option>
//                   <option value="México">México</option>
//                   <option value="Argentina">Argentina</option>
//                   <option value="Chile">Chile</option>
//                   <option value="Perú">Perú</option>
//                 </select>
//               </label>
//               <div className="expiration-security">
//                 <label>Fecha de expiración:
//                   <input type="text" name="expiracion" placeholder="MM/AA" />
//                 </label>
//                 <label>Código de seguridad (CVC):
//                   <input type="text" name="cvc" placeholder="CVC" />
//                 </label>
//               </div>
//             </form>
//           </div>
//         )}

//         <button className="btn-pagar">Ir a pagar</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FormularioTarjeta from '../components/FormularioTarjeta';
import FormularioNequi from '../components/FormularioNequi';
import PagoExitoso from '../components/PagoExitoso'; // Asegúrate de que esté bien ubicado

export default function PagoPlan() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [pagoFinalizado, setPagoFinalizado] = useState(false);

  const handleFinalizarCompra = () => {
    // Simulación de proceso de pago
    if (selectedMethod) {
      setTimeout(() => {
        setPagoFinalizado(true);
      }, 1000); // Simula un breve proceso
    } else {
      alert('Por favor, selecciona un método de pago.');
    }
  };

  if (pagoFinalizado) {
    return <PagoExitoso />;
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fondo-login.jpg')" }}>
      <Navbar />
      <div className="p-6 text-center text-gray-800 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Elige tu método de pago</h1>
        <p className="text-sm text-gray-600 mt-1">Cifrado de extremo a extremo</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {/* Tarjeta */}
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

          {/* Nequi */}
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

        {selectedMethod === 'tarjeta' && <FormularioTarjeta />}
        {selectedMethod === 'nequi' && <FormularioNequi />}

        <button
          onClick={handleFinalizarCompra}
          className="bg-green-600 text-white px-6 py-2 rounded mt-6 hover:bg-blue-700 transition"
        >
          FINALIZAR COMPRA
        </button>

        <div className="max-w-3xl mx-auto mt-4 bg-white/80 p-4 rounded shadow text-sm text-gray-700 italic">
          <p>
            Al hacer clic en el botón <strong>'Finalizar compra'</strong>, aceptas nuestros <span className="underline cursor-pointer">Términos de uso</span> y <span className="underline cursor-pointer">Política de privacidad</span>, y autorizas a CocinArte a cobrarte una mensualidad de <strong>COP 49.900</strong> + impuestos aplicables por el Plan Nutricional Personalizado. Este pago se renovará automáticamente cada mes hasta que decidas cancelarlo. <strong>El precio está sujeto a cambios.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
