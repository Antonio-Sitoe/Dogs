import { z } from "zod";

export const userPostSchema = z.object({
  username: z.string({ required_error: "O campo username é obrigatório" }),
  email: z
    .string({ required_error: "O campo email é obrigatório" })
    .email("O campo email deve conter um valor valido"),
  password: z
    .string({ required_error: "O campo password é obrigatório" })
    .min(4, "O password deve ser maior de 4 digitos"),
});
