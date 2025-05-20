import { useState } from "react";
import axios from "axios";
import PlanFinal from "./PlanFinal";


const pasos = [
  {
    titulo: "¿Cuál es tu objetivo?",
    descripcion: "Descubre cuántas calorías necesitas para alcanzar tu objetivo.",
    opciones: [
      { label: "Perder Grasa", icon: "/perder-grasa.png", value: "perder" },
      { label: "Ganar Masa Muscular", icon: "/ganar-musculo.png", value: "ganar" },
      { label: "Mantener Peso", icon: "/mantener-peso.png", value: "mantener" },
    ],
  },
  {
    titulo: "Ayúdanos a conocerte mejor",
    descripcion: "Con estos datos determinaremos tu ingesta calórica ideal.",
    campos: [
      { label: "Sexo", key: "sexo" },
      { label: "Edad", key: "edad" },
      { label: "Altura (cm)", key: "altura" },
      { label: "Peso (kg)", key: "peso" },
    ],
  },
  {
    titulo: "¿Cuál es tu nivel de actividad física?",
    descripcion: "Esto nos ayudará a calcular tu gasto energético diario.",
    opciones: [
      { label: "Sedentario (poco o ningún ejercicio)", value: "sedentario" },
      { label: "Ligero (ejercicio ligero 1-3 días/semana)", value: "ligero" },
      { label: "Moderado (ejercicio moderado 3-5 días/semana)", value: "moderado" },
      { label: "Activo (ejercicio fuerte 6-7 días/semana)", value: "activo" },
      { label: "Muy activo (ejercicio intenso y trabajo físico)", value: "muy_activo" },
    ],
  },

  {
    titulo: "¿Realizas entrenamiento de fuerza?",
    descripcion: "",
    opciones: [
      { label: "Sí", value: "si", icon: "/fuerza_aprovado.png" },
      { label: "No", value: "no", icon: "/fuerza_denegado.png" },
    ],
  },

  {
    titulo: "Selecciona los ingredientes que consumes",
    descripcion: "Esto nos permitirá recomendarte un plan basado en tus preferencias.",
    secciones: {
      Verduras: ["Zanahoria", "Lechuga", "Brócoli", "Espinaca"],
      Frutas: ["Manzana", "Banano", "Naranja", "Uva"],
      Carnes: ["Pollo", "Res", "Cerdo", "Pescado"],
      Lácteos: ["Leche", "Yogur", "Queso"],
      Cereales: ["Avena", "Arroz", "Quinoa", "Maíz"],
      Huevos: ["Huevo entero", "Clara de huevo"],
      "Frutos secos y semillas": ["Almendras", "Nueces", "Chía", "Linaza"],
      "Aceites y grasas": ["Aceite de oliva", "Mantequilla", "Aguacate"],
      Bebidas: ["Agua", "Jugo natural", "Té", "Café"],
    },
  },
];

