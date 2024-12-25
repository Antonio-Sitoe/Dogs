'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { fileToBase64 } from '@/functions/file';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as string | null;
  const peso = formData.get('peso') as string | null;
  const img = formData.get('img') as File;


  try {
    if (!token || !nome || !idade || !peso || img.size === 0) {
      throw new Error('Preencha os dados.');
    }
    const imgBase64 = await fileToBase64(img);
    await api.post(`/photo`, {
      nome, idade, peso, img: imgBase64
    })

  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag('photos');
  redirect('/conta');
}
