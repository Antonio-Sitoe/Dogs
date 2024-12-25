'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Comment } from './photo-get';


export type Photo = {
  id: string;
  nome: string;
  title: string;
  date: string;
  imagem: string;
  peso: string;
  idade: string;
  author: string;
  acessos: string;
  total_comments: string;
  comments: Comment[]
};



type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};





export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit,
) {
  try {
    const { data } = await api.get(`/photo?_page=${page}&_total=${total}${user ? `&_user=${user}` : ''}`)
    console.log({ data })
    return {
      data: data?.data?.photos.map((item: { userId: any; nome: any; createdAt: any; imagem: any; }) => {
        return {
          ...item,
          author: item.userId,
          title: item.nome,
          date: item.createdAt,
          src: item.imagem,
          total_comments: 0
        }
      }) || [], ok: true, error: ''
    };
  } catch (error) {
    return apiError(error);
  }
}
