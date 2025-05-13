// import { useState } from "react";

// const pasos = [
//   {
//     titulo: "¡Descubre un plan de nutrición hecho a tu medida para alcanzar tus metas de forma saludable!",
//     img: "/icons/bienvenida.png"
//   },
//   {
//     titulo: "¿Cuál es tu objetivo?",
//     descripcion: "Descubre cuántas calorías necesitas para alcanzar tu objetivo.",
//     opciones: ["Perder Grasa", "Ganar Masa Muscular", "Mantener Peso"],
//     img: "/icons/objetivo.png"
//   },
//   {
//     titulo: "Ayúdanos a conocerte mejor.",
//     descripcion: "Con estos datos determinaremos tu ingesta calórica ideal.",
//     campos: ["Sexo", "Edad", "Altura (cm)", "Peso (kg)"],
//     img: "/icons/datos.png"
//   },
//   {
//     titulo: "¿Cuál es tu nivel de actividad física?",
//     opciones: [
//       "Sedentario",
//       "Ligera actividad",
//       "Moderadamente activo",
//       "Muy activo",
//       "Extremadamente activo"
//     ],
//     vertical: true,
//     img: "/icons/actividad.png"
//   },
//   {
//     titulo: "¿Realizas entrenamiento de fuerza?",
//     opciones: ["Sí", "No"],
//     img: "/icons/fuerza.png"
//   }
// ];

// export default function PlanNutricional() {
//   const [pasoActual, setPasoActual] = useState(0);
//   const [formulario, setFormulario] = useState({});

//   const avanzarPaso = () => {
//     if (pasoActual < pasos.length - 1) {
//       setPasoActual(pasoActual + 1);
//     } else {
//       console.log("Datos enviados:", formulario);
//       alert("¡Plan nutricional completado! 🎉");
//     }
//   };

//   const manejarCambio = (campo, valor) => {
//     setFormulario((prev) => ({ ...prev, [campo]: valor }));
//   };

//   const paso = pasos[pasoActual];
//   const progreso = ((pasoActual + 1) / pasos.length) * 100;

//   return (
//     <div className="max-w-2xl mx-auto p-6 mt-10 bg-white/90 rounded-xl shadow-xl">
//       <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
//         <div
//           className="h-3 bg-green-600 rounded-full transition-all duration-300"
//           style={{ width: `${progreso}%` }}
//         />
//       </div>

//       <div className="text-center">
//         {paso.img && (
//           <img src={paso.img} alt="Paso" className="w-24 mx-auto mb-4" />
//         )}

//         <h2 className="text-xl font-semibold mb-2">{paso.titulo}</h2>

//         {paso.descripcion && (
//           <p className="text-gray-600 mb-4">{paso.descripcion}</p>
//         )}

//         {paso.opciones && (
//           <div
//             className={`flex ${
//               paso.vertical ? "flex-col items-start" : "justify-center gap-4"
//             } my-4`}
//           >
//             {paso.opciones.map((opcion, i) => (
//               <label key={i} className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name={`paso-${pasoActual}`}
//                   value={opcion}
//                   onChange={(e) =>
//                     manejarCambio(`paso-${pasoActual}`, e.target.value)
//                   }
//                 />
//                 <span>{opcion}</span>
//               </label>
//             ))}
//           </div>
//         )}

//         {paso.campos && (
//           <div className="grid gap-4 my-4">
//             {paso.campos.map((campo, i) => {
//               const key = campo.toLowerCase().replace(/[\s()]/g, "");
//               return (
//                 <input
//                   key={i}
//                   type={campo.toLowerCase().includes("sexo") ? "text" : "number"}
//                   placeholder={campo}
//                   onChange={(e) => manejarCambio(key, e.target.value)}
//                   className="w-full p-2 border rounded-lg"
//                 />
//               );
//             })}
//           </div>
//         )}

//         <button
//           onClick={avanzarPaso}
//           className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//         >
//           {pasoActual < pasos.length - 1 ? "Continuar" : "Finalizar"}
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import Navbar from "../components/Navbar";
import FormularioPlan from "../components/FormularioPlan";

export default function PlanNutricional() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-login.jpg')" }}
    >
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-30">
        {!mostrarFormulario ? (
          <div className="bg-white/70 rounded-2xl shadow-xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5x2 font-semibold text-gray-800 mb-4">
                ¡Descubre un plan de <br />
                nutrición hecho a tu medida <br />
                para alcanzar tus metas de forma saludable!
              </h2>
              <button
                onClick={() => setMostrarFormulario(true)}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
              >
                Continuar
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src="/plan_nutricion.png"
                alt="Plan Nutricional"
                className="w-78 md:w-94"
              />
            </div>
          </div>
        ) : (
          <FormularioPlan />
        )}
      </div>
    </div>
  );
}
