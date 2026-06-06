// Client-safe locale constants and types (no server-only imports here, so this
// module can be pulled into client bundles). The server-only `getLocale`
// (which reads cookies) lives in ./locale.server.ts.

export const LOCALES = ["pt", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const LOCALE_COOKIE = "fyze_locale";
