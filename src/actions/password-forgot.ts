'use server';

import { PASSWORD_FORGOT } from '@/functions/api';
import apiError from '@/functions/api-error';

export default async function passwordForgot(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlEsqueci = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha os dados.');
    const { url } = PASSWORD_FORGOT();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlEsqueci,
      }),
    });
    if (!response.ok) throw new Error('Email ou usuário não cadastrado.');
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}