import { useState } from "react";

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
    ingredientes: [],
  });

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

  const paso = pasos[pasoActual];
  const progreso = ((pasoActual + 1) / pasos.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 bg-white/90 rounded-2xl shadow-2xl text-center">
      <div className="w-full bg-gray-200 h-3 rounded-full mb-6 overflow-hidden">
        <div
          className="h-3 bg-green-600 rounded-full transition-all duration-300"
          style={{ width: `${progreso}%` }}
        />
      </div>

      <h2 className="text-2xl font-bold text-green-800 mb-2">{paso.titulo}</h2>
      <p className="text-gray-700 mb-6">{paso.descripcion}</p>

      {pasoActual === 0 && (
        <div className="flex flex-col gap-4 items-center mb-5">
          {paso.opciones.map((op, i) => (
            <label
              key={i}
              className={`w-64 px-4 py-3 rounded-xl border-2 cursor-pointer flex items-center gap-4 ${
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
              <img src={op.icon} alt={op.label} className="w-12 h-12" />
              <span className="text-lg font-semibold text-green-900">{op.label}</span>
            </label>
          ))}
        </div>
      )}

      {pasoActual === 1 && (
        <div className="grid gap-4 mb-6 text-left">
          {paso.campos.map((campo, i) => {
            const { label, key } = campo;
            if (key === "sexo") {
              return (
                <select
                  key={i}
                  value={formulario.sexo}
                  onChange={(e) => manejarCambio("sexo", e.target.value)}
                  className="w-full p-3 border rounded-lg text-gray-700"
                >
                  <option value="" disabled>Selecciona tu sexo</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              );
            }

            return (
              <input
                key={i}
                type="number"
                value={formulario[key]}
                placeholder={label}
                onChange={(e) => manejarCambio(key, e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
            );
          })}
        </div>
      )}

      {pasoActual === 2 && (
        <div className="flex flex-col gap-4 items-center mb-6">
          {paso.opciones.map((op, i) => (
            <label
              key={i}
              className={`w-full md:w-96 px-4 py-3 rounded-xl border-2 cursor-pointer flex items-center gap-4 ${
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
              <span className="text-left text-sm text-green-900">{op.label}</span>
            </label>
          ))}
        </div>
      )}

      {pasoActual === 3 && (
        <div className="text-left">
          {Object.entries(paso.secciones).map(([categoria, items]) => (
            <div key={categoria} className="mb-4">
              <h3 className="font-semibold text-green-800 mb-2">{categoria}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleIngrediente(item)}
                    className={`px-4 py-2 rounded-full border ${
                      formulario.ingredientes.includes(item)
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-green-700 border-green-400"
                    } transition`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={avanzarPaso}
        disabled={pasoActual === 0 && !formulario.objetivo}
        className={`mt-6 px-6 py-2 rounded-full text-lg font-semibold transition ${
          pasoActual === 0 && !formulario.objetivo
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        Continuar
      </button>
    </div>
  );
}
