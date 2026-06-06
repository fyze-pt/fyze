import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWebsiteCase } from "@/data/websites-cases";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";
import { WebsiteCaseContent } from "./WebsiteCaseContent";

// Rendered per-request so the locale cookie is always honored.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const ui = getUICopy(locale);
  const c = getWebsiteCase(slug, locale);
  if (!c) return { title: ui.meta.siteNotFound };
  return {
    title: `${c.client} — ${ui.meta.siteSuffix}`,
    description: c.shortDescription,
    openGraph: {
      title: `${c.client} — ${ui.meta.siteOgSuffix}`,
      description: c.shortDescription,
      type: "article",
      images: [c.heroImage],
    },
  };
}

export default async function SiteCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getWebsiteCase(slug, await getLocale());
  if (!c) notFound();
  return <WebsiteCaseContent caseData={c} />;
}
