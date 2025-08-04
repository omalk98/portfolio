function api(url?: string, options?: RequestInit) {
  const vid = localStorage.getItem("vid");

  return fetch(import.meta.env.VITE_MAILER_URL + (url ?? ""), {
    method: "GET",
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `${import.meta.env.VITE_AUTHORIZATION}-${vid ?? ""}`,
      "Content-Type": "application/json",
    },
  });
}
export function track() {
  if (import.meta.env.PROD)
  api().then(async (res) => {
    if (res.ok) {
      try {
        const data = (await res.json()) as { vid: string };
        if (data.vid) {
          localStorage.setItem("vid", data.vid);
        }
      } catch {
        // Handle error if JSON parsing fails
      }
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
