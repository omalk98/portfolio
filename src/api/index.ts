function api(url?: string, options?: RequestInit) {
  const uniqueId = localStorage.getItem("uniqueId");

  return fetch(import.meta.env.VITE_MAILER_URL + (url ?? ""), {
    method: "GET",
    ...options,
    headers: {
      ...options?.headers,
      Authorization: import.meta.env.VITE_AUTHORIZATION,
      "Content-Type": "application/json",
      authid: uniqueId ?? "",
    },
  });
}
export function track() {
  if (import.meta.env.PROD)
    api().then(async (res) => {
      if (res.ok) {
        const data = (await res.json()) as { uniqueId: string };
        localStorage.setItem("uniqueId", data.uniqueId);
      }
    });
}

interface MapPoint {
  start: {
    lat: number;
    lng: number;
  };
  end: {
    lat: number;
    lng: number;
  };
  country: string;
  countryCode: string;
  visitCount: number;
}

export async function getMapPoints(): Promise<MapPoint[]> {
  const mapData = (await (await api("map")).json()) as MapPoint[];
  return mapData;
}
