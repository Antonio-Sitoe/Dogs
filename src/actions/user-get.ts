'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function userGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Token não encontrado.');
    const { data } = await api.get('/users/me')
    return { data: data?.user, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}