import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getVariant } from "@/lib/variant";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const ui = getUICopy(await getLocale());
  return {
    title: ui.meta.layoutTitle,
    description: ui.meta.layoutDescription,
    icons: {
      icon: "/y-fyze.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variant = await getVariant();
  const locale = await getLocale();

  return (
    <html lang={locale === "en" ? "en" : "pt-PT"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-cyan-400 selection:text-zinc-950">
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
          `}
        </Script>
        <LocaleProvider initialLocale={locale}>
          {children}
          <CookieConsent />
        </LocaleProvider>
        <Analytics variant={variant} />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
