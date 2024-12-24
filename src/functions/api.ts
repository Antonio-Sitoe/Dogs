import axios from 'axios'
import { parseCookies } from 'nookies'

export const API_URL = "https://dogsapi.origamid.dev/json";

const api = axios.create({
  baseURL: "http://localhost:3333"
});


api.interceptors.request.use(async (config) => {
  let token_request: string | undefined
  if (typeof window === 'undefined') {
    const { cookies: serverCookies } = await import('next/headers')
    token_request = serverCookies().get('token')?.value
  } else {
    const { session } = parseCookies()
    token_request = session
  }
  if (token_request) config.headers.Authorization = `Bearer ${token_request}`
  return config
})


export function TOKEN_VALIDATE_POST() {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
  };
}


export function PHOTO_POST() {
  return {
    url: API_URL + "/api/photo",
  };
}



export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}

export function COMMENT_POST(id: string) {
  return {
    url: `${API_URL}/api/comment/${id}`,
  };
}

export function PHOTO_DELETE(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}



export function PASSWORD_RESET() {
  return {
    url: API_URL + "/api/password/reset",
  };
}

export function STATS_GET() {
  return {
    url: API_URL + "/api/stats",
  };
}


export { api }