"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";
import { getUICopy, type UICopy } from "@/data/ui-copy";

type LocaleContext = {
  locale: Locale;
  ui: UICopy;
  setLocale: (next: Locale) => void;
};

const Ctx = createContext<LocaleContext | null>(null);

export function useLocale(): LocaleContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      // Persist for server-side reads (getLocale) — 1 year.
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      setLocaleState(next);
      // Re-run server components so page copy switches too.
      router.refresh();
    },
    [locale, router],
  );

  const value = useMemo<LocaleContext>(
    () => ({ locale, ui: getUICopy(locale), setLocale }),
    [locale, setLocale],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
