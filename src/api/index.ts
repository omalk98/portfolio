function api(url?: string, options?: RequestInit) {
  return fetch(import.meta.env.VITE_MAILER_URL + (url ?? ''), {
    method: "GET",
    ...options,
    headers: {
      ...options?.headers,
      Authorization: import.meta.env.VITE_AUTHORIZATION,
      "Content-Type": "application/json",
    },
  });
}

export function track() {
  if (import.meta.env.PROD) api();
}
