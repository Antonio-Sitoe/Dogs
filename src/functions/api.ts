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

export { api }