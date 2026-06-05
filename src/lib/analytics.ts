declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export type ConsentState = "unknown" | "all" | "essential";
const CONSENT_KEY = "fyze_consent";
export const CONSENT_EVENT = "fyze:consent-changed";

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  const v = window.localStorage.getItem(CONSENT_KEY);
  if (v === "all" || v === "essential") return v;
  return "unknown";
}

export function setConsent(state: "all" | "essential") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, state);

  if (window.gtag) {
    const granted = state === "all";
    window.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      functionality_storage: granted ? "granted" : "denied",
      personalization_storage: granted ? "granted" : "denied",
    });
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

export type EventName =
  | "cta_click"
  | "form_submit"
  | "form_start"
  | "whatsapp_click"
  | "case_view"
  | "scroll_depth";

type EventProps = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: EventName, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  // GA receives all events; Consent Mode v2 handles privacy (modeled
  // conversions when consent denied, full data when granted).
  if (window.gtag) {
    window.gtag("event", name, props);
  }

  // Meta Pixel and other vendors only when explicit consent.
  if (readConsent() !== "all") return;

  if (window.fbq) {
    const fbName =
      name === "form_submit"
        ? "Lead"
        : name === "cta_click"
          ? "Contact"
          : "CustomEvent";
    window.fbq("track", fbName, props);
  }
}
