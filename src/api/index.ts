export type EventType =
  | "page_view"
  | "project_view"
  | "resume_download"
  | "github_click"
  | "linkedin_click"
  | "contact_submit";

type EventMetadata = { project?: string };
type BrowserContext = {
  page: string;
  referrer: string;
  search: string;
  language: string;
  timezone: string;
  width: number;
  height: number;
  occurredAt: string;
};

function api(url: string, options?: RequestInit) {
  return fetch(import.meta.env.VITE_MAILER_URL + url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: import.meta.env.VITE_AUTHORIZATION,
      "Content-Type": "application/json",
    },
  });
}

export function getUtm(search: string) {
  const params = new URLSearchParams(search);
  const names = ["source", "medium", "campaign", "term", "content"] as const;
  return Object.fromEntries(
    names.flatMap((name) => {
      const value = params.get(`utm_${name}`);
      return value ? [[name, value]] : [];
    })
  );
}

export function trackingPayload(
  type: EventType,
  metadata?: EventMetadata,
  browser: BrowserContext = {
    page: window.location.href,
    referrer: document.referrer,
    search: window.location.search,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    width: window.innerWidth,
    height: window.innerHeight,
    occurredAt: new Date().toISOString(),
  }
) {
  const utm = getUtm(browser.search);
  return {
    visitorId:
      typeof localStorage === "undefined"
        ? undefined
        : localStorage.getItem("vid") || undefined,
    sessionId:
      typeof sessionStorage === "undefined"
        ? undefined
        : sessionStorage.getItem("sid") || undefined,
    type,
    page: browser.page,
    occurredAt: browser.occurredAt,
    context: {
      viewport: { width: browser.width, height: browser.height },
      language: browser.language,
      timezone: browser.timezone,
      referrer: browser.referrer || undefined,
      utm: Object.keys(utm).length ? utm : undefined,
    },
    metadata,
  };
}

export function trackEvent(type: EventType, metadata?: EventMetadata) {
  if (!import.meta.env.PROD) return;
  trackingQueue = trackingQueue
    .then(async () => {
      const response = await api("events", {
        method: "POST",
        body: JSON.stringify(trackingPayload(type, metadata)),
        keepalive: true,
      });
      if (!response.ok) return;
      const data = (await response.json()) as {
        visitorId?: string;
        sessionId: string;
      };
      if (data.visitorId) localStorage.setItem("vid", data.visitorId);
      sessionStorage.setItem("sid", data.sessionId);
    })
    .catch(() => {});
}

let trackingQueue: Promise<void> = Promise.resolve();

export interface CountryVisit {
  countryCode: string;
  lat: number;
  lng: number;
  visitCount: number;
}

export function mapCountriesToDots(countries: CountryVisit[]) {
  return countries.map(({ lat, lng }) => ({
    start: { lat, lng },
    end: { lat: 43.6532, lng: -79.3832 },
  }));
}

export async function getMapCountries(): Promise<CountryVisit[]> {
  const response = await api("map");
  if (!response.ok) throw new Error("Failed to fetch map data");
  return response.json() as Promise<CountryVisit[]>;
}
