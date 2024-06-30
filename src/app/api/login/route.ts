import bcrypt from "bcrypt";

import { prisma } from "@/functions/prisma";
import { signJWT } from "@/functions/token";
import { ZodError } from "zod";
import { userPostSchema } from "@/schemas/user";
import { NextRequest, NextResponse } from "next/server";

const schema = userPostSchema.omit({
  username: true,
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const { email, password } = schema.parse(body);
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("Usuario nao encontrado");
    }

    const hashedPassword = await bcrypt.compare(password, user.password);

    if (hashedPassword) {
      const token = await signJWT({ id: user.id, username: user.name });
      return NextResponse.json({
        message: "Sucesso! " + hashedPassword,
        user,
        token,
      });
    } else {
      return NextResponse.json(
        { message: "Credenciais inválidas. Por favor, tente novamente" },
        {
          status: 409,
        }
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error.issues.map((item) => item.message),
        },
        {
          status: 400,
        }
      );
    }
    if (error instanceof Error)
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
  }
}
