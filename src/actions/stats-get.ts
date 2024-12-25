'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export default async function statsGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Acesso negado.');
    const { data } = await api.get<{ data: any }>('/photo/statics')
    return { data: data?.data || [], ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
