// Google Tag Manager container for endeavorclean.com. All Google tags (Google
// tag AW-17959190503, GA4 G-Z4ZRMB430D, Ads conversions) live inside this
// container, so the site loads GTM only — never a second gtag snippet.
export const GTM_ID = "GTM-WX6DS68P";

type DataLayerEvent = { event: string } & Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** Push an event to the GTM dataLayer. Safe to call during SSR (no-op). */
export function track(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}
