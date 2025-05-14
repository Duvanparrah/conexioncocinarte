const { z } = require("zod");

const registerSchema = z.object({
  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .email({ message: "Correo no válido" }),

  contraseña: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),

  tipo_usuario: z.enum(["normal", "administrador", "admin_lider"]).optional(),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .email({ message: "Correo no válido" }),

  contraseña: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

module.exports = { registerSchema, loginSchema };
