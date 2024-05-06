import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Este campo es requerido"),
  email: z.string().email("Correo no válido").min(1, "Este campo es requerido"),
  message: z.string().min(1, "Este campo es requerido"),
});