export default function FormularioPlan() {
  const [pasoActual, setPasoActual] = useState(0);
  const [formulario, setFormulario] = useState({
    objetivo: "",
    sexo: "",
    edad: "",
    altura: "",
    peso: "",
    actividad: "",
    entrenamiento: "",
    ingredientes: [],
  });

  const [mostrarPlanFinal, setMostrarPlanFinal] = useState(false);
  const [datosPlan, setDatosPlan, mensaje, setMensaje] = useState(null); // ✅ Nuevo estado para respuesta del backend

  const avanzarPaso = () => {
    if (pasoActual === 1) {
      if (!formulario.sexo || !formulario.edad || !formulario.altura || !formulario.peso) {
        alert("Por favor completa todos los campos.");
        return;
      }
    }
    if (pasoActual === 2 && !formulario.actividad) {
      alert("Por favor selecciona tu nivel de actividad física.");
      return;
    }

    setPasoActual(pasoActual + 1);
  };

  const manejarCambio = (campo, valor) => {
    setFormulario((prev) => ({ ...prev, [campo]: valor }));
  };

  const toggleIngrediente = (ingrediente) => {
    setFormulario((prev) => {
      const yaExiste = prev.ingredientes.includes(ingrediente);
      const nuevosIngredientes = yaExiste
        ? prev.ingredientes.filter((i) => i !== ingrediente)
        : [...prev.ingredientes, ingrediente];
      return { ...prev, ingredientes: nuevosIngredientes };
    });
  };

  // añadi formulario toma correctamente los valores
function mapNivelActividad(valor) {
  const mapa = {
    sedentario: "sedentario",
    ligero: "ligera actividad",
    moderado: "moderadamente activo",
    activo: "muy activo",
    muy_activo: "extremadamente activo",
  };
  return mapa[valor] || "sedentario";
}



const enviarFormulario = async () => {
  try {
    if (!user?.id) {
       setMensaje("Debes iniciar sesión para guardar tu plan.");
      return;
    }

    const payload = {
      id_usuario: user.id, // o user.id_usuario según cómo guardes el usuario
      objetivo: formulario.objetivo === "perder"
        ? "bajar de peso"
        : formulario.objetivo === "ganar"
        ? "ganar músculo"
        : "mantener peso",
      edad: parseInt(formulario.edad),
      sexo: formulario.sexo === "masculino" ? "hombre" : "mujer",
      altura_cm: parseFloat(formulario.altura),
      peso_kg: parseFloat(formulario.peso),
      nivel_actividad: mapNivelActividad(formulario.actividad),
      entrenamiento_fuerza: formulario.entrenamiento === "si",
    };

    const response = await axios.post("http://localhost:4200/api/respuestas", payload);

    setDatosPlan(response.data.data); // Guarda los datos que retorna el backend
    setMostrarPlanFinal(true);
    setMensaje(null); // limpiar mensaje
  } catch (error) {
    console.error("Error al enviar datos al backend:", error);
    setMensaje("❌ Hubo un error al guardar tu plan nutricional.");
  }
};


  const paso = pasos[pasoActual];
  const progreso = ((pasoActual + 1) / (pasos.length + 1)) * 100;

  if (mostrarPlanFinal) return <PlanFinal datos={datosPlan} />; // ✅ Mostrar plan final con datos

  return (
    <>
      {pasoActual < pasos.length ? (
        <div className="max-w-2xl mx-auto p-6 mt-8 bg-white/90 rounded-2xl shadow-2xl text-center mt-25">
          <div className="w-full bg-gray-200 h-3 rounded-full mb-6 overflow-hidden">
            <div
              className="h-3 bg-green-600 rounded-full transition-all duration-300"
              style={{ width: `${progreso}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-green-800 mb-2">{paso.titulo}</h2>
          <p className="text-gray-700 mb-6">{paso.descripcion}</p>

          {pasoActual === 0 && (
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-5 text-left">
              {/* Columna izquierda - Imagen e información */}
              <div className="md:w-1/2 text-center md:text-left">
                <img src="/objetivo.png" alt="objetivo" className="w-40 mx-auto md:mx-0 mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">{paso.titulo}</h2>
                <p className="text-gray-700">{paso.descripcion}</p>
              </div>

              {/* Columna derecha - Opciones */}
              <div className="md:w-1/2 flex flex-col gap-4">
                {paso.opciones.map((op, i) => (
                  <label
                    key={i}
                    className={`w-full px-4 py-3 rounded-xl border-2 cursor-pointer flex items-center gap-4 shadow ${
                      formulario.objetivo === op.value
                        ? "border-green-600 bg-green-100"
                        : "border-gray-300 bg-[#fdf6e3]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="objetivo"
                      value={op.value}
                      checked={formulario.objetivo === op.value}
                      onChange={() => manejarCambio("objetivo", op.value)}
                      className="hidden"
                    />
                    <img src={op.icon} alt={op.label} className="w-10 h-10" />
                    <span className="text-lg font-semibold text-green-900">{op.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {pasoActual === 1 && (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 text-left">
    {/* Izquierda */}
    <div className="md:w-1/2 text-center md:text-left">
      <img src="/conocerte.png" alt="datos" className="w-40 mx-auto md:mx-0 mb-4" />
      <h2 className="text-2xl font-bold text-green-800 mb-2">{paso.titulo}</h2>
      <p className="text-gray-700">{paso.descripcion}</p>
    </div>

    {/* Derecha */}
    <div className="md:w-1/2 grid gap-4">
      {paso.campos.map((campo, i) => {
        const { label, key } = campo;
        const isNumber = ["edad", "altura", "peso"].includes(key);

        if (key === "sexo") {
          return (
            <select
              key={i}
              value={formulario.sexo}
              onChange={(e) => manejarCambio("sexo", e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-700"
            >
              <option value="">Selecciona tu sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          );
        }

        return (
          <input
            key={i}
            type={isNumber ? "number" : "text"}
            placeholder={label}
            value={formulario[key]}
            onChange={(e) => manejarCambio(key, e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        );
      })}
    </div>
  </div>
)}


                  {pasoActual === 2 && (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 text-left">
                  {/* Izquierda */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <img src="/actividad.png" alt="actividad" className="w-40 mx-auto md:mx-0 mb-4" />
                    <h2 className="text-2xl font-bold text-green-800 mb-2">{paso.titulo}</h2>
                    <p className="text-gray-700">{paso.descripcion}</p>
                  </div>

                  {/* Derecha */}
                  <div className="md:w-1/2 flex flex-col gap-4">
                    {paso.opciones.map((op, i) => (
                      <label
                        key={i}
                        className={`w-full px-4 py-3 rounded-xl border-2 cursor-pointer flex items-center gap-2 shadow ${
                          formulario.actividad === op.value
                            ? "border-green-600 bg-green-100"
                            : "border-gray-300 bg-[#fdf6e3]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="actividad"
                          value={op.value}
                          checked={formulario.actividad === op.value}
                          onChange={() => manejarCambio("actividad", op.value)}
                          className="hidden"
                        />
                        <span className="text-sm font-medium text-green-900">{op.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

{/* añadir el paso faltamte*/}
{pasoActual === 3 && (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 text-left">
    {/* Izquierda: ícono principal + título */}
    <div className="md:w-1/2 text-center md:text-left">
      <img src="/pesas.png" alt="Entrenamiento de fuerza" className="w-32 mx-auto md:mx-0 mb-4" />
      <h2 className="text-2xl font-bold text-green-800 mb-2">¿Realizas entrenamiento de fuerza?</h2>
    </div>

    {/* Derecha: opciones Sí / No con imágenes distintas */}
    <div className="md:w-1/2 flex flex-col gap-4 items-center">
      <label
        className={`w-full max-w-xs px-6 py-3 rounded-full border-2 cursor-pointer flex items-center justify-center gap-4 text-lg font-semibold ${
          formulario.entrenamiento === "si"
            ? "border-green-600 bg-green-100 text-green-800"
            : "border-gray-300 bg-white text-gray-800"
        }`}
      >
        <input
          type="radio"
          name="entrenamiento"
          value="si"
          checked={formulario.entrenamiento === "si"}
          onChange={() => manejarCambio("entrenamiento", "si")}
          className="hidden"
        />
        <img src="/fuerza_aprovado.png" alt="Sí" className="w-8 h-8" />
        Sí
      </label>

      <label
        className={`w-full max-w-xs px-6 py-3 rounded-full border-2 cursor-pointer flex items-center justify-center gap-4 text-lg font-semibold ${
          formulario.entrenamiento === "no"
            ? "border-green-600 bg-green-100 text-green-800"
            : "border-gray-300 bg-white text-gray-800"
        }`}
      >
        <input
          type="radio"
          name="entrenamiento"
          value="no"
          checked={formulario.entrenamiento === "no"}
          onChange={() => manejarCambio("entrenamiento", "no")}
          className="hidden"
        />
        <img src="/fuerza_denegado.png" alt="No" className="w-8 h-8" />
        No
      </label>
    </div>
  </div>
)}


{/* ____________- */}

          {pasoActual === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-6">
              {Object.entries(paso.secciones).map(([categoria, ingredientes], i) => (
                <div key={i}>
                  <h3 className="text-green-700 font-bold mb-2">{categoria}</h3>
                  <div className="flex flex-wrap gap-2">
                    {ingredientes.map((ing, j) => (
                      <button
                        key={j}
                        onClick={() => toggleIngrediente(ing)}
                        className={`px-3 py-1 rounded-full border text-sm ${
                          formulario.ingredientes.includes(ing)
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-gray-100 text-gray-700 border-gray-300"
                        }`}
                      >
                        {ing}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={avanzarPaso}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg mt-4"
          >
            {pasoActual === pasos.length - 1 ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      ) : (
        // SECCIÓN FINAL
        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 mt-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606788075761-8f56b1473f7e')",
          }}
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 max-w-md text-center shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Cuida tu alimentación 🥗
            </h2>
            <p className="text-gray-700 mb-4">
              Recuerda que una buena alimentación es clave para tu bienestar. No
              solo importa qué comes, sino también{" "}
              <span className="font-semibold">cuándo</span> lo comes.
            </p>
            <ul className="text-left text-gray-800 space-y-2 mb-4">
              <li>
                ✅ Come en horarios regulares para mantener un metabolismo
                equilibrado.
              </li>
              <li>
                ✅ Elige alimentos naturales y balanceados para cubrir tus
                necesidades nutricionales.
              </li>
              <li>
                ✅ Bebe suficiente agua para mantenerte hidratado y mejorar tu
                digestión.
              </li>
            </ul>
            <p className="text-gray-800 font-semibold mb-6">
              🎉 ¡Tu salud es lo más importante! Alimentarte bien 🎉<br />
              no es una dieta, es un estilo de vida.
            </p>
            {mensaje && (
  <div className="mb-4 p-3 rounded text-white bg-red-500 text-sm shadow">
    {mensaje}
  </div>
)}

            <button
        onClick={enviarFormulario} // ✅ Reemplazado con la función de conexión
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Comenzar mi Plan Nutricional
      </button>

          </div>
        </div>
      )}
    </>
  );
}
