// import React from 'react';
// import Navbar from '../components/Navbar';
// import '../css/ObtenerPlan.css';

// export default function ObtenerPlan() {
//   return (
//     <div className="obtener-plan">
//       <Navbar />
//       <div className="contenido">
//         <h1>Obtén Tu Plan Nutricional Personalizado Hoy</h1>
//         <p>Mejora tu alimentación con un plan diseñado especialmente para ti. ¡Empieza hoy!</p>

//         <div className="planes">
//           <div className="plan gratuito">
//             <h2>Plan Gratuito</h2>
//             <p>Plan Gratuito por (1) día</p>
//             <ul>
//               <li>Cálculo de calorías, grasas y proteínas.</li>
//               <li>Ingesta diaria recomendada de agua.</li>
//               <li>Recomendaciones según tus objetivos.</li>
//             </ul>
//             <button>Comprar Ahora</button>
//           </div>

//           <div className="plan pro">
//             <h2>Plan Pro</h2>
//             <p>$49.900 de Pago Único</p>
//             <ul>
//               <li>Cálculo de calorías, grasas y proteínas.</li>
//               <li>Ingesta diaria recomendada de agua.</li>
//               <li>Recomendaciones según tus objetivos.</li>
//               <li>Plan de comidas semanal personalizado.</li>
//               <li>Alternativas de ingredientes según tus preferencias.</li>
//             </ul>
//             <button>Comprar Ahora</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Navbar from '../components/Navbar';

export default function ObtenerPlan() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/fondo-login.jpg')" }}>
      <Navbar />
      <div className="text-white text-center mt-24 px-5">
        <h1 className="text-3xl font-bold mb-4">Obtén Tu Plan Nutricional Personalizado Hoy</h1>
        <p className="text-lg">Mejora tu alimentación con un plan diseñado especialmente para ti. ¡Empieza hoy!</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 ">
          {/* Plan Gratuito */}
          <div className="bg-white  bg-opacity-90 p-6 rounded-lg max-w-xs text-left text-black">
            <h2 className="text-center text-xl font-bold text-[#000000] mb-2">Plan Gratuito</h2>
            <p className="mb-2 text-center font-bold">Plan Gratuito por (1) día</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cálculo de calorías, grasas y proteínas.</li>
              <li>Ingesta diaria recomendada de agua.</li>
              <li>Recomendaciones según tus objetivos.</li>
            </ul>
            <button className="flex items-center justify-center mt-5 px-4 py-2 bg-green-800 hover:bg-blue-700 text-white rounded ">Comprar Ahora</button>
          </div>

          {/* Plan Pro */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-xs text-left text-black ">
            <h2 className="text-xl font-bold text-center text-[#000000] mb-2">Plan Pro</h2>
            <p className="mb-2 font-bold text-center">$49.900 de Pago Único</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cálculo de calorías, grasas y proteínas.</li>
              <li>Ingesta diaria recomendada de agua.</li>
              <li>Recomendaciones según tus objetivos.</li>
              <li>Plan de comidas semanal personalizado.</li>
              <li>Alternativas de ingredientes según tus preferencias.</li>
            </ul>
            <button className="mt-5 px-4 py-2 bg-green-800 hover:bg-blue-700 text-white rounded">Comprar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
