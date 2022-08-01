export const API_URL = "https://dogsapi.origamid.dev/json";

interface ITOKEN_POST {
  username: string;
  password: string;
  email?: string;
}

export function TOKEN_POST({ username, password }: ITOKEN_POST) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    },
  };
}
export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
export function USER_POST({ username, email, password }: ITOKEN_POST) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    },
  };
}
export function PHOTO_POST(formData: FormData, token: string | null) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

interface IPHOTOS_GET {
  page: number;
  total: number;
  user: number;
}
export function PHOTOS_GET({ page, total, user }: IPHOTOS_GET) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
