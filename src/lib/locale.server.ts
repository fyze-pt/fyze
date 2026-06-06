import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";

/**
 * Reads the active locale from the `fyze_locale` cookie (server-side only).
 * Mirrors the variant system in {@link ./variant.ts}. Defaults to "pt".
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return value === "en" ? "en" : "pt";
}
