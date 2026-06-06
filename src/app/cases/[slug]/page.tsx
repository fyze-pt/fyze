import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCase } from "@/data/cases";
import { getLocale } from "@/lib/locale.server";
import { getUICopy } from "@/data/ui-copy";
import { CaseStudyContent } from "./CaseStudyContent";

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
  const caseData = getCase(slug, locale);
  if (!caseData) return { title: ui.meta.caseNotFound };
  return {
    title: `${caseData.client} | ${ui.meta.casesSuffix}`,
    description: caseData.description,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCase(slug, await getLocale());
  if (!caseData) notFound();
  return <CaseStudyContent caseData={caseData} />;
}
