import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { CaseStudyContent } from "./CaseStudyContent";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = cases.find((c) => c.slug === slug);
  if (!caseData) return { title: "Case não encontrado | Fyze" };
  return {
    title: `${caseData.client} | Cases Fyze`,
    description: caseData.description,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = cases.find((c) => c.slug === slug);
  if (!caseData) notFound();
  return <CaseStudyContent caseData={caseData} />;
}
