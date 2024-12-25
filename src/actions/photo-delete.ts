'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoDelete(id: string) {
  const token = cookies().get('token')?.value;
  try {
    if (!token) throw new Error('Token inválido');

    await api.delete('/photo/' + id);

  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag('photos');
  redirect('/conta');
}
