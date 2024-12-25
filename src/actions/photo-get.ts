'use server';

import { api } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Photo } from './photos-get';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function photoGet(id: string) {
  try {
    const { data } = await api.get('/photo/' + id)
    console.log({ data: data.data })
    return { data: data.data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
