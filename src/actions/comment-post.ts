'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;
  try {
    if (!token || !comment || !id) throw new Error('Preencha os dados.');
    const { data } = await api.post(`/comments/${id}`, {
      comment,
    })
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
