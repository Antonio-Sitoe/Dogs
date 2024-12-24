"use server";

import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
import { api } from '../functions/api';

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const { data } = await api.post('/sign-in', {
      email: username,
      password,
    })
    console.log(data);
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    console.log(error);
    return apiError(error);
  }
}
