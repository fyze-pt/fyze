"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import Clarity from "@microsoft/clarity";
import { readConsent, CONSENT_EVENT, trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function Analytics({ variant }: { variant: string }) {
  const [consentAll, setConsentAll] = useState(false);

  useEffect(() => {
    setConsentAll(readConsent() === "all");
    const onChange = () => setConsentAll(readConsent() === "all");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // Microsoft Clarity via official package — initialized once consent is granted.
  useEffect(() => {
    if (consentAll && CLARITY_ID) {
      Clarity.init(CLARITY_ID);
    }
  }, [consentAll]);

  useEffect(() => {
    const thresholds = [50, 75, 100];
    const fired = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = (h.scrollTop / total) * 100;
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent("scroll_depth", { depth: t, variant });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <>
      {/* GA always loads — Consent Mode v2 (set in layout.tsx) handles
          privacy by gating cookies/identifiers until consent is granted. */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                send_page_view: true,
                custom_map: { dimension1: 'fyze_variant' }
              });
              gtag('set', 'user_properties', { fyze_variant: '${variant}' });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel + Clarity require explicit consent (no native consent mode). */}
      {consentAll && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

    </>
  );
}
