import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ObtenerPlan() {
  const navigate = useNavigate();

  const handleComprar = (planId) => {
    navigate(`/pago/${planId}`);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: "url('/fondo-login.jpg')" }}>
      <Navbar />
      <div className="mt-24 px-5 w-full flex justify-center">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 w-full max-w-4xl text-center text-black shadow-xl border border-white/30">
          <h1 className="text-3xl font-bold mb-4">Obtén Tu Plan Nutricional Personalizado Hoy</h1>
          <p className="text-lg">Mejora tu alimentación con un plan diseñado especialmente para ti. ¡Empieza hoy!</p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            {/* Plan Gratuito */}
            <div className="bg-white/80 p-6 rounded-xl max-w-xs w-full text-left text-black border border-white/50 shadow-lg">
              <h2 className="text-center text-xl font-bold mb-2">Plan Gratuito</h2>
              <p className="mb-2 text-center font-bold">Plan Gratuito por (1) día</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cálculo de calorías, grasas y proteínas.</li>
                <li>Ingesta diaria recomendada de agua.</li>
                <li>Recomendaciones según tus objetivos.</li>
              </ul>
              <button
                onClick={() => handleComprar('')}
                className="flex items-center justify-center mt-5 px-4 py-2 bg-green-800 hover:bg-blue-700 text-white rounded"
              >
                Comprar Ahora
              </button>
            </div>

            {/* Plan Pro */}
            <div className="bg-white/80 p-6 rounded-xl max-w-xs w-full text-left text-black border border-white/50 shadow-lg">
              <h2 className="text-xl font-bold text-center mb-2">Plan Pro</h2>
              <p className="mb-2 font-bold text-center">$49.900 de Pago Único</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cálculo de calorías, grasas y proteínas.</li>
                <li>Ingesta diaria recomendada de agua.</li>
                <li>Recomendaciones según tus objetivos.</li>
                <li>Plan de comidas semanal personalizado.</li>
                <li>Alternativas de ingredientes según tus preferencias.</li>
              </ul>
              <button
                onClick={() => handleComprar('')}
                className="flex items-center justify-center mt-5 px-4 py-2 bg-green-800 hover:bg-blue-700 text-white rounded"
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
