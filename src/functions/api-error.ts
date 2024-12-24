import { AxiosError } from "axios";

export default function apiError(error: unknown): {
  data: null;
  ok: false;
  error: string;
} {
  if (error instanceof AxiosError) {
    return { data: null, ok: false, error: error.response?.data.message || error.message };
  }
  else if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  } else {
    return { data: null, ok: false, error: 'Erro genérico' };
  }
}
