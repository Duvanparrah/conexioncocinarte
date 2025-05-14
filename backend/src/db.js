// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// // verificar cual es el error
// console.log({
//   DB_NAME: process.env.DB_NAME,
//   DB_USER: process.env.DB_USER,
//   DB_PASS: process.env.DB_PASS,
//   DB_HOST: process.env.DB_HOST,
//   DB_DIALECT: process.env.DB_DIALECT,
// });
// // ___________________

// const sequelize = new Sequelize(
//   process.env.DB_NAME,     // Nombre de la base de datos
//   process.env.DB_USER,     // Usuario
//   process.env.DB_PASS,     // Contraseña
//   {
//     host: process.env.DB_HOST,            // Dirección del host (por defecto localhost)
//     dialect: process.env.DB_DIALECT || "mysql", // Dialecto, por defecto mysql
//     logging: false,                          // Desactivar logging
//     pool: {                                  // Pool de conexiones para manejar conexiones concurrentes
//       max: 5,                                 // Número máximo de conexiones
//       min: 0,                                 // Número mínimo de conexiones
//       acquire: 30000,                         // Tiempo máximo de espera para obtener una conexión
//       idle: 10000                             // Tiempo de inactividad antes de liberar la conexión
//     },
//     dialectOptions: {
//       charset: 'utf8mb4',                    // Uso de utf8mb4 para soportar emojis y caracteres especiales
//     },
//   }
// );

// const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("MySQL base de datos conectada.");
//   } catch (error) {
//     console.error("Base de datos no conectada:", error);
//   }
// };

// module.exports = {
//   sequelize,
//   connectDB,
// };



const { Sequelize } = require("sequelize");
require("dotenv").config();

// Verificar las variables de entorno cargadas
console.log({
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
});

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nombre de la base de datos
  process.env.DB_USER,     // Usuario
  process.env.DB_PASS,     // Contraseña
  {
    host: process.env.DB_HOST,            // Dirección del host (por defecto localhost)
    dialect: process.env.DB_DIALECT || "mysql", // Dialecto, por defecto mysql
    logging: false,                          // Desactivar logging
    pool: {                                  // Pool de conexiones para manejar conexiones concurrentes
      max: 5,                                 // Número máximo de conexiones
      min: 0,                                 // Número mínimo de conexiones
      acquire: 30000,                         // Tiempo máximo de espera para obtener una conexión
      idle: 10000                             // Tiempo de inactividad antes de liberar la conexión
    },
    dialectOptions: {
      charset: 'utf8mb4',                    // Uso de utf8mb4 para soportar emojis y caracteres especiales
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL base de datos conectada.");
  } catch (error) {
    console.error("Base de datos no conectada:", error);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
