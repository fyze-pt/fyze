import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { websitesCases } from "@/data/websites-cases";
import { WebsiteCaseContent } from "./WebsiteCaseContent";

export function generateStaticParams() {
  return websitesCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = websitesCases.find((x) => x.slug === slug);
  if (!c) return { title: "Site não encontrado | Fyze" };
  return {
    title: `${c.client} — Site | Fyze`,
    description: c.shortDescription,
    openGraph: {
      title: `${c.client} — Site`,
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
  const c = websitesCases.find((x) => x.slug === slug);
  if (!c) notFound();
  return <WebsiteCaseContent caseData={c} />;
}
