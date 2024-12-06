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

export async function getMapPoints() {
  const mapData = await (await api("map")).json();

  return mapData.forEach((point: { _id: { coordinates: { lat: number; lon: number }; regionName: string } }) => {
    return {
      start: {
        lat: point._id.coordinates.lat,
        lng: point._id.coordinates.lon,
        label: point._id.regionName,
      },
      end: {
        lat: 43.7258,
        lng: -79.3324,
      }, // Toronto
    };
  });
}
