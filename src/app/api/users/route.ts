import { prisma } from "@/functions/prisma";
import { signJWT } from "@/functions/token";
import { userPostSchema } from "@/schemas/user";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET(request: Request, response: Response) {
  return Response.json({
    message: "gggg",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const { username, email, password } = userPostSchema.parse(body);
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      throw new Error("E-mail já está em uso.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name: username,
        password: hashedPassword,
      },
    });

    const token = await signJWT({
      id: newUser.id,
      username: newUser.name,
    });

    return NextResponse.json({
      user: {
        id: newUser.id,
        username: newUser.name,
        email: newUser.email,
      },
      token,
      status: 200,
    });
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
