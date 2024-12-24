"use server";

import { api } from "@/functions/api";
import { cookies } from "next/headers";
import apiError from "@/functions/api-error";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  try {
    if (!username || !email || !password) throw new Error("Preencha os dados.");
    if (password.length < 6)
      throw new Error("A senha deve ter mais de 6 dígitos.");
    const { data } = await api.post("/users", {
      "username": username,
      "email": email,
      "password": password
    })
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
