export const API_URL = process.env.REACT_APP_BASE_URL;

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
export function COMMENT_POST(id: number, { comment }: { comment: string }) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify({ comment }),
    },
  };
}
export function PHOTO_DELETE(id: number) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

interface IPHOTOS_GET {
  page: number;
  total: number;
  user?: number | string;
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
export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
    },
  };
}
export function PHOTO_GET_ID(id: number) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

interface IRECOVERY_PASSWORD {
  login: string;
  url?: string;
  key?: string;
  password?: string;
}
export function RECOVERY_PASSWORD(body: IRECOVERY_PASSWORD) {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
export function RECOVERY_RESET(body: IRECOVERY_PASSWORD) {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
export function STATS_GET() {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
