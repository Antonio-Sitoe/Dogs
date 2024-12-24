'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';

export default async function passwordForgot(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  try {
    if (!login) throw new Error('Preencha os dados.');
    const { data } = await api.post('/password-recover', {
      email: login,
    })

    return { data: data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}