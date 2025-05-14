const app = require("./app.js");
const { PORT } = require("./config.js");
const { connectDB, sequelize } = require("./db.js"); // ← Asegúrate de importar la instancia `sequelize`

async function main() {
  try {
    await connectDB();                // 🔌 Conecta a la BD
    await sequelize.sync({ alter: true });  // ✅ Crea las tablas si no existen (¡esta es la línea clave!)
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

main();
