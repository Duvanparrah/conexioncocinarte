// Esquema de validación con Zod
import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .nonempty('El email es obligatorio'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .nonempty('La contraseña es obligatoria'),
  confirmPassword: z
    .string()
    .nonempty('Debes confirmar la contraseña')
    .refine((val, ctx) => val === ctx.parent.password, 'Las contraseñas no coinciden'),
});